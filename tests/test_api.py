from app import app, plain_explanation_for
from soa_official import (
    OfficialQuestionSourceError,
    assert_official_soa_url,
    fetch_bytes,
    option_value,
    parse_answer_key,
    parse_questions,
    validate_questions,
)


def test_health_endpoint_returns_question_count():
    client = app.test_client()
    response = client.get("/api/health")

    assert response.status_code == 200
    data = response.get_json()
    assert data["status"] == "ok"
    assert data["question_count"] > 0
    assert data["question_source"] == "Society of Actuaries official Exam P PDFs"
    assert data["source_page"].startswith("https://www.soa.org/")
    assert data["questions_pdf"].startswith("https://www.soa.org/")
    assert "official_sync_at" in data
    assert "questions_pdf_sha256" in data
    assert "solutions_pdf_sha256" in data


def test_answer_endpoint_rejects_invalid_json_body():
    client = app.test_client()

    response = client.post(
        "/api/answers/check",
        data="not-json",
        content_type="text/plain",
    )

    assert response.status_code == 400


def test_official_source_rejects_insecure_or_untrusted_urls():
    for url in (
        "http://www.soa.org/example.pdf",
        "https://example.com/example.pdf",
        "https://www.soa.org@example.com/example.pdf",
    ):
        try:
            assert_official_soa_url(url)
        except OfficialQuestionSourceError:
            pass
        else:
            raise AssertionError(f"Untrusted URL should be rejected: {url}")


def test_official_fetch_rejects_redirect_away_from_soa(monkeypatch):
    class FakeResponse:
        headers = {"Content-Length": "4"}

        def __enter__(self):
            return self

        def __exit__(self, *_args):
            return False

        def geturl(self):
            return "https://example.com/not-official.pdf"

        def read(self, _size):
            return b"%PDF"

    monkeypatch.setattr("soa_official.urlopen", lambda *_args, **_kwargs: FakeResponse())

    try:
        fetch_bytes("https://www.soa.org/official.pdf")
    except OfficialQuestionSourceError:
        pass
    else:
        raise AssertionError("A redirect away from SOA must be rejected")


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


def test_solution_heading_after_pdf_page_footer_is_still_parsed():
    extracted = "calculation = 0.5 Page 35 of 190 127. Solution: A\nWorked solution"

    assert parse_answer_key(extracted)[127] == "A"


def test_parser_accepts_soa_question_number_followed_by_comma():
    question_text = """286, Example official question.\n(A) 1/6\n(B) 1/4\n(C) 1/3\n(D) 1/2\n(E) 2/3"""
    solution_text = "286. Solution: C\nOfficial explanation"

    questions = parse_questions(question_text, solution_text)

    assert len(questions) == 1
    assert questions[0]["id"] == 286
    assert questions[0]["answerLetter"] == "C"
    assert questions[0]["answer"] == "1/3"


def test_parser_accepts_page_footer_joined_to_question_heading():
    question_text = (
        "Page 3 of 277 4. Example official question.\n"
        "(A) 1 (B) 2 (C) 3 (D) 4 (E) 5"
    )
    solution_text = "4. Solution: D\nOfficial explanation"

    questions = parse_questions(question_text, solution_text)

    assert len(questions) == 1
    assert questions[0]["id"] == 4
    assert questions[0]["options"] == ["1", "2", "3", "4", "5"]


def test_parser_accepts_pdf_option_with_missing_closing_parenthesis():
    question_text = (
        "146. Example official question. "
        "(A) 0.064 (B) 0.138 (C) 0.148 (D 0.230 (E) 0.246"
    )
    solution_text = "146. Solution: D\nOfficial explanation"

    questions = parse_questions(question_text, solution_text)

    assert len(questions) == 1
    assert questions[0]["options"] == ["0.064", "0.138", "0.148", "0.230", "0.246"]
    assert questions[0]["answer"] == "0.230"


def test_parser_does_not_treat_plan_letter_as_an_option():
    question_text = (
        "502. The policyholder could have chosen Plan B. Calculate the probability. "
        "(A) 0.200 (B) 0.351 (C) 0.443 (D) 0.556 (E) 0.750"
    )
    solution_text = "502. Solution: D\nOfficial explanation"

    questions = parse_questions(question_text, solution_text)

    assert len(questions) == 1
    assert questions[0]["options"][0] == "0.200"
    assert questions[0]["answer"] == "0.556"


def test_empty_answer_letter_is_not_treated_as_a_valid_option():
    assert option_value(["A", "B", "C", "D", "E"], "") == ""


def test_parser_skips_numbered_pdf_material_without_an_official_answer():
    question_text = "1. Extracted material\n(A) A\n(B) B\n(C) C\n(D) D\n(E) E"

    assert parse_questions(question_text, "") == []


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


def test_plain_explanation_cleans_pdf_number_spacing():
    question = {
        "question": "Calculate the probability that exactly two are defective.",
        "answer": "0.102",
        "answer_letter": "C",
        "explanation": "The probability is = 0 . 102 .",
    }

    result = plain_explanation_for(question)

    assert "0.102" in result
    assert "0 . 102" not in result
