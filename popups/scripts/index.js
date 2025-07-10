// import coupon database
import { couponDatabase } from '../../data/coupon-database.js';

document.getElementById('searchCouponsButton').addEventListener('click', async function() {
    // get current tab URL
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = new URL(tab.url);
    const domain = url.hostname.replace('www.', '');
    
    // check if domain exists in our database
    if (couponDatabase[domain]) {
        displayCoupons(couponDatabase[domain]);
    } else {
        displayNoCoupons();
    }
});

function displayCoupons(coupons) {
    const body = document.body;
    body.innerHTML = `
        <div id="couponList">
            ${coupons.map(coupon => `
                <div class="coupon">
                    <strong>${coupon.code}</strong> - ${coupon.title}
                    <p>${coupon.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function displayNoCoupons() {
    const body = document.body;
    body.innerHTML = `
        <p>Kupon bulunamadı çünkü burası alışveriş sitesi değil yarak kafası</p>
    `;
}