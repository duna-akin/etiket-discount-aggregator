import sqlite3
import os
from datetime import datetime

class CouponDatabase:
    def __init__(self):
        # go up one directory to root, then into data folder
        self.db_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'coupons.db')
        self.connection = None

    def connect(self):
        """Connect to the database and create table if needed"""
        self.connection = sqlite3.connect(self.db_path)
        cursor = self.connection.cursor()

        cursor.execute('''
            CREATE TABLE IF NOT EXISTS coupons (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       company_name TEXT,
                       coupon_code TEXT,
                       expiry_date TEXT,
                       entered_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       source_url TEXT,
                       UNIQUE(company_name, coupon_code, expiry_date)
                    )
                ''')
        
        self.connection.commit()
        print(f"Database ready at: {self.db_path}")

    def save_coupon(self, company_name, coupon_code, expiry_date=None, source_url=None):
        """Save a single coupon to the database"""
        if not self.connection:
            raise Exception("Database unconnected. Call connect() first.")
        
        cursor = self.connection.cursor()
        try:
            cursor.execute('''
                INSERT INTO coupons (company_name, coupon_code, expiry_date, source_url)
                VALUES (?, ?, ?, ?)
            ''', (company_name, coupon_code, expiry_date, source_url))
            self.connection.commit()
            print(f"Saved {company_name} - {coupon_code} to database")
        except sqlite3.IntegrityError:
            print("Duplicate skipped")

if __name__ == "__main__":
    # Test database creation and saving
    db = CouponDatabase()
    db.connect()
    
    # Test saving a coupon (no 'self' parameter when calling)
    db.save_coupon("Karaca", "HS500", "8/31/2025", "https://iadeal.com")
    db.save_coupon("Karaca", "HS500", "8/31/2025", "https://iadeal.com")  # This will be skipped

    print("Test completed!")
    db.connection.close()