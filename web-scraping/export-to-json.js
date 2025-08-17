import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function exportCouponsToJSON() {
    return new Promise((resolve, reject) => {
        // Path to your database
        const dbPath = path.join(__dirname, '..', 'data', 'coupons.db');
        const jsonPath = path.join(__dirname, '..', 'data', 'coupons.json');
        
        // Connect to database
        const db = new sqlite3.Database(dbPath);
        
        // Get all coupons
        db.all("SELECT company_name, coupon_code, expiry_date, source_url FROM coupons ORDER BY entered_At DESC", [], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            
            // Convert to the format your extension expects
            const coupons = rows.map(row => ({
                company: row.company_name,
                code: row.coupon_code,
                title: `${row.coupon_code} Kodu`,
                description: `${row.company_name} için indirim kodu`,
                expiry: row.expiry_date || 'Belirsiz',
                minOrder: '0',
                source: row.source_url
            }));
            
            // Save to JSON file
            fs.writeFileSync(jsonPath, JSON.stringify(coupons, null, 2), 'utf8');
            
            console.log(`Exported ${coupons.length} coupons to ${jsonPath}`);
            db.close();
            resolve(coupons);
        });
    });
}

// Run the export
exportCouponsToJSON()
    .then(coupons => {
        console.log('Export completed successfully!');
        process.exit(0);
    })
    .catch(error => {
        console.error('Export failed:', error);
        process.exit(1);
    });