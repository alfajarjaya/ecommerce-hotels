from app import db
from datetime import datetime

class populer_room(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.String(255), nullable=False)
    dsc = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return '<populer_room {}>'.format(self.name)