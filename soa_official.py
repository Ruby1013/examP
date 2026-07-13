import json
import os
import re
import tempfile
from datetime import datetime, timezone
from hashlib import sha256
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen


STUDY_PAGE_URL = "https://www.soa.org/education/exam-req/edu-exam-p-detail/study/"
DEFAULT_QUESTIONS_PDF_URL = (
    "https://www.soa.org/globalassets/assets/files/edu/edu-exam-p-sample-quest.pdf"
)
DEFAULT_SOLUTIONS_PDF_URL = (
    "https://www.soa.org/globalassets/assets/files/edu/edu-exam-p-sample-sol.pdf"
)
USER_AGENT = "examP official SOA question sync/1.0"


class OfficialQuestionSourceError(RuntimeError):
    pass


def load_official_questions():
    """Download SOA's official Exam P PDFs and parse them into app question records."""
    questions_pdf_url, solutions_pdf_url = resolve_official_pdf_urls()
    cache_dir = Path(
        os.getenv("SOA_CACHE_DIR", Path(tempfile.gettempdir()) / "examP_soa_cache")
    )
    cache_dir.mkdir(parents=True, exist_ok=True)

    questions_pdf = download_official_pdf(questions_pdf_url, cache_dir / "questions.pdf")
    solutions_pdf = download_official_pdf(solutions_pdf_url, cache_dir / "solutions.pdf")

    questions_text = extract_pdf_text(questions_pdf)
    solutions_text = extract_pdf_text(solutions_pdf)
    questions = parse_questions(questions_text, solutions_text)
    validate_questions(questions)

    (cache_dir / "questions.json").write_text(
        json.dumps(questions, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    return questions


def validate_questions(questions):
    """Reject partial or malformed PDF parses before they replace the live database."""
    minimum = int(os.getenv("SOA_MIN_QUESTION_COUNT", "650"))
    if len(questions) < minimum:
        raise OfficialQuestionSourceError(
            f"Only parsed {len(questions)} official questions; expected at least {minimum}."
        )

    ids = [item.get("id") for item in questions]
    if len(ids) != len(set(ids)):
        raise OfficialQuestionSourceError("Official question parse contains duplicate IDs.")

    invalid = []
    for item in questions:
        if (
            not isinstance(item.get("id"), int)
            or not str(item.get("question", "")).strip()
            or len(item.get("options", [])) != 5
            or str(item.get("answerLetter", "")) not in "ABCDE"
            or not str(item.get("answer", "")).strip()
        ):
            invalid.append(item.get("id"))

    if invalid:
        preview = ", ".join(str(item_id) for item_id in invalid[:10])
        raise OfficialQuestionSourceError(
            f"Official question parse has invalid records: {preview}."
        )

    return {
        "questionCount": len(questions),
        "firstId": min(ids),
        "lastId": max(ids),
        "missingIds": sorted(set(range(min(ids), max(ids) + 1)) - set(ids)),
    }


def build_sync_report(questions, questions_pdf, solutions_pdf):
    report = validate_questions(questions)
    report.update(
        {
            "source": "Society of Actuaries official Exam P PDFs",
            "questionsUrl": resolve_official_pdf_urls()[0],
            "solutionsUrl": resolve_official_pdf_urls()[1],
            "syncedAt": datetime.now(timezone.utc).isoformat(),
            "questionsPdfSha256": sha256(Path(questions_pdf).read_bytes()).hexdigest(),
            "solutionsPdfSha256": sha256(Path(solutions_pdf).read_bytes()).hexdigest(),
        }
    )
    return report


def resolve_official_pdf_urls():
    questions_url = os.getenv("SOA_QUESTIONS_PDF_URL", DEFAULT_QUESTIONS_PDF_URL)
    solutions_url = os.getenv("SOA_SOLUTIONS_PDF_URL", DEFAULT_SOLUTIONS_PDF_URL)

    if os.getenv("SOA_DISCOVER_PDF_URLS") == "1":
        discovered = discover_pdf_urls(STUDY_PAGE_URL)
        questions_url = pick_pdf_url(discovered, ("sample", "quest")) or questions_url
        solutions_url = pick_pdf_url(discovered, ("sample", "sol")) or solutions_url

    assert_official_soa_url(questions_url)
    assert_official_soa_url(solutions_url)
    return questions_url, solutions_url


def discover_pdf_urls(page_url):
    html = fetch_bytes(page_url).decode("utf-8", errors="ignore")
    hrefs = re.findall(r"""href=["']([^"']+\.pdf(?:\?[^"']*)?)["']""", html, re.I)
    return [urljoin(page_url, href) for href in hrefs]


def pick_pdf_url(urls, required_terms):
    for url in urls:
        lowered = url.lower()
        if all(term in lowered for term in required_terms):
            return url
    return None


def download_official_pdf(url, destination):
    try:
        data = fetch_bytes(url)
    except OfficialQuestionSourceError:
        raise
    except Exception as exc:
        raise OfficialQuestionSourceError(f"Could not download official SOA PDF: {url}") from exc
    if not data.startswith(b"%PDF"):
        raise OfficialQuestionSourceError(f"Official SOA URL did not return a PDF: {url}")

    destination.write_bytes(data)
    return destination


def fetch_bytes(url):
    assert_official_soa_url(url)
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=int(os.getenv("SOA_FETCH_TIMEOUT", "30"))) as response:
        return response.read()


def assert_official_soa_url(url):
    host = urlparse(url).hostname or ""
    if host != "soa.org" and not host.endswith(".soa.org"):
        raise OfficialQuestionSourceError(f"Refusing to fetch non-SOA URL: {url}")


def extract_pdf_text(path):
    try:
        from pypdf import PdfReader
    except ImportError as exc:
        raise OfficialQuestionSourceError(
            "Install pypdf to parse the official SOA PDFs."
        ) from exc

    reader = PdfReader(str(path))
    return "\n".join(page.extract_text() or "" for page in reader.pages)


def parse_questions(questions_text, solutions_text):
    answer_key = parse_answer_key(solutions_text)
    solution_blocks = parse_solution_blocks(solutions_text)
    records = []

    for question_id, block in split_numbered_blocks(questions_text):
        options = parse_options(block)
        if len(options) != 5:
            continue

        question_text = strip_options(block).strip()
        answer_letter = answer_key.get(question_id, "")
        answer = option_value(options, answer_letter)
        explanation = solution_blocks.get(question_id, "")
        if answer_letter and not explanation:
            explanation = f"Official solution: {answer_letter}"

        records.append(
            {
                "id": question_id,
                "topic": "SOA Exam P Sample Question",
                "question": clean_text(question_text),
                "options": [clean_text(option) for option in options],
                "answerLetter": answer_letter,
                "answer": clean_text(answer),
                "explanation": clean_text(explanation),
            }
        )

    return records


def split_numbered_blocks(text):
    # SOA question 286 currently uses a comma after the number in the PDF.
    matches = list(re.finditer(r"(?m)^\s*(\d{1,3})[.,]\s+", text))
    for index, match in enumerate(matches):
        question_id = int(match.group(1))
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        yield question_id, text[start:end]


def parse_answer_key(text):
    answer_key = {}
    patterns = [
        r"(?m)^\s*(\d{1,3})[.,]\s*(?:Solution\s*:\s*)?([A-E])\b",
        r"(?m)^\s*(\d{1,3})\s+([A-E])\b",
        r"(?m)^\s*Question\s+(\d{1,3})\D+([A-E])\b",
    ]
    for pattern in patterns:
        for question_id, letter in re.findall(pattern, text, re.I):
            answer_key[int(question_id)] = letter.upper()
    return answer_key


def parse_solution_blocks(text):
    blocks = {}
    for question_id, block in split_numbered_blocks(text):
        answer_match = re.search(r"\b([A-E])\b", block)
        prefix = f"Official solution: {answer_match.group(1).upper()}\n\n" if answer_match else ""
        blocks[question_id] = prefix + block.strip()
    return blocks


def parse_options(block):
    option_pattern = re.compile(
        r"(?ms)(?:^|\n)\s*(?:\(?([A-E])\)|([A-E])\.)\s+(.+?)(?=(?:\n\s*(?:\(?[A-E]\)|[A-E]\.)\s+)|\Z)"
    )
    matches = option_pattern.findall(block)
    options_by_letter = {
        (letter_a or letter_b).upper(): value.strip()
        for letter_a, letter_b, value in matches
    }
    if all(letter in options_by_letter for letter in "ABCDE"):
        return [options_by_letter[letter] for letter in "ABCDE"]

    lines = [line.strip() for line in block.splitlines() if line.strip()]
    tail = lines[-5:]
    if len(tail) == 5 and not any(re.match(r"^\d{1,3}\.", line) for line in tail):
        return tail

    return []


def strip_options(block):
    option_start = re.search(r"(?m)^\s*(?:\(?A\)|A\.)\s+", block)
    if option_start:
        return block[: option_start.start()]
    return "\n".join(block.splitlines()[:-5])


def option_value(options, answer_letter):
    if answer_letter in "ABCDE":
        return options[ord(answer_letter) - ord("A")]
    return ""


def clean_text(value):
    value = re.sub(r"[ \t]+", " ", value)
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()
