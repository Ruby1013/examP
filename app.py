import json
import os
import random
import re
import sqlite3
from contextlib import contextmanager
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory
from soa_official import (
    DEFAULT_QUESTIONS_PDF_URL,
    DEFAULT_SOLUTIONS_PDF_URL,
    OfficialQuestionSourceError,
    load_official_questions,
    validate_questions,
)

try:
    import psycopg2
    import psycopg2.extras
except ImportError:
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
        with conn.cursor() as cursor:
            cursor.execute(sql, params)
            return

    conn.execute(sql, params)


def fetchone(conn, sql, params=None):
    params = params or []
    if using_postgres():
        sql = sql.replace("?", "%s")
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
            cursor.execute(sql, params)
            return cursor.fetchone()

    row = conn.execute(sql, params).fetchone()
    return dict(row) if row else None


def fetchall(conn, sql, params=None):
    params = params or []
    if using_postgres():
        sql = sql.replace("?", "%s")
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
            cursor.execute(sql, params)
            return cursor.fetchall()

    return [dict(row) for row in conn.execute(sql, params).fetchall()]


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
        return

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
    return load_questions_from_local_js()


def load_questions_from_local_js():
    return parse_question_bank_source(load_local_question_bank_source())


def parse_question_bank_source(source):
    match = re.search(r"const\s+questions\s*=\s*(\[.*\]);?\s*$", source, re.S)
    if not match:
        raise ValueError("Cannot find questions array in questionBank.js")

    return json.loads(match.group(1))


def load_local_question_bank_source():
    return (BASE_DIR / "questionBank.js").read_text(encoding="utf-8")


def load_seed_questions():
    # PDF downloads and parsing belong in the Render build step. Doing this in a
    # web request can exceed Gunicorn's worker timeout on a cold start.
    if (
        os.getenv("SOA_SYNC_AT_RUNTIME") == "1"
        and os.getenv("SOA_USE_LOCAL_QUESTIONBANK") != "1"
    ):
        try:
            return load_official_questions()
        except OfficialQuestionSourceError as exc:
            if os.getenv("SOA_ALLOW_LOCAL_FALLBACK", "1") != "1":
                raise
            app.logger.warning(
                "SOA runtime PDF sync failed; using bundled official snapshot: %s",
                exc,
            )

    questions = load_questions_from_local_js()
    validate_questions(questions)
    return questions


