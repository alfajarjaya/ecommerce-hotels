from app import db

class Dosen(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nidn = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    
    def __repr__(self):
        return '<Dosen {}>'.format(self.name)