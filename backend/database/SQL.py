import mysql.connector as connector
import dotenv
import os
from flask import jsonify


dotenv.load_dotenv()

class DatabaseSql(): 
    def connection(self):
        try:
            return connector.connect(
                host=os.getenv('DB_HOST'),
                user=os.getenv('DB_USER'), 
                password=os.getenv('DB_PASSWORD'),
                database=os.getenv('DB_DATA'),
            )
        except connector.Error as e:
            print("Error connecting to database:", e)
            return None
    
    def post_data(self, title, name, price, dsc, image=None):
        konektor = self.connection()
        if konektor is not None:
            try:
                cursor = konektor.cursor()
                query = "INSERT INTO populer_room (title, nama, price, dsc, image) VALUES (%s, %s, %s, %s, %s)"
                if image:
                    image_data = image.read()
                else:
                    image_data = None
                cursor.execute(query, (title, name, price, dsc, image_data))
                konektor.commit()
                print("Data inserted successfully")
            except connector.Error as e:
                print("Error inserting data:", e)
            finally:
                cursor.close()
                konektor.close()
        else:
            print("Connection failed. Data not inserted.")
    
    def get_data_populer_room(self):
        konektor = self.connection()
        if konektor is not None:
            try:
                cursor = konektor.cursor()
                query = "SELECT id, title, nama, price, dsc FROM populer_room"
                cursor.execute(query)
                result = cursor.fetchall()
                data = {
                    'populer_room': [
                        {
                            'id': row[0],
                            'title': row[1],
                            'name': row[2],
                            'price': row[3],
                            'desc': row[4],
                            'img': f"http://127.0.0.1:5000/get_image/{row[0]}"
                        }
                        for row in result
                    ],
                    'message': 'success',
                    'status': 200
                }
                return jsonify(data)
            except connector.Error as e:
                return jsonify({
                    'data': [],
                    'message': str(e),
                    'status': 500
                })
            finally:
                cursor.close()
                konektor.close()
        else:
            return jsonify({
                'data': [],
                'message': 'Failed to connect to the database.',
                'status': 500
            })

    def get_image(self, image_id):
        konektor = self.connection()
        if konektor is not None:
            try:
                cursor = konektor.cursor()
                query = "SELECT img FROM populer_room WHERE id = %s"
                cursor.execute(query, (image_id,))
                row = cursor.fetchone()
                if row and row[0]:
                    return row[0]
                else:
                    return None
            except connector.Error as e:
                print("Error retrieving image:", e)
                return None
            finally:
                cursor.close()
                konektor.close()
        else:
            print("Connection failed. Cannot retrieve image.")
            return None