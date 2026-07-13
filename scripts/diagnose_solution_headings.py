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
    parse_answer_key,
    resolve_official_pdf_urls,
)


def main():
    _, solutions_url = resolve_official_pdf_urls()
    destination = ROOT / ".soa-cache" / "diagnostic-solutions.pdf"
    destination.parent.mkdir(exist_ok=True)
    download_official_pdf(solutions_url, destination)
    text = extract_pdf_text(destination)
    answer_key = parse_answer_key(text)

    print(f"answer_key_count={len(answer_key)}")
    print(f"exact_heading_count={len(list(SOLUTION_HEADING_PATTERN.finditer(text)))}")
    print("unmatched Solution snippets:")

    shown = 0
    for match in re.finditer(r"Solution", text, re.I):
        start = max(0, match.start() - 80)
        end = min(len(text), match.end() + 80)
        snippet = text[start:end]
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