def insert_questions(conn, questions):
    for item in questions:
        options = item.get("options", [])
        options_value = (
            psycopg2.extras.Json(options)
            if using_postgres()
            else json.dumps(options, ensure_ascii=False)
        )

        if using_postgres():
            sql = """
                INSERT INTO questions
                    (id, topic, question, options, answer_letter, answer, explanation)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT (id) DO NOTHING
            """
        else:
            sql = """
                INSERT OR IGNORE INTO questions
                    (id, topic, question, options, answer_letter, answer, explanation)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """

        execute(
            conn,
            sql,
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


def seed_questions_if_empty(force_refresh=False):
    with get_connection() as conn:
        create_schema(conn)
        row = fetchone(conn, "SELECT COUNT(*) AS count FROM questions")
        if not force_refresh and row and int(row["count"]) > 0:
            return

    questions = load_seed_questions()

    with get_connection() as conn:
        create_schema(conn)
        if force_refresh:
            execute(conn, "DELETE FROM questions")

        insert_questions(conn, questions)


def normalize_question(row):
    options = row["options"]
    if isinstance(options, str):
        options = json.loads(options)

    return {
        "id": row["id"],
        "topic": row["topic"],
        "question": row["question"],
        "options": options,
    }


def explanation_goal(text):
    lowered = text.lower()
    if "given that" in lowered:
        return "這題要算條件機率：已知後面的條件已經發生，再縮小範圍計算。"
    if "none" in lowered or "neither" in lowered:
        return "這題要算『全部都沒發生』的機率；通常先算至少一件發生，再用 1 減掉。"
    if "both" in lowered:
        return "這題要算兩件事同時發生，也就是事件的交集。"
    if "at least" in lowered:
        return "這題要算『至少』的情況；直接相加太多時，通常改算反面再用 1 減掉。"
    if "exactly" in lowered:
        return "這題要算『剛好』指定次數的情況，不能把更多或更少的情況算進去。"
    if "standard deviation" in lowered:
        return "這題要找標準差，也就是結果通常會離平均值多遠。"
    if "variance" in lowered:
        return "這題要找變異數；先整理隨機變數的波動，再視需要相加或使用共變異數。"
    if "expected" in lowered or "expectation" in lowered:
        return "這題要找長期平均值，也就是把每個可能結果乘上它的機率後加總。"
    if "median" in lowered or "percentile" in lowered:
        return "這題要找分位點：讓累積機率剛好到題目指定的比例。"
    if "probability" in lowered:
        return "這題要算目標事件的機率；先把文字條件翻成事件，再決定要相加、相減或使用條件機率。"
    return "這題要把題目給的條件整理成可計算的隨機變數或事件關係。"


def explanation_method(text):
    lowered = text.lower()
    rules = [
        (
            ["without replacement", "hypergeometric"],
            "因為是從固定母體抽取而且不放回，各次抽取會互相影響，所以用超幾何分布／組合數。",
        ),
        (
            ["poisson"],
            "題目在數固定時間或區間內發生幾次，先找卜瓦松平均次數，再計算指定次數。",
        ),
        (
            ["exponential", "memoryless"],
            "題目在處理等待時間或壽命，使用指數分布的生存機率；若已經等了一段時間，可用記憶無關性。",
        ),
        (
            ["normal", "standard deviation", "standard normal"],
            "題目使用常態分布，先用平均數與標準差轉成 Z 值，再查相對應的累積機率。",
        ),
        (
            ["binomial", "number of successes", "probability of success"],
            "這是固定次數、每次只有成功或失敗的問題；先確認 n、成功機率 p，以及題目問剛好、至少或至多。",
        ),
        (
            ["uniform"],
            "均勻分布中每段長度同樣公平，因此機率可用目標區間長度除以總區間長度。",
        ),
        (
            ["density function", "probability density", "continuous"],
            "題目給的是連續型密度，機率不是看單一點，而是計算指定區間下方的面積。",
        ),
        (
            ["independent", "independence"],
            "題目指出事件獨立，所以同時發生時可以把各自的機率相乘。",
        ),
        (
            ["all three", "none of", "neither", "both", "union", "intersection"],
            "這是事件集合問題，先分清楚交集、聯集與補集，再用排容原理避免重複計算。",
        ),
    ]
    for keywords, message in rules:
        if any(keyword in lowered for keyword in keywords):
            return message
    return "依官方解答先定義事件或隨機變數，再把題目的文字條件逐項代入；不要只看最後答案。"


def key_numbers(text):
    values = re.findall(r"(?<![A-Za-z])(?:\d+/\d+|\d+(?:,\d{3})*(?:\.\d+)?%?)", text)
    unique = []
    for value in values:
        if value not in unique:
            unique.append(value)
    return unique[:10]


def key_calculations(explanation):
    calculations = []
    for raw_line in str(explanation or "").splitlines():
        line = re.sub(r"[’′]+", "", raw_line)
        line = re.sub(r"\s+", " ", line).strip(" ()")
        line = re.sub(r"(?<=\d)\s*\.\s*(?=\d)", ".", line)
        line = re.sub(r"\s+[xX]\s+", " × ", line)
        if (
            "=" in line
            and re.search(r"\d", line)
            and 6 <= len(line) <= 220
            and line.lower() not in {"official solution"}
        ):
            if line not in calculations:
                calculations.append(line)
    numeric_calculations = [
        line for line in calculations if len(re.findall(r"\d+(?:\.\d+)?%?", line)) >= 2
    ]
    return (numeric_calculations or calculations)[-2:]


def plain_explanation_for(question):
    question_text = str(question.get("question", ""))
    explanation = str(question.get("explanation", ""))
    numbers = key_numbers(question_text)
    calculations = key_calculations(explanation)
    lines = [
        f"題目要做什麼：{explanation_goal(question_text)}",
        "關鍵資料：" + ("、".join(numbers) if numbers else "先從題目標出所有已知條件。"),
        f"解題方法：{explanation_method(question_text + ' ' + explanation)}",
    ]
    if calculations:
        lines.append("官方解答的關鍵算式：" + " → ".join(calculations))
    else:
        lines.append("官方解答的關鍵步驟：依照上面的事件或分布設定，逐步代入題目數值。")
    lines.append(
        f"結論：計算結果是 {question.get('answer', '')}，對應選項 {question.get('answer_letter') or question.get('answerLetter') or ''}。"
    )
    return "\n".join(lines)


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
            "question_source": "Society of Actuaries official Exam P PDFs",
            "questions_pdf": DEFAULT_QUESTIONS_PDF_URL,
            "solutions_pdf": DEFAULT_SOLUTIONS_PDF_URL,
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

    return jsonify(
        {
            "correct": selected_answer == row["answer"],
            "answer": row["answer"],
            "answer_letter": row.get("answer_letter"),
            "explanation": row.get("explanation") or "",
            "plain_explanation": plain_explanation_for(row),
        }
    )


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=os.getenv("FLASK_DEBUG") == "1")
