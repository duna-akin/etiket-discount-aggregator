# Etiket - Coupon Extension

A Browser extension that finds discount codes for Turkish e-commerce websites. When you visit a supported site, it automatically shows you available coupon codes.

## What it does

- **Automatic detection**: Opens when you visit supported shopping sites
- **Shows coupons**: Displays current discount codes and deals
- **Web scraping**: Automatically collects new coupons from coupon websites
- **Easy to use**: Just click and copy the coupon codes

## How to install

1. Download or clone this project
2. Open Chrome and go to `chrome://extensions`
3. Turn on "Developer mode" (top right)
4. Click "Load unpacked" and select the `etiket` folder
5. Done! The extension is now active

## How to use

**Automatic way:**

- Just visit a supported shopping site
- The extension will automatically open and show available coupons

**Manual way:**

- Click the Etiket icon in your browser
- Click "Kupon Ara!" (Search Coupons)
- Copy any coupon code you want to use

## Web Scraping (Optional)

We have a Python script that automatically finds new coupons:

```bash
cd web-scraping
pip install playwright
playwright install
python iadeal.py
```

Made for Turkish e-commerce shoppers who want to save money
