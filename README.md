# examP

Exam P 題庫練習系統，結合 Flask API、PostgreSQL 題庫資料庫、前端答題介面與 Snake Game 休息機制。

## 技術架構

- Frontend: HTML, CSS, JavaScript, Canvas
- Backend: Flask REST API
- Database: PostgreSQL on Render, SQLite fallback for local development
- Deployment: Render
- Automation testing: Playwright and Selenium examples

## Local Run

```bash
pip install -r requirements.txt
python app.py
```

Open `http://localhost:5000`.

## API

- `GET /api/health`
- `GET /api/questions/random`
- `GET /api/questions/<id>`
- `POST /api/answers/check`

## Render Deployment

This repository includes `render.yaml`. Render will create both the Flask web service and PostgreSQL database, then pass `DATABASE_URL` to the app.
