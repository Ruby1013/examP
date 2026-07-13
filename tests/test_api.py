from app import app, plain_explanation_for
from soa_official import parse_answer_key, parse_questions, validate_questions


def test_health_endpoint_returns_question_count():
    client = app.test_client()
    response = client.get("/api/health")

    assert response.status_code == 200
    data = response.get_json()
    assert data["status"] == "ok"
    assert data["question_count"] > 0
    assert data["question_source"] == "Society of Actuaries official Exam P PDFs"
    assert data["questions_pdf"].startswith("https://www.soa.org/")


def test_random_question_hides_answer():
    client = app.test_client()
    response = client.get("/api/questions/random")

    assert response.status_code == 200
    data = response.get_json()
    assert "question" in data
    assert "options" in data
    assert "answer" not in data


def test_official_solution_label_is_used_as_answer_key():
    assert parse_answer_key("1. Solution: D\nWorked solution") == {1: "D"}


def test_parser_accepts_soa_question_number_followed_by_comma():
    question_text = """286, Example official question.\n(A) 1/6\n(B) 1/4\n(C) 1/3\n(D) 1/2\n(E) 2/3"""
    solution_text = "286. Solution: C\nOfficial explanation"

    questions = parse_questions(question_text, solution_text)

    assert len(questions) == 1
    assert questions[0]["id"] == 286
    assert questions[0]["answerLetter"] == "C"
    assert questions[0]["answer"] == "1/3"


def test_quality_gate_rejects_incomplete_record(monkeypatch):
    monkeypatch.setenv("SOA_MIN_QUESTION_COUNT", "1")
    malformed = [
        {
            "id": 1,
            "question": "Question",
            "options": ["A", "B"],
            "answerLetter": "A",
            "answer": "A",
        }
    ]

    try:
        validate_questions(malformed)
    except Exception as exc:
        assert "invalid records" in str(exc)
    else:
        raise AssertionError("Incomplete official records must be rejected")


def test_plain_explanation_uses_question_numbers_and_official_calculation():
    question = {
        "question": "28% watched A, 29% watched B, and 8% watched all three. Calculate the percentage that watched none.",
        "answer": "52%",
        "answer_letter": "D",
        "explanation": "Official solution: D\n1 - (0.28 + 0.29 - 0.08) = 0.52",
    }

    result = plain_explanation_for(question)

    assert "28%" in result
    assert "29%" in result
    assert "1 - (0.28 + 0.29 - 0.08) = 0.52" in result
    assert "52%" in result
    assert "選項 D" in result
