from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    try:
        connection = mysql.connector.connect(
            host="db",
            user="root",
            password="password", 
            database="mydb"
        )

        cursor = connection.cursor()
        cursor.execute("SELECT 'Hello, world from MySQL!'")
        result = cursor.fetchone()
        return jsonify({"message": result[0]})
    
    except Exception as e:
        return jsonify({"error": str(e)})
    


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)