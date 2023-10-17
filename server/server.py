from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/home/", methods=["GET"])
def return_home():
    return jsonify(
        {"message": "Welcome to the Playground!", "people": ["John", "Alfred", "Bobby"]}
    )


@app.route("/api/data/", methods=["GET"])
def get_data():
    books = [
        {"id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald"},
        {"id": 2, "title": "Moby Dick", "author": "Herman Melville"},
        {"id": 3, "title": "Pride and Prejudice", "author": "Jane Austen"},
    ]
    return jsonify({"books": books})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
