# Etiket Browser Extension

A simple browser extension that finds and displays coupon codes for supported Turkish e-commerce websites.

## Current Status: MVP (Minimum Viable Product)

**Working Features:**

- Popup extension that opens when clicked
- Detects if current website is supported (currently only Trendyol.com)
- Shows coupon list for supported sites
- Shows "not supported" page for unsupported sites
- Basic navigation between pages

## Current File Structure

```
etiket/
├── manifest.json                    # Extension configuration
├── data/
│   └── coupon-database.js          # Coupon data (currently Trendyol only)
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
│   │   └── global.css              # All styling
│   └── utils/
│       ├── router.js               # (empty - future routing)
│       └── helpers.js              # (empty - future utilities)
└── background/                     # (empty - future background scripts)
```

## How It Works

1. User clicks extension icon
2. Extension opens `index.html` with "Kupon Ara!" button
3. When clicked, checks current website URL against database
4. If supported → redirects to `coupons.html` with coupon list
5. If not supported → redirects to `no-support.html`

## Current Data

- **Supported Sites:** Trendyol.com only
- **Sample Coupons:** 3 fake coupons (TREND20, ETIKET50, FREESHIP)

## Next Steps

- [ ] Add more e-commerce sites
- [ ] Implement background coupon detection
- [ ] Add error handling and validation
- [ ] Improve CSS architecture
- [ ] Add proper routing system

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript
- **Extension:** Chrome Extension Manifest V3
- **Font:** Google Fonts (Fredoka)
- **Styling:** Custom CSS with Flexbox
