import argparse
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    refresh_flags = parser.add_mutually_exclusive_group()
    refresh_flags.add_argument(
        "--refresh",
        action="store_true",
        help="Replace existing rows with questions fetched from the configured online source.",
    )
    refresh_flags.add_argument(
        "--refresh-official",
        action="store_true",
        help="Deprecated alias for --refresh.",
    )
    parser.add_argument(
        "--local",
        action="store_true",
        help="Seed from the bundled snapshot produced from SOA PDFs during this build.",
    )
    args = parser.parse_args()

    if args.local:
        os.environ["SOA_USE_LOCAL_QUESTIONBANK"] = "1"

    from app import seed_questions_if_empty

    seed_questions_if_empty(force_refresh=args.refresh or args.refresh_official)
    source = "bundled SOA snapshot" if args.local else "SOA official PDFs"
    print(f"Question database is ready from {source}.")
