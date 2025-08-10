import sqlite3
import os
from datetime import datetime

class CouponDatabase:
    def __init__(self):
        # go up one directory to etiket root, then into data folder
        self.db_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'coupons.db')
        self.connection = None

    def connect(self):
        self.connection = sqlite3.connect(self.db_path)
        cursor = self.connection.cursor()

        cursor.execute('''
            CREATE TABLE IF NOT EXISTS coupons (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       company_name TEXT,
                       coupon_code TEXT
                       expiry_date TEXT,
                       entered_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       source_url TEXT
                    )
                ''')
        
        self.connection.commit()
        print(f"Database ready at: {self.db_path}")

if __name__ == "__main__":
    db = CouponDatabase()
    db.connect()
    db.connection.close()