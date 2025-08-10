from playwright.sync_api import sync_playwright, Playwright # type: ignore

def run(playwright: Playwright):
    start_url = "https://iadeal.com/kampanyalar-indirim-kuponlari"
    chrome = playwright.chromium
    browser = chrome.launch(headless=False)
    page = browser.new_page()
    page.goto(start_url)

    # wait 5 seconds for page to load
    page.wait_for_timeout(5000)
    print("Page loaded, looking for button...")

    # find all coupon buttons
    coupon_buttons = page.query_selector_all('button.coupon-btn.code-btn.green-btn-fill')
    print(f"Found {len(coupon_buttons)} coupon buttons on this page")

    # enumarate through each coupon button
    for i, coupon_button in enumerate(coupon_buttons):
        print(f"\nProcessing coupon {i+1}/{len(coupon_buttons)}...")

        # scroll to button if needed
        coupon_button.scroll_into_view_if_needed()

        # click button
        print("Found button, clicking...")
        coupon_button.click()
        
        # wait 3 seconds 
        page.wait_for_timeout(3000) 
        print("Button clicked! Check what popup appeared...")

        # wait for the hidden input
        page.wait_for_selector('#code-id', state='attached', timeout=5000)  
        print("Modal appeared!")

        # find company element and extract name
        company_input = page.query_selector('#brand-name')
        if company_input:
            company_name = company_input.inner_text()
            print(f"Company: {company_name}")
        else:
            print("Company name not found")

        # get coupon code
        coupon_input = page.query_selector('#code-id')
        if coupon_input:
            coupon_code = coupon_input.get_attribute('value')
            print(f"Found coupon code: {coupon_code}")
        else:
            print("Hidden input not found in modal!")

        close_button = page.query_selector('button.close.modal-btn.pull-right[data-dismiss="modal"]')
        if close_button:
            close_button.click()
            print("Modal closed using button")
        else:
            page.keyboard.press('Escape')
            print("Modal closed with Escape")
        
        # wait 2 seconds for modal to close
        page.wait_for_timeout(2000)

    print(f"\nFinished processing all buttons on this page!")

    # keep browser open
    input("Press Enter to close...")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)