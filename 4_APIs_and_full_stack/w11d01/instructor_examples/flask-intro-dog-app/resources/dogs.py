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
