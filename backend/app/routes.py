from app import app
from database import SQL

from flask import jsonify, request, send_file
from flask_cors import CORS

import time

import base64
import io


CORS(app) 
databaseName = SQL.DatabaseSql()

@app.route('/api/data/populer-room', methods=['GET'])
def get_data_populer_room():
    result = databaseName.get_data_populer_room()
    
    return result

@app.route('/get_image/<int:image_id>', methods=['GET'])
def get_image_image_id(image_id):
    img_data = databaseName.get_image(image_id)
    if img_data:
        return send_file(io.BytesIO(img_data), mimetype='image/jpeg')
    else:
        return jsonify({'message': 'Gambar tidak ditemukan', 'status': 404})

@app.route('/api/post/populer-room', methods=['POST'])
def post_data_populer_room():
    data = request.json
    roomName = data['data']['name']
    response = {
        'message': f'berhasil booking ruangan {roomName}',
        'status': 200
    }
    
    time.sleep(1)
    
    return jsonify(response)