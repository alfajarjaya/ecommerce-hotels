import os 

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    HOST = str(os.environ.get("DB_HOST"))
    DATABASE = str(os.environ.get("DB_DATA"))
    USERNAME = str(os.environ.get("DB_USER"))
    PASSWORD = str(os.environ.get("DB_PASSWORD"))
    
    SQLALCHEMY_DATABASE_URI = f'mysql+pymysql://{USERNAME}:{PASSWORD}@{HOST}/{DATABASE}'
    SQLALCHEMY_TRACK_MODIFICATION = False
    SQLALCHEMY_RECORD_QUERY = True