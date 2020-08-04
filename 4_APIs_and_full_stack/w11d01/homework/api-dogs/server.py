from flask import Flask, g
from flask_cors import CORS
from flask_login import LoginManager ############# added this line

DEBUG = True
PORT = 8000

import models

#importing resource
from resources.dogs import dog
from resources.user import user ############ added this line

login_manager = LoginManager() # sets up the ability to set up the session

app = Flask(__name__)

###################### added these lines

app.secret_key = "LJAKLJLKJJLJKLSDJLKJASD" # Need this to encode the session
login_manager.init_app(app) # set up the sessions on the app

@login_manager.user_loader # decorator function, that will load the user object whenever we access the session, we can get the user
# by importing current_user from the flask_login
def load_user(userid):
    try:
        return models.User.get(models.User.id == userid)
    except models.DoesNotExist:
        return None
###################### added these lines



@app.before_request
def before_request():
    """Connect to the database before each request"""
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request"""
    g.db.close()
    return response


CORS(dog, origins=['http://localhost:3000'], supports_credentials=True)
app.register_blueprint(dog, url_prefix='/api/v1/dogs')

################## added these lines
CORS(user, origins=['http://localhost:3000'], supports_credentials=True)
app.register_blueprint(user, url_prefix='/user')
################## added these lines




if __name__ == '__main__':
    print('tables connected')
    models.initialize()
    app.run(debug=DEBUG, port=PORT)