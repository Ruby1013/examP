# examP

SOA Exam P 題庫練習系統，包含 Flask API、PostgreSQL 題庫、前端答題介面，以及完成 30 題後開放的 Snake Game 休息模式。

## 題庫來源

正式題庫直接取自 Society of Actuaries（SOA）官方文件，不使用第三方題庫網站或 GitHub Raw 作為來源：

- [Exam P Sample Questions](https://www.soa.org/globalassets/assets/files/edu/edu-exam-p-sample-quest.pdf)
- [Exam P Sample Solutions](https://www.soa.org/globalassets/assets/files/edu/edu-exam-p-sample-sol.pdf)

`scripts/sync_official_questions.py` 會下載兩份 PDF、解析題目與官方解答、執行完整性檢查，再產生部署用的 `questionBank.js` 和 `soa-parse-report.json`。如果解析題數不足或出現無答案、非五個選項、重複題號等問題，建置會直接失敗，避免殘缺題庫上線。

## 本機執行

```bash
pip install -r requirements.txt
python scripts/sync_official_questions.py
python scripts/seed_db.py --refresh --local
python app.py
```

開啟 `http://localhost:5000`。

如暫時無法連線 SOA，可直接使用 repo 內最後一次成功同步的官方快照：

```bash
python scripts/seed_db.py --refresh --local
```

## Render 部署

[`render.yaml`](render.yaml) 會依序執行：

1. 安裝 Python 套件。
2. 從 SOA 官方題目與解答 PDF 重新產生題庫快照。
3. 用該快照完整刷新 PostgreSQL，避免沿用舊題庫。
4. 啟動 Gunicorn。

可調整的環境變數：

- `SOA_QUESTIONS_PDF_URL`：官方題目 PDF；只接受 `soa.org` 網域。
- `SOA_SOLUTIONS_PDF_URL`：官方解答 PDF；只接受 `soa.org` 網域。
- `SOA_FETCH_TIMEOUT`：下載逾時秒數，預設 30。
- `SOA_MIN_QUESTION_COUNT`：最低合格題數，Render 預設 650。
- `SOA_ALLOW_LOCAL_FALLBACK`：SOA 下載失敗時是否允許使用最後快照；Render 設為 `0`，確保正式建置必須來自 SOA。

## API

- `GET /api/health`
- `GET /api/questions/random`
- `GET /api/questions/<id>`
- `POST /api/answers/check`

## 技術架構

- Frontend：HTML、CSS、JavaScript、Canvas
- Backend：Flask、Gunicorn
- Database：PostgreSQL on Render，SQLite 作本機備援
- PDF parsing：pypdf
- Tests：pytest、Playwright、Selenium
