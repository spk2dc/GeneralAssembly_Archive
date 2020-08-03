from flask import Flask, jsonify, g
from flask_cors import CORS

import models
from resources.dogs import dog

DEBUG = True
PORT = 8000

app = Flask(__name__)

# logic for the DB
@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response

CORS(dog, origins=['http://localhost:3000'], supports_credentials=True)

app.register_blueprint(dog, url_prefix='/api/v1/dogs')


# routes that we have create
@app.route('/')
def index():
  my_list = ["Hey", "check", "this", "out"]
  return my_list

@app.route('/json')
def dog():
  return jsonify(name="franki", age=8)

@app.route('/sayhi/<username>')
def hello(username):
  return "Hello, {}".format(username)

if __name__ == '__main__':
  models.initialize()
  app.run(debug=DEBUG, port=PORT)


