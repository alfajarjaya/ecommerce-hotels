from app import app

app = app

if __name__ == '__main__':
    app.run(
        debug=True,
        host='0.0.0.0',
        port=5000,
        # ssl_context=('cert.pem', 'key.pem')  # Replace with your SSL certificate and key files path.
    )