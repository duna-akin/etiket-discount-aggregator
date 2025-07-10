// import coupon database
import { couponDatabase } from '../../data/coupon-database.js';

document.getElementById('searchCouponsButton').addEventListener('click', async function() {
    // get current tab URL
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = new URL(tab.url);
    const domain = url.hostname.replace('www.', '');
    
    // check if domain exists in our database
    if (couponDatabase[domain]) {
        // Navigate to coupons page
        window.location.href = `coupons.html?domain=${domain}`;
    } else {
        // Navigate to no-support page
        window.location.href = 'no-support.html';
    }
});