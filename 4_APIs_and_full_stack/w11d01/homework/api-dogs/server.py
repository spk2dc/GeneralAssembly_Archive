from flask import Flask, render_template, jsonify, g
from flask_cors import CORS

import models
from resources.dogs import dog 


DEBUG = True
PORT = 8000

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

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

# The default URL ends in / ("my-website.com/").
@app.route('/')
def index():
    return 'hi'

@app.route('/json')
def dog():
    return jsonify(name="Frankie", age=8)

@app.route('/sayhi/<username>') # When someone goes here...
def hello(username): # Do this.
    return "Hello {}".format(username)

# Run the app when the program starts!
if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)