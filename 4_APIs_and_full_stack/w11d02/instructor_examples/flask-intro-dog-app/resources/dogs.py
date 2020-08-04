import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict

dog = Blueprint('dogs', 'dog')

@dog.route('/', methods=["GET"])
def get_all_dogs():
    try:
        dogs = [model_to_dict(dog) for dog in models.Dog.select()]
        # print(dogs)
        return jsonify(data=dogs, status={'code': 200, 'message': 'Success'})
    except:
        return jsonify(data={}, status={'code': 500, 'message': 'Error getting resources'})


@dog.route('/', methods=["POST"])
def create_dogs():
    body = request.get_json()
    print(body)
    new_dog = models.Dog.create(**body)
    # same exact thing as:
    # new_dog = models.Dog.create(name=body['name'], owner=body['owner'], breed=body['breed'])
    dog_data = model_to_dict(new_dog)
    return jsonify(data=dog_data, status={'code': 200, 'message': 'Success'})


@dog.route('/<id>', methods=["GET"])
def get_one_dog(id):
    print(id, 'this is the id')
    dog = models.Dog.get_by_id(id)
    dog_dict = model_to_dict(dog)
    return jsonify(data=dog_dict, status={'code': 200, 'message': 'Success'})


@dog.route('/<id>', methods=['PUT'])
def update_dog(id):
    payload = request.get_json()
    update_query = models.Dog.update(**payload).where(models.Dog.id == id)

    update_query.execute()

    update_dog = models.Dog.get_by_id(id)

    return jsonify(data=model_to_dict(update_dog), message="Successfully update dog with id {}".format(id), status={'code': 200, 'message': 'Success'})


@dog.route('/<id>', methods=['DELETE'])
def delete_dog(id):
    delete_query = models.Dog.delete().where(models.Dog.id == id)
    delete_query.execute() # you need this for delete and update
    return jsonify(
        data={},
        message="Successfully deleted dog with id {}".format(id),
        status={'code': 200, 'message': 'Success'}
    )
    
