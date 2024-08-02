from app import app
from database import SQL

from flask import jsonify, request
from flask_cors import CORS

import time


CORS(app) 

@app.route('/api/data/populer-room', methods=['GET'])
def get_data_populer_room():
    databaseName = SQL.databaseSql()
    result = databaseName.get_data_populer_room()
    
    return result

@app.route('/api/data/family-room', methods=['GET'])
def get_data_family_room():
    
    data = jsonify({
        '':''
    })
    return data

@app.route('/api/post/populer-room', methods=['POST'])
def post_data():
    data = request.json
    roomName = data['data']['name']
    response = {
        'message': f'berhasil booking ruangan {roomName}',
        'status': 200
    }
    
    time.sleep(1)
    
    return jsonify(response)