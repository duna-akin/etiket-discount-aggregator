// will start initially with trendyol, fake data
// minOrder represents the minimum cart total (in ₺) required to apply the coupon

export const couponDatabase = {
    "trendyol.com": [
        {
            id: 1,
            code: "TREND20",
            title: "%20 İndirim",
            description: "Yeni kullanıcılara özel %20 indirim",
            expiry: "2025-12-31",
            minOrder: 100,
            discountType: "percentage",
            discountAmount: "20"
        },
        {
            id: 2,
            code: "ETIKET50",
            title: "50 TL İndirim",
            description: "150 TL ve üzeri alışverişlerde geçerli",
            expiry: "2025-12-01",
            minOrder: 150,
            discountType: "num",
            discountAmount: "20"
        },
        {
            id: 3,
            code: "FREESHIP",
            title: "Ücretsiz Kargo",
            description: "Tüm siparişlerde geçerli",
            expiry: "2025-8-21",
            minOrder: 0,
            discountType: "free-shipping",
            discountAmount: null
        }
    ],

    "hepsiburada.com": []
}