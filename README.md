# Etiket Browser Extension

A browser extension that automatically finds and displays coupon codes for Turkish e-commerce websites with integrated web scraping capabilities.

## Current Status: Active Development

**Working Features:**

- Popup extension with automatic site detection
- Background script with real-time URL monitoring
- Automatic popup when visiting supported sites
- Coupon display with copy functionality
- Web scraping system for automatic coupon collection
- Support for Trendyol.com and Hepsiburada.com
- Dynamic coupon data updates via scraping

## Current File Structure

```
kebapp/
├── manifest.json                    # Extension configuration
├── data/
│   └── coupon-database.js          # Coupon data (Trendyol + Hepsiburada)
├── popups/
│   ├── pages/
│   │   ├── index.html              # Main landing page
│   │   ├── coupons.html            # Shows coupon list
│   │   └── no-support.html         # "Site not supported" page
│   ├── scripts/
│   │   ├── index.js                # Main page logic
│   │   ├── coupons.js              # Coupon display logic
│   │   └── no-support.js           # No-support page logic
│   ├── styles/
│   │   └── global.css              # All styling (orange theme)
│   └── utils/
│       ├── router.js               # Future routing utilities
│       └── helpers.js              # Future helper functions
├── background/
│   ├── background.js               # Active URL monitoring service worker
│   └── coupon-checker.js           # Future background scripts
└── web-scraping/                   # Web scraping system
    ├── package.json                # Node.js dependencies
    ├── iadeal.py                   # Python scraper for iAdeal coupons
    └── node_modules/               # Playwright dependencies
```

## Quick Setup

### Browser Extension:

1. Open Chrome → `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked" → Select `kebapp` folder
4. Extension ready! 🎉

### Web Scraping (Optional):

```bash
cd web-scraping
pip install playwright
playwright install
python iadeal.py
```

## How It Works

### Manual Usage:

1. User clicks extension icon
2. Extension opens `index.html` with "Kupon Ara!" button
3. When clicked, checks current website URL against database
4. If supported → redirects to `coupons.html` with coupon list
5. If not supported → redirects to `no-support.html`

### Automatic Detection:

1. Background script monitors all tab navigation
2. When user visits a supported site, extension badge appears
3. Real-time detection without user interaction required

## Current Data

- **Supported Sites:**
  - Trendyol.com (3 active coupons)
  - Hepsiburada.com (structure ready)
- **Sample Coupons:** TREND20 (20% off), ETIKET50 (50 TL off), FREESHIP (free shipping)

## Technical Features

- **Theme:** Orange color scheme (#ff6b35)
- **Permissions:** activeTab, notifications, tabs, scripting
- **Architecture:** ES6 modules with import/export
- **Font:** Google Fonts (Fredoka)
- **Background Script:** Service Worker with real-time URL monitoring
- **Web Scraping:** Python + Playwright for automated coupon collection
- **Data Processing:** Modal interaction and dynamic content extraction

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript (ES6 modules)
- **Extension:** Chrome Extension Manifest V3
- **Background:** Service Worker for real-time monitoring
- **Web Scraping:** Python + Playwright
- **Font:** Google Fonts (Fredoka)
- **Styling:** Custom CSS with Flexbox and orange theme
- **Data:** Static JavaScript object + Dynamic scraping
