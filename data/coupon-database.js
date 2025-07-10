// will start initially with trendyol, fake data
// minOrder represents the minimum cart total (in ₺) required to apply the coupon

const couponDatabase = {
    "trendyol.com": [
        {
            code: "TREND20",
            description: "Yeni kullanıcılara özel %20 indirim",
            expiry: "2025-12-31",
            minOrder: 100
        }
    ]
}