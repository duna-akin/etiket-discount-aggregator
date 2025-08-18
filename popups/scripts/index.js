async function loadCoupons() {
    try {
        const response = await fetch('../../data/coupons.json');
        const coupons = await response.json();
        displayCoupons(coupons);
    } catch (error) {
        console.error('Error loading coupons:', error);
        document.getElementById('coupons-container').innerHTML = '<p>Kuponlar yüklenirken bir hata oluştu.</p>';
    }
}

function displayCoupons(coupons) {
    const container = document.getElementById('coupons-container');
    
    if (coupons.length === 0) {
        container.innerHTML = '<p>Henüz kupon bulunmuyor.</p>';
        return;
    }

    let html = '';
    
    coupons.forEach(coupon => {
        html += `
            <div class="coupon-item">
                <h3>${coupon.company}</h3>
                <p><strong>Kod:</strong> ${coupon.code}</p>
                <p><strong>Başlık:</strong> ${coupon.title}</p>
                <p><strong>Açıklama:</strong> ${coupon.description}</p>
                <p><strong>Son Kullanma:</strong> ${coupon.expiry}</p>
                <p><strong>Minimum Sipariş:</strong> ${coupon.minOrder}</p>
                <p><strong>Kaynak:</strong> <a href="${coupon.source}" target="_blank">Link</a></p>
                <hr>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Load coupons when the page loads
document.addEventListener('DOMContentLoaded', loadCoupons);