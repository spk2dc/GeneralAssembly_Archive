from flask import Flask, jsonify, g
from flask_cors import CORS
from flask_login import LoginManager

import models
from resources.dogs import dog
from resources.user import user

DEBUG = True
PORT = 8000

login_manager = LoginManager()

app = Flask(__name__)

# Set some settings for our user authentication
app.secret_key = "LJAKLJLKJJLJKLSDJLKJASD"
login_manager.init_app(app)

@login_manager.user_loader
def load_user(userid):
  try:
    return models.User.get(models.User.id == userid)
  except models.DoesNotExist:
    return None

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

CORS(user, origins=['http://localhost:3000'], supports_credentials=True)
app.register_blueprint(user, url_prefix='/user')

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
