# flask-dog-app-register-login

### Objectives

1.  Create a user resource
2.  Create registration and login


### dependencies

```bash
pip3 install flask-bcrypt flask_login
pip3 freeze > requirements.txt
```

- Flask doesn't utilize a `package.json`. Instead, we just use a text file that lists all of our dependencies. Pip freeze saves the dependencies in our `virtualenv` to that file.

-  If you are downloading and running a Python project, you can usually install its dependencies with `pip3 install -r requirements.txt`.


### Update Models

- *models.py* file

```python
import datetime
from peewee import *
from flask_login import UserMixin

DATABASE = SqliteDatabase('dogs.sqlite')

class User(UserMixin, Model):
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()

    class Meta:
        database = DATABASE

class Dog(Model):
    name = CharField()
    owner = CharField()
    breed = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Dog], safe=True)
    print("TABLES Created")
    DATABASE.close()

```

-  We are using the *UserMixin* here from [flask-login](https://flask-login.readthedocs.io/en/latest/), to give our User class some default features.  Mixins are small classes that add some specific feature. Since they're not the final class that we want to extend, they go at the beginning of our inheritance chain. Check out the flask-login docs but this is what will allow us to set up our session.


- *class Meta* - When Python creates a class object, special construction instructions can be provided. This is done through the Meta class. Since the database isn't part of the class itself, this class constructor information is provided through the special Meta class.

- The initialize method will set up our datatables, while we open and close the connection

*Test it by running the python app, you shouldn't have any errors when you spin up your server!*

### Setup User Resource

```bash
mkdir resources
touch resources/user.py
```

```python
import models

from flask import request, jsonify, Blueprint
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_login import login_user, current_user
from playhouse.shortcuts import model_to_dict


# first argument is blueprints name
# second argument is it's import_name
# The third argument is the url_prefix so we don't have
# to prefix all our apis with /api/v1
user = Blueprint('users', 'user', url_prefix='/user')

@user.route('/register', methods=["POST"])
def register():
    # See request payload anagolous to req.body in express
    # This has all the data like username, email, password
    payload = request.get_json()

    payload['email'] = payload['email'].lower()
    try:
        # Find if the user already exists?
        models.User.get(models.User.email == payload['email']) # model query finding by email
        return jsonify(data={}, status={"code": 401, "message": "A user with that name already exists"})
    except models.DoesNotExist:
        payload['password'] = generate_password_hash(payload['password']) # bcrypt line for generating the hash
        user = models.User.create(**payload) # put the user in the database
                                             # **payload, is spreading like js (...) the properties of the payload object out

        # starts user session
        login_user(user)

        user_dict = model_to_dict(user)
        print(user_dict)
        print(type(user_dict))
        # delete the password before we return it, because we don't need the client to be aware of it
        del user_dict['password']

        return jsonify(data=user_dict, status={"code": 201, "message": "Success"})


```

*Whats a resource?* - The main building block provided by Flask-RESTful are resources, which gives us access our HTTP methods just by defining methods on your resource. A basic crud source looks like above.

*jsonify* - turning our python dictionaries into json.

-  *Blueprints* - The basic concept of blueprints is that they record operations to execute when registered on an application. Flask associates view functions with blueprints when dispatching requests and generating URLs from one endpoint to another.

- `user = Blueprint('users', 'user', url_prefix='/user')` says treat this as a blueprint in the application (module) that we can attach to our flask app the will define a set of view functions.


- `login_user` - comes from [flask login](https://flask-login.readthedocs.io/en/latest/) - this will intiate the session for us!

*Key things to note*

- ` payload = request.get_json()` - notice we are using `.get_json()` to retrieve the json from the route

- `user = models.User.get(models.User.email== payload['email'])` - our query to find a user by their email

- `user_dict = model_to_dict(user)` - Use `model_to_dict` in order to read the model.  (The model is its own class)

- `login_user(user)` - start the session and log in

- `payload['password'] = generate_password_hash(payload['password'])` - bcrypt line for generating the hash


### Now how do we hook up our blueprint? We have to register it in the app.py!

```app.py

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

```

- `app.secret_key` is for the hash for our session cookie we can make up whatever random characters we'd like. By default, Flask-Login uses sessions for authentication. This means you must set the secret key on your application,

-  We can use the `LoginManager()` to handle all the login things like is_authenticated, or get id. The login manager contains the code that lets your application and Flask-Login work together, such as how to load a user from an ID, and where to send users when they need to log in.

-  `@login_manager.user_loader` - We need to provide user_loader callback. This callback is used to reload the user object from the user ID stored in the session. It should take the unicode ID of a user, and return the corresponding user object.


- We also set up the login manager and setup cors to allow our react app to connect to our API's.  Notice we passed `supports_credentials=True` as well in order to give us the ability to send cookies back and forth.

*Test it out with Postman!*

here is a sample request object you will want to send over to `http://localhost:8000/user/register`

- body

```json
{
    "username": "Jim",
    "password": "1234",
    "email": "Jimmyhaff3@gmail.com"
}
```

- Make sure you have *raw* and *JSON application/json* selected in POSTMAN

#### Let's setup Login route

*resources/user.py*

```python
@user.route('/login', methods=["POST"])
def login():
    payload = request.get_json()
    print('payload:', payload)
    try:
        user = models.User.get(models.User.email == payload['email']) # Try to find the user by thier email
        user_dict = model_to_dict(user) # if you find the User model convert in to a dictionary so you can edit and jsonify it
        if(check_password_hash(user_dict['password'], payload['password'])): # use bcrypt to check password and see if input password matches
            del user_dict['password'] # delete the password since the client doesn't need it
            login_user(user) # set up the session
            print(user, ' this is user')
            return jsonify(data=user_dict, status={"code": 200, "message": "Success"}) # respond to the client
        else:
            return jsonify(data={}, status={"code": 401, "message": "Username or Password is incorrect"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Username or Password is incorrect"})
```

*Key things to note*

- ` payload = request.get_json()` - notice we are using `.get_json()` to retrieve the json from the route

- `user = models.User.get(models.User.email== payload['email'])` - our query to search by email

- `user_dict = model_to_dict(user)` - Use `model_to_dict` in order to read the model.  (The model is its own class)

- `check_password_hash(user_dict['password'], payload['password'])` - returns `True` or `False` depending on whether our hash's match

- `login_user(user)` - start the session and log in



*Test it out* - You can use the same postman request as above, but to `http://localhost:8000/user/login`


**PROTIP** - if you're having problems with your tables, try changing the name of your database, to start with a fresh one, or look up how to drop your tables in sqlite


### Protecting data

Requiring users to be logged in to access a certain route is as easy as adding the `login_required` decorator:

```python
from flask_login import login_required

...

@dog.route('/', methods=["GET"])
@login_required
def get_all_dogs():
    dogs = [model_to_dict(dog) for dog in models.Dog.select()]
    return jsonify(data=dogs, status={"code": 200, "message": "Success"})
```

For more fine-tuned control, you also have access to a `current_user` object:

```python
from flask_login import current_user

...

@dog.route('/', methods=["GET"])
def get_all_dogs():
    if not current_user.email.endswith('.edu'):
        return jsonify(data={}, status={"code": 403, "message": "Not authorized"});
    dogs = [model_to_dict(dog) for dog in models.Dog.select()]
    return jsonify(data=dogs, status={"code": 200, "message": "Success"})
```


# DOCS

- [flask](https://flask.palletsprojects.com/en/1.0.x/)
- [flask_login](https://flask-login.readthedocs.io/en/latest/#flask_login.current_user)
- [PeeWee](http://docs.peewee-orm.com/en/latest/) (orm)
