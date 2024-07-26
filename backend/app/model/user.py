from app import db
from datetime import datetime

class Hotel(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    
    def __repr__(self):
        return '<User {}>'.format(self.name)
    