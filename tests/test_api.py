from app import app


def test_health_endpoint_returns_question_count():
    client = app.test_client()
    response = client.get("/api/health")

    assert response.status_code == 200
    data = response.get_json()
    assert data["status"] == "ok"
    assert data["question_count"] > 0


def test_random_question_hides_answer():
    client = app.test_client()
    response = client.get("/api/questions/random")

    assert response.status_code == 200
    data = response.get_json()
    assert "question" in data
    assert "options" in data
    assert "answer" not in data
