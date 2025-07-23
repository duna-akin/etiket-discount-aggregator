console.log("Background script started!"); // test

// import database
import { couponDatabase } from "../data/coupon-database.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    console.log("Tab updated event fired"); // test
    console.log("tab.url:", tab.url); // test'

    // get url and domain from tab
    const url = new URL(tab.url)
    const domain = url.hostname.replace("www.", "");
    
    // check if domain is supported and show popup if so
    if (couponDatabase[domain]) {
        chrome.action.openPopup();
    }
});