"""Build the deployable question snapshot directly from official SOA PDFs."""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from soa_official import (
    build_sync_report,
    download_official_pdf,
    extract_pdf_text,
    parse_questions,
    resolve_official_pdf_urls,
    validate_questions,
)


def main():
    questions_url, solutions_url = resolve_official_pdf_urls()
    cache_dir = ROOT / ".soa-cache"
    cache_dir.mkdir(exist_ok=True)

    print(f"Downloading official SOA questions: {questions_url}")
    questions_pdf = download_official_pdf(questions_url, cache_dir / "questions.pdf")
    print(f"Downloading official SOA solutions: {solutions_url}")
    solutions_pdf = download_official_pdf(solutions_url, cache_dir / "solutions.pdf")
    questions = parse_questions(
        extract_pdf_text(questions_pdf),
        extract_pdf_text(solutions_pdf),
    )
    summary = validate_questions(questions)

    snapshot = "// Generated from official Society of Actuaries Exam P PDFs.\n"
    snapshot += "const questions = "
    snapshot += json.dumps(questions, ensure_ascii=False, indent=4)
    snapshot += ";\n"
    (ROOT / "questionBank.js").write_text(snapshot, encoding="utf-8")

    report = build_sync_report(
        questions,
        questions_pdf,
        solutions_pdf,
        questions_url,
        solutions_url,
    )
    (ROOT / "soa-parse-report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(
        "Synced {questionCount} official SOA questions (IDs {firstId}-{lastId}).".format(
            **summary
        )
    )


if __name__ == "__main__":
    main()
