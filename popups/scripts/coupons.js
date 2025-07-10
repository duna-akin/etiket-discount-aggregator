// Import coupon database
import { couponDatabase } from '../../data/coupon-database.js';

// Get domain from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const domain = urlParams.get('domain');

// Load coupons when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (domain && couponDatabase[domain]) {
        displayCoupons(couponDatabase[domain], domain);
    } else {
        showError();
    }
});

// Display coupons function
function displayCoupons(coupons, domain) {
    const container = document.getElementById('couponContainer');
    
    container.innerHTML = `
        <h2>Kuponlar - ${domain}</h2>
        <div class="coupon-list">
            ${coupons.map(coupon => `
                <div class="coupon-card">
                    <div class="coupon-code">${coupon.code}</div>
                    <div class="coupon-title">${coupon.title}</div>
                    <div class="coupon-description">${coupon.description}</div>
                    <div class="coupon-details">
                        <span>Min: ${coupon.minOrder} TL</span>
                        <span>Son: ${coupon.expiry}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// show error if no coupons found
function showError() {
    const container = document.getElementById('couponContainer');
    container.innerHTML = `
        <p>Bu site için kupon bulunmamakta.</p>
    `;
}

// back button functionality
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});