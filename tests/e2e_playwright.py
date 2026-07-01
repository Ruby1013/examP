import os

from playwright.sync_api import sync_playwright


BASE_URL = os.getenv("E2E_BASE_URL", "http://127.0.0.1:5000")


def test_user_can_load_question_with_playwright():
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        page = browser.new_page()
        page.goto(BASE_URL)
        page.get_by_role("button", name="抽一題").click()
        page.get_by_text("Question").wait_for(timeout=5000)

        assert page.locator("#options label").count() == 5
        browser.close()
