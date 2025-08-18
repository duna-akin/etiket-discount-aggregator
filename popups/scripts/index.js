async function getCurrentSite() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const url = new URL(tab.url);
        return url.hostname.toLowerCase();
    } catch (error) {
        console.error('Error getting current site:', error);
        return null;
    }
}

function getCompanyFromHostname(hostname) {
    // Remove common prefixes
    const cleanHostname = hostname.replace(/^(www\.|m\.|mobile\.)/, '');
    
    // Map hostnames to company names in coupon data
    const siteMapping = {
        'karaca.com': 'Karaca',
        'koton.com': 'Koton',
        'mavi.com': 'Mavi',
        'uspolo.com': 'US Polo',
        'uspoloassn.com': 'US Polo',
        'fashfed.com': 'FashFed',
        'avva.com.tr': 'Avva',
        'carrefoursa.com': 'CarrefourSA',
        'dsdamat.com': "D'S damat",
        'cacharel.com.tr': 'Cacharel',
        'homend.com': 'Homend',
        'flormar.com': 'Flormar',
        'dagi.com.tr': 'Dagi',
        'occasion.com.tr': 'Occasion',
        'ayakkabidunyasi.com.tr': 'Ayakkabı Dünyası',
        'lee.com.tr': 'Lee',
        'setur.com.tr': 'Setur',
        'flavus.com.tr': 'Flavus',
        'patpat.com': 'PatPat',
        'sosyopix.com': 'Sosyopix',
        'samsonite.com.tr': 'Samsonite',
        'kelebek.com': 'Kelebek',
        'ltbjeans.com': 'LTB Jeans',
        'etstur.com': 'Etstur',
        'geekbuying.com': 'Geekbuying',
        'stan.com.tr': 'stan',
        'linens.com.tr': 'Linens',
        'yalispor.com': 'Yalıspor',
        'fropie.com': 'Fropie',
        'hisar.com.tr': 'Hisar',
        'tac.com.tr': 'Taç',
        'flo.com.tr': 'FLO',
        'intersport.com.tr': 'Intersport',
        'hizlisaat.com': 'Hızlı Saat',
        'hotic.com.tr': 'Hotiç',
        'superstep.com.tr': 'House Of Superstep',
        'suvari.com.tr': 'Süvari',
        'wrangler.com.tr': 'Wrangler',
        'kinguin.net': 'Kinguin',
        'avansas.com': 'Avansas',
        'touristica.com.tr': 'Touristica',
        'dhgate.com': 'DHgate',
        'mizalle.com': 'Mizalle',
        'pierrecardin.com.tr': 'Pierre Cardin'
    };
    
    return siteMapping[cleanHostname] || null;
}

async function loadCoupons() {
    try {
        const response = await fetch('../../data/coupons.json');
        const allCoupons = await response.json();
        
        // Get current site
        const currentSite = await getCurrentSite();
        const companyName = getCompanyFromHostname(currentSite);
        
        // Filter coupons for current site
        let filteredCoupons = [];
        if (companyName) {
            filteredCoupons = allCoupons.filter(coupon => 
                coupon.company.toLowerCase() === companyName.toLowerCase()
            );
        }
        
        displayCoupons(filteredCoupons, companyName, currentSite);
    } catch (error) {
        console.error('Error loading coupons:', error);
        document.getElementById('coupons-container').innerHTML = '<p>Kuponlar yüklenirken bir hata oluştu.</p>';
    }
}

function displayCoupons(coupons, companyName, currentSite) {
    const container = document.getElementById('coupons-container');
    
    if (!companyName) {
        container.innerHTML = `
            <div class="no-coupons">
                <p>Bu site için henüz kupon bulunmuyor.</p>
                <p><small>Şu an ${currentSite} sitesine bakıyorsunuz.</small></p>
            </div>
        `;
        return;
    }
    
    if (coupons.length === 0) {
        container.innerHTML = `
            <div class="no-coupons">
                <p>${companyName} için henüz kupon bulunmuyor.</p>
            </div>
        `;
        return;
    }

    // Add the coupon-list class to the container
    container.className = 'coupon-list';
    
    let html = `<div class="site-info">
        <p><strong>${companyName}</strong> için ${coupons.length} kupon bulundu</p>
    </div>`;
    
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