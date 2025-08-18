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

    // Add the coupon-list class to the container
    container.className = 'coupon-list';
    
    let html = '';
    
    coupons.forEach(coupon => {
        html += `
            <div class="coupon-card">
                <div class="coupon-code">${coupon.code}</div>
                <div class="coupon-title">${coupon.company}</div>
                <div class="coupon-description">${coupon.description}</div>
                <div class="coupon-details">
                    <span>Min: ${coupon.minOrder}₺</span>
                    <span>Son: ${coupon.expiry}</span>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Load coupons when the page loads
document.addEventListener('DOMContentLoaded', loadCoupons);