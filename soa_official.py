import json
import os
import re
import tempfile
from datetime import datetime, timezone
from hashlib import sha256
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen


STUDY_PAGE_URL = "https://www.soa.org/education/exam-req/edu-exam-p-detail/study/"
DEFAULT_QUESTIONS_PDF_URL = (
    "https://www.soa.org/globalassets/assets/files/edu/edu-exam-p-sample-quest.pdf"
)
DEFAULT_SOLUTIONS_PDF_URL = (
    "https://www.soa.org/globalassets/assets/files/edu/edu-exam-p-sample-sol.pdf"
)
USER_AGENT = "examP official SOA question sync/1.0"
DEFAULT_MAX_DOWNLOAD_BYTES = 50 * 1024 * 1024
ALLOWED_SOA_HOSTS = {"soa.org", "www.soa.org"}


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
        answer_letter = str(item.get("answerLetter", "")).strip().upper()
        if (
            not isinstance(item.get("id"), int)
            or not str(item.get("question", "")).strip()
            or len(item.get("options", [])) != 5
            or len(answer_letter) != 1
            or answer_letter not in "ABCDE"
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


def build_sync_report(
    questions,
    questions_pdf,
    solutions_pdf,
    questions_url,
    solutions_url,
):
    report = validate_questions(questions)
    report.update(
        {
            "source": "Society of Actuaries official Exam P PDFs",
            "sourcePageUrl": STUDY_PAGE_URL,
            "questionsUrl": questions_url,
            "solutionsUrl": solutions_url,
            "syncedAt": datetime.now(timezone.utc).isoformat(),
            "questionsPdfSha256": sha256(Path(questions_pdf).read_bytes()).hexdigest(),
            "solutionsPdfSha256": sha256(Path(solutions_pdf).read_bytes()).hexdigest(),
        }
    )
    return report


def resolve_official_pdf_urls():
    questions_url = os.getenv("SOA_QUESTIONS_PDF_URL", DEFAULT_QUESTIONS_PDF_URL)
    solutions_url = os.getenv("SOA_SOLUTIONS_PDF_URL", DEFAULT_SOLUTIONS_PDF_URL)

    assert_official_soa_url(questions_url)
    assert_official_soa_url(solutions_url)
    return questions_url, solutions_url


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
        final_url = response.geturl()
        assert_official_soa_url(final_url)

        limit = int(
            os.getenv("SOA_MAX_DOWNLOAD_BYTES", str(DEFAULT_MAX_DOWNLOAD_BYTES))
        )
        if limit <= 0:
            raise OfficialQuestionSourceError(
                "SOA_MAX_DOWNLOAD_BYTES must be a positive integer."
            )
        content_length = response.headers.get("Content-Length")
        if content_length:
            try:
                declared_size = int(content_length)
            except (TypeError, ValueError):
                declared_size = None
            if declared_size is not None and declared_size > limit:
                raise OfficialQuestionSourceError(
                    f"Official SOA response is larger than {limit} bytes: {final_url}"
                )

        data = response.read(limit + 1)
        if len(data) > limit:
            raise OfficialQuestionSourceError(
                f"Official SOA response exceeded {limit} bytes: {final_url}"
            )
        return data


def assert_official_soa_url(url):
    parsed = urlparse(url)
    host = (parsed.hostname or "").lower()
    if (
        parsed.scheme != "https"
        or host not in ALLOWED_SOA_HOSTS
        or parsed.username is not None
        or parsed.password is not None
    ):
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
        answer_letter = str(answer_key.get(question_id, "")).strip().upper()
        # PDF text extraction can expose numbered material that looks like a
        # question but has no matching official solution. It is not a usable
        # exam item and must not enter the generated snapshot.
        if len(answer_letter) != 1 or answer_letter not in "ABCDE":
            continue
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
    letter = str(answer_letter or "").strip().upper()
    if len(letter) == 1 and letter in "ABCDE":
        return options[ord(letter) - ord("A")]
    return ""


def clean_text(value):
    value = re.sub(r"[ \t]+", " ", value)
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()
