# One to Many Relation in Flask w/ Peewee

### Objectives

1.  Create a one to many relationship between users and dogs
2.  Create an instance of a dog related to a logged in user
3.  Create a logout route for the user
4.  Adjust the index route to show only dogs related to a specific user
5.  Show the difference between related users/dogs via index and Sqlite3


### dependencies

```bash
pip3 install flask-bcrypt flask_login
pip3 freeze > requirements.txt
```

- Flask doesn't utilize a `package.json`. Instead, we just use a text file that lists all of our dependencies. Pip freeze saves the dependencies in our `virtualenv` to that file.

-  If you are downloading and running a Python project, you can usually install its dependencies with `pip3 install -r requirements.txt`.

_I will be testing that my application is working by creating two users through Postman before doing any work on associations_

### Update Models
- We will need to create a one-to-many (1:M) association between users and dogs.  This means that for every user that exists there can be multiple dogs associated with that user.  However, only one user can be associated with a dog.

*models.py*
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
    owner = ForeignKeyField(User, backref='dogs') # Adjust this specific line to create a relationship between a dog and a user
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

-  We are replacing the `CharField()` with `ForeignKeyField(User, backref='dogs')`. This is a nifty shortcut provided to us by PeeWee that allows us to create a simple relationship between an instance of a user and an instance of a dog when the dog is created.

-  The first argument we are passing is the `User` class.  This tells our application to reference the id of an instance of a user.

-  The second argument allows us to use `.dogs` on an instance of a user to list all of the dogs associated with a single user.

-  You can check out the [documentation](http://docs.peewee-orm.com/en/latest/peewee/example.html#models) on relationships on peewee for more examples.

**PROTIP** - if you're having problems with your tables, try changing the name of your database, to start with a fresh one, or look up how to drop your tables in sqlite


### Create an instance of a dog related to a user
-  The first thing we will want to do is adjust some logic in the dogs resource

*resources/dogs.py*
```python
@dog.route('/', methods=["POST"])
def create_dogs():
    body = request.get_json()
    print(body)
    # new_dog = models.Dog.create(**body)
    # same exact thing as:

    # we are changing this logic from adding a string for the owner to referencing the current_user.id
    new_dog = models.Dog.create(name=body['name'], owner=current_user.id, breed=body['breed'])
    dog_data = model_to_dict(new_dog)
    return jsonify(data=dog_data, status={'code': 200, 'message': 'Success'})
```

-  We are already importing `current_user` from `flask_login` so we can now use the shorcuts provided to us from the model association to bring in the `.id` from the user.  You can check out the docs [here](https://flask-login.readthedocs.io/en/latest/#flask_login.current_user)

-  At this point we will log in with one of our users to check that an association can be made when a new dog is created.  This can be confirmed by the output of the response or you can always check your SQLite database to confirm this data is correct.



### Create a logout route for the user
-  You may have noticed that we have not created a logout route.  Interestingly enough, even if you terminate the server, the user session will still persist.  You can read more about that [here](https://flask.palletsprojects.com/en/1.1.x/api/#sessions)

-  More resources on that topic can be found [here](https://flask-login.readthedocs.io/en/latest/#remember-me), [here](https://flask-login.readthedocs.io/en/latest/#fresh-logins), [here](https://flask-login.readthedocs.io/en/latest/#fresh-logins), and [here](https://flask-login.readthedocs.io/en/latest/#fresh-logins)

-  We will want to be able to log our user out so that we may create other dogs associated with different users.

-  In your `user.py` resource add a logout route to the bottom of the resource.

*resources/user.py*
```python
# near the top of the file
from flask_login import login_user, logout_user


# at the botton of the file
@user.route('/logout', methods=["GET"])
def logout():
    logout_user() # this line will need to be imported
    return jsonify(data={}, status={'code': 200, 'message': 'successful logout'})
```

-  You can test this route out by logging your user out via Postman at `http://localhost:8000/user/logout`

-  We are importing some nifty functionality from flask_login that will do some work behind the scenes to allow us to log a user out.


#### Adjust the index route to show only dogs related to a specific user

-  The current logic in our index route for dogs will show all of the dogs regardless of the user.  Let's change that logic so that we only show dogs that are specifically related to the user that is logged in or the `current_user`.

*resources/dogs.py*
```python
@dog.route('/', methods=["GET"])
@login_required
def get_all_dogs():
    # if not current_user.email.endswith('.gov'):
    #     return jsonify(data={}, status={'code': 500, 'message': 'Error getting resources'})
    try:
        dogs = [model_to_dict(dog) for dog in current_user.dogs] # pay attention to this line
        # print(dogs)
        return jsonify(data=dogs, status={'code': 200, 'message': 'Success'})
    except:
        return jsonify(data={}, status={'code': 500, 'message': 'Error getting resources'})
```

-  We are changing one line in the index to show only dogs associated with a user

-  `dogs = [model_to_dict(dog) for dog in models.Dog.select()]` will become `dogs = [model_to_dict(dog) for dog in current_user.dogs]`

-  Remember that this is using the assocation defined before to allow us to get all of the dogs associated with a single user by simply using `.dogs`.  We don't even need to define a variable for the user because we can provied the `current_user` functionality provided to us.

-  Now you can test out all of your logic here via Postman by logging in/out different users, creating dogs associated with those specific users, and checking out index responses for those specific users.

# DOCS

- [flask](https://flask.palletsprojects.com/en/1.0.x/)
- [flask_login](https://flask-login.readthedocs.io/en/latest/#flask_login.current_user)
- [PeeWee](http://docs.peewee-orm.com/en/latest/) (orm)
