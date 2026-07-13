"""Temporary CI diagnostic for SOA PDF text extraction."""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from soa_official import (
    SOLUTION_HEADING_PATTERN,
    download_official_pdf,
    extract_pdf_text,
    parse_options,
    parse_answer_key,
    resolve_official_pdf_urls,
    split_numbered_blocks,
)


def main():
    questions_url, solutions_url = resolve_official_pdf_urls()
    cache_dir = ROOT / ".soa-cache"
    cache_dir.mkdir(exist_ok=True)
    questions_pdf = download_official_pdf(
        questions_url, cache_dir / "diagnostic-questions.pdf"
    )
    solutions_pdf = download_official_pdf(
        solutions_url, cache_dir / "diagnostic-solutions.pdf"
    )
    questions_text = extract_pdf_text(questions_pdf)
    solutions_text = extract_pdf_text(solutions_pdf)
    answer_key = parse_answer_key(solutions_text)

    print(f"answer_key_count={len(answer_key)}")
    print(
        f"exact_heading_count="
        f"{len(list(SOLUTION_HEADING_PATTERN.finditer(solutions_text)))}"
    )
    numbered_blocks = list(split_numbered_blocks(questions_text, answer_key))
    usable_ids = {
        question_id
        for question_id, block in numbered_blocks
        if len(parse_options(block)) == 5
    }
    missing_ids = sorted(set(answer_key) - usable_ids)
    print(f"anchored_question_starts={len(numbered_blocks)}")
    print(f"usable_question_ids={len(usable_ids)}")
    print(f"missing_question_ids={missing_ids[:80]}")
    print("missing question heading snippets:")
    for question_id in missing_ids[:20]:
        match = re.search(
            rf"(?<!\d){question_id}\s*[.,]\s+",
            questions_text,
        )
        if not match:
            print(f"{question_id}: (number marker not found)")
            continue
        start = max(0, match.start() - 100)
        end = min(len(questions_text), match.end() + 100)
        print(f"{question_id}: {questions_text[start:end]!r}")

    print("unmatched Solution snippets:")

    shown = 0
    for match in re.finditer(r"Solution", solutions_text, re.I):
        start = max(0, match.start() - 80)
        end = min(len(solutions_text), match.end() + 80)
        snippet = solutions_text[start:end]
        if SOLUTION_HEADING_PATTERN.search(snippet):
            continue
        print(repr(snippet))
        shown += 1
        if shown >= 30:
            break

    if shown == 0:
        print("(none)")


if __name__ == "__main__":
    main()
