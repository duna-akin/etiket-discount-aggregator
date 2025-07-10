## Future Structure

kebapp/
├── manifest.json
├── background/
│ ├── background.js # Service worker for notifications
│ └── coupon-checker.js # Background coupon detection
├── content/
│ ├── content.js # Inject coupon notifications
│ └── content.css # Styling for injected elements
├── popups/
│ ├── pages/
│ │ ├── index.html # Main landing page
│ │ ├── coupons.html # Coupon listing page
│ │ ├── settings.html # User preferences
│ │ └── about.html # About page
│ ├── components/ # Reusable UI components
│ │ ├── coupon-card.js
│ │ ├── loading-spinner.js
│ │ └── error-message.js
│ ├── services/ # Business logic
│ │ ├── coupon-service.js
│ │ ├── storage-service.js
│ │ └── analytics-service.js
│ ├── utils/
│ │ ├── router.js # Client-side routing
│ │ └── helpers.js # Utility functions
│ └── styles/
│ ├── global.css # Global styles
│ └── components.css # Component-specific styles
├── data/
│ ├── coupon-database.js # Static coupon data
│ └── schema.js # Data validation schemas
└── assets/
├── icons/
└── images/
