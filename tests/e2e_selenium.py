import os

from selenium import webdriver
from selenium.webdriver.common.by import By


BASE_URL = os.getenv("E2E_BASE_URL", "http://127.0.0.1:5000")


def test_homepage_title_with_selenium():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)

    try:
        driver.get(BASE_URL)
        heading = driver.find_element(By.TAG_NAME, "h1")

        assert "Exam P" in heading.text
    finally:
        driver.quit()
