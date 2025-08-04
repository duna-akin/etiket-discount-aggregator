from playwright.sync_api import sync_playwright, Playwright

def run(playwright: Playwright):
    start_url = "https://iadeal.com/kampanyalar-indirim-kuponlari"
    chrome = playwright.chromium
    browser = chrome.launch(headless=False)
    page = browser.new_page()
    page.goto(start_url)

with sync_playwright() as playwright:
    run(playwright)