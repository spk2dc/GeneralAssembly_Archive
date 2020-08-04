# flask-edit-delete-put-dogs-app



- `jsonify` - is to make sure all our response are json
- `request` - is to make sure we can read the requests from the client
- `model_to_dict` - is to allow us to convert our Model to a jsonible object




### Models

- Remember our models are inheriting from peewee

```python
class Dog(Model):
    name = CharField()
    owner = CharField()
    breed = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE
```

- the `Model` in the Dog class argument is a class from Peewee that gives our app the ability to talk to our sql database.  

- Please spend time with the [peewee docs](http://docs.peewee-orm.com/en/latest/peewee/querying.html)



### Let's set up the "rest" of our routes!


#### Show Route

```python
@dog.route('/<id>', methods=["GET"])
def get_one_dog(id):
    print(id, 'reserved word?')
    dog = models.Dog.get_by_id(id)
    print(dog.__dict__)
    return jsonify(data=model_to_dict(dog), status={"code": 200, "message": "Success"})
```

- Here remember "route params" is defined in the url by putting the carrots, `/<id>`

#### Update Route

```python
@dog.route('/<id>', methods=["PUT"])
def update_dog(id):
    payload = request.get_json()
    query = models.Dog.update(**payload).where(models.Dog.id==id)
    query.execute()
    return jsonify(data=model_to_dict(models.Dog.get_by_id(id)), status={"code": 200, "message": "resource updated successfully"})
```


- Here we are using the `.update` and `.where` method, according to the [docs](http://docs.peewee-orm.com/en/latest/peewee/querying.html) on the `.update` and `.delete` methods we have to then `.execute` the query which will return the row in which the resource was added to the sql table


- `payload = request.get_json()` - in this line we are using the global `request` object we just talked about in the above, to "get_json" from the request, so that is the object that we will send over from the client!

-  What does `**payload` mean?

- It's what is called a spread operator, basically what that means is we can take the properties of an object and "spread them out into the method call. So for example, if we sent over an object like this.

```js
{
	"name": "MJ",
	"owner": "Jane",
	"breed": "Greyhound"
}
```

- we can spread the objects properties out like this in our method,


```python
 dog = models.Dog.update(name=payload['owner'], owner=payload["owner"], breed=payload["breed"]).where(models.Dog.id==id)
```

### Delete Route

```python
@dog.route('/<id>', methods=["Delete"])
def delete_dog(id):
    query = models.Dog.delete().where(models.Dog.id==id)
    query.execute()
    return jsonify(data='resource successfully deleted', status={"code": 200, "message": "resource deleted successfully"})
```


- Here you'll see again we are using the `.execute()` method to run our query!
