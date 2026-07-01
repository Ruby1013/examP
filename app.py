import json
import os
import random
import re
import sqlite3
from contextlib import contextmanager
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory

try:
    import psycopg2
    import psycopg2.extras
except ImportError:  # Local fallback can still run with SQLite.
    psycopg2 = None


BASE_DIR = Path(__file__).resolve().parent
DATABASE_URL = os.getenv("DATABASE_URL", "")
SQLITE_PATH = BASE_DIR / "exam_p.sqlite3"

app = Flask(__name__)


def using_postgres():
    return DATABASE_URL.startswith(("postgres://", "postgresql://")) and psycopg2 is not None


@contextmanager
def get_connection():
    if using_postgres():
        conn = psycopg2.connect(DATABASE_URL)
    else:
        conn = sqlite3.connect(SQLITE_PATH)
        conn.row_factory = sqlite3.Row

    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def execute(conn, sql, params=None):
    params = params or []
    if using_postgres():
        sql = sql.replace("?", "%s")

    with conn.cursor() if using_postgres() else conn as cursor:
        cursor.execute(sql, params)
        return cursor


def fetchone(conn, sql, params=None):
    if using_postgres():
        sql = sql.replace("?", "%s")
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
            cursor.execute(sql, params or [])
            return cursor.fetchone()

    cursor = conn.execute(sql, params or [])
    row = cursor.fetchone()
    return dict(row) if row else None


def fetchall(conn, sql, params=None):
    if using_postgres():
        sql = sql.replace("?", "%s")
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
            cursor.execute(sql, params or [])
            return cursor.fetchall()

    cursor = conn.execute(sql, params or [])
    return [dict(row) for row in cursor.fetchall()]


def create_schema(conn):
    if using_postgres():
        execute(
            conn,
            """
            CREATE TABLE IF NOT EXISTS questions (
                id INTEGER PRIMARY KEY,
                topic TEXT NOT NULL,
                question TEXT NOT NULL,
                options JSONB NOT NULL,
                answer_letter TEXT,
                answer TEXT NOT NULL,
                explanation TEXT
            )
            """,
        )
    else:
        execute(
            conn,
            """
            CREATE TABLE IF NOT EXISTS questions (
                id INTEGER PRIMARY KEY,
                topic TEXT NOT NULL,
                question TEXT NOT NULL,
                options TEXT NOT NULL,
                answer_letter TEXT,
                answer TEXT NOT NULL,
                explanation TEXT
            )
            """,
        )


def load_questions_from_js():
    source = (BASE_DIR / "questionBank.js").read_text(encoding="utf-8")
    match = re.search(r"const\s+questions\s*=\s*(\[.*\]);?\s*$", source, re.S)
    if not match:
        raise ValueError("Cannot find questions array in questionBank.js")

    return json.loads(match.group(1))


def seed_questions_if_empty():
    with get_connection() as conn:
        create_schema(conn)
        row = fetchone(conn, "SELECT COUNT(*) AS count FROM questions")
        if row and int(row["count"]) > 0:
            return

        questions = load_questions_from_js()
        for item in questions:
            options = item.get("options", [])
            options_value = (
                psycopg2.extras.Json(options)
                if using_postgres()
                else json.dumps(options, ensure_ascii=False)
            )

            execute(
                conn,
                """
                INSERT INTO questions
                    (id, topic, question, options, answer_letter, answer, explanation)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                [
                    item["id"],
                    item.get("topic", "SOA Exam P Sample Question"),
                    item.get("question", ""),
                    options_value,
                    item.get("answerLetter", ""),
                    item.get("answer", ""),
                    item.get("explanation", ""),
                ],
            )


def normalize_question(row, include_answer=False):
    options = row["options"]
    if isinstance(options, str):
        options = json.loads(options)

    payload = {
        "id": row["id"],
        "topic": row["topic"],
        "question": row["question"],
        "options": options,
    }

    if include_answer:
        payload.update(
            {
                "answer_letter": row.get("answer_letter"),
                "answer": row["answer"],
                "explanation": row.get("explanation") or "",
            }
        )

    return payload


def plain_explanation_for(question):
    return (
        "這一題的重點是先辨認題目給的條件，再選擇對應的機率方法。"
        "請先把事件、樣本空間或隨機變數整理清楚，再比對官方解答的計算步驟。"
        f"本題正確答案是 {question['answer']}。"
    )


@app.before_request
def ensure_database_ready():
    if not getattr(app, "_database_ready", False):
        seed_questions_if_empty()
        app._database_ready = True


@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/script.js")
def script():
    return send_from_directory(BASE_DIR, "script.js")


@app.route("/questionBank.js")
def question_bank_script():
    return send_from_directory(BASE_DIR, "questionBank.js")


@app.route("/api/health")
def health():
    with get_connection() as conn:
        create_schema(conn)
        row = fetchone(conn, "SELECT COUNT(*) AS count FROM questions")

    return jsonify(
        {
            "status": "ok",
            "database": "postgresql" if using_postgres() else "sqlite",
            "question_count": int(row["count"]) if row else 0,
        }
    )


@app.route("/api/questions/random")
def random_question():
    with get_connection() as conn:
        rows = fetchall(conn, "SELECT id FROM questions")
        if not rows:
            return jsonify({"error": "No questions available"}), 404

        chosen = random.choice(rows)
        row = fetchone(conn, "SELECT * FROM questions WHERE id = ?", [chosen["id"]])

    return jsonify(normalize_question(row))


@app.route("/api/questions/<int:question_id>")
def get_question(question_id):
    with get_connection() as conn:
        row = fetchone(conn, "SELECT * FROM questions WHERE id = ?", [question_id])

    if not row:
        return jsonify({"error": "Question not found"}), 404

    return jsonify(normalize_question(row))


@app.route("/api/answers/check", methods=["POST"])
def check_answer():
    data = request.get_json(force=True)
    question_id = data.get("question_id")
    selected_answer = data.get("answer")

    with get_connection() as conn:
        row = fetchone(conn, "SELECT * FROM questions WHERE id = ?", [question_id])

    if not row:
        return jsonify({"error": "Question not found"}), 404

    correct = selected_answer == row["answer"]
    return jsonify(
        {
            "correct": correct,
            "answer": row["answer"],
            "answer_letter": row.get("answer_letter"),
            "explanation": row.get("explanation") or "",
            "plain_explanation": plain_explanation_for(row),
        }
    )


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=os.getenv("FLASK_DEBUG") == "1")
