from flask import Flask, json, g, request
from flask_cors import CORS
from schema import User, Positions

app = Flask(__name__)
CORS(app)

@app.route("/users")
def users():
    a = {"id": "6666"}
    return json_response(a)


    
def json_response(payload, status=200):
    return (json.dumps(payload), status, {'content-type': 'application/json'})


if __name__ == '__main__':
    app.run(debug=True)