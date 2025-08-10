import sqlite3
import os
from datetime import datetime

class CouponDatabase:
    def __init__(self):
        # go up one directory to etiket root, then into data folder
        self.db_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'coupons.db')
        self.conn = None