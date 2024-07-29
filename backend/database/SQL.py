import mysql.connector as connector
import dotenv
import os

dotenv.load_dotenv()

class databaseSql(): 
    def connection(self):
        try:
            return connector.connect(
                host=os.getenv('DB_HOST'),
                user=os.getenv('DB_USER'), 
                password=os.getenv('DB_PASSWORD'),
                database=os.getenv('DB_DATA'),
            )
        except Exception as e:
            print("Error connecting to database:", e)
            return None
    
    def post_data(self, title, name, price, dsc):
        konektor = self.connection()
        if konektor is not None:
            try:
                cursor = konektor.cursor()
                query = f"INSERT INTO populer_room (title, nama, price, dsc) VALUES (%s, %s, %s, %s)"
                cursor.execute(query, (title, name, price, dsc))
                konektor.commit()
                print("Data inserted successfully")
            except Exception as e:
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
                query = "SELECT * FROM populer_room" 
                cursor.execute(query)
                result = cursor.fetchall()
                data = {
                    'populer_room': [
                        {
                            'id': row[0],
                            'title': row[1],
                            'name': row[2],
                            'price': row[3],
                            'desc': row[4]
                        }
                        for row in result
                    ],
                    'message':'success',
                    'status_code': 200
                }
                
                return data
            except Exception as e:
                print("Error fetching data:", e)
                
                return {
                    'message': e.message,
                    'status_code': 500
                }
            finally:
                cursor.close()
                konektor.close()
        else:
            print("Connection failed. Data not fetched.")
            return {
                'data': [],
                'message':'Connection failed',
                'status_code': 500
            }