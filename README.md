# Etiket Browser Extension

A simple browser extension that finds and displays coupon codes for supported Turkish e-commerce websites.

## Current Status: MVP (Minimum Viable Product)

**Working Features:**

- Popup extension that opens when clicked
- Detects if current website is supported (currently Trendyol.com and Hepsiburada.com)
- Shows coupon list for supported sites
- Shows "not supported" page for unsupported sites
- Basic navigation between pages
- Background script that automatically detects supported sites and opens popup
- Real-time URL monitoring for coupon detection

## Current File Structure

```
kebapp/
├── manifest.json                    # Extension configuration
├── data/
│   └── coupon-database.js          # Coupon data (Trendyol + Hepsiburada structure)
├── popups/
│   ├── pages/
│   │   ├── index.html              # Main landing page
│   │   ├── coupons.html            # Shows coupon list
│   │   └── no-support.html         # "Site not supported" page
│   ├── scripts/
│   │   ├── index.js                # Main page logic
│   │   ├── coupons.js              # Coupon display logic
│   │   └── no-support.js           # (empty - future use)
│   ├── styles/
│   │   └── global.css              # All styling (orange theme)
│   └── utils/
│       ├── router.js               # (empty - future routing)
│       └── helpers.js              # (empty - future utilities)
└── background/
    ├── background.js               # Active background script for URL monitoring
    └── coupon-checker.js           # (empty - future background scripts)
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
2. When user visits a supported site, popup automatically opens
3. Real-time detection without user interaction required

## Current Data

- **Supported Sites:**
  - Trendyol.com (3 active coupons)
  - Hepsiburada.com (structure ready, no coupons yet)
- **Sample Coupons:** TREND20 (20% off), ETIKET50 (50 TL off), FREESHIP (free shipping)
- **Coupon Details:** Include expiry dates, minimum order amounts, and discount types

## Technical Features

- **Theme:** Orange color scheme (#ff6b35)
- **Permissions:** activeTab, notifications, tabs
- **Architecture:** ES6 modules with import/export
- **Font:** Google Fonts (Fredoka)
- **Background Script:** Service Worker with real-time URL monitoring

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript (ES6 modules)
- **Extension:** Chrome Extension Manifest V3
- **Background:** Service Worker for real-time monitoring
- **Font:** Google Fonts (Fredoka)
- **Styling:** Custom CSS with Flexbox and orange theme
- **Data:** Static JavaScript object (future: API integration)
