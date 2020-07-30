
# The Animal class contains shared properties and methods for all classes that
# represent types of animals
class Animal:
    total_animals = 0

    # Every animal has a name, an age, and a number of legs
    def __init__(self, name, age, legs):
        self.name = name
        self.age = age
        self.legs = legs
        Animal.total_animals += 1

    # Every animal can say hello and share its name and age
    def say_hello(self):
        print('My name is', self.name, 'and I am', self.age,
            'years old')


# The Dog class contains everything from Animal, and in addition a boolean
# designating whether it's potty trained
class Dog(Animal):
    total_dogs = 0

    def __init__(self, name, age=0, potty_trained=False):
        # Call the parent class's constructor to set the name, age, and # legs
        Animal.__init__(self, name, age, 4)
        # Then set dog-specific properties
        self.potty_trained = potty_trained
        Dog.total_dogs += 1

    def bark_hello(self, person):
        # First give the generic animal greeting
        self.say_hello()
        # Then give a greeting specific to dogs
        print('There are', Dog.total_dogs, 'dogs in this room!')

    # This is a dog-specific method, that changes some dog-specific data
    def potty_train(self):
        self.potty_trained = True


# The Squirrel class contains everything from Animal, but does *not* contain
# dog-specific stuff from Dog
class Squirrel(Animal):
    def __init__(self, name, age):
        Animal.__init__(self, name, age, 4)
        self.acorn_count = 0

    def find_acorn(self):
        self.acorn_count += 1


# my_list = []
# print(type(my_list) == list)
# print(type(my_dog) == Dog)

# Construct new *instances* of a class using the class name. The initialize
# method __init__() is called automatically
my_dog = Dog('Spike', 3, False)
# When we call a method like bark_hello, "self" in the method is set to the
# instance we call it on, which is "my_dog" in this case
my_dog.bark_hello('James')

other_dog = Dog('Fido')
other_dog.bark_hello('James')

# you can also access instance or class properties directly
# print(my_dog.name)
# print(my_dog.age)
# print(other_dog.name)
# print(other_dog.age)
# print('we have', Dog.total_dogs, 'dogs')

# print(my_dog.potty_trained)
# my_dog.potty_train()
# print(my_dog.potty_trained)

my_squirrel = Squirrel('Rocky', 5)
my_squirrel.say_hello()

# print(my_squirrel.acorn_count)
# my_squirrel.find_acorn()
# print(my_squirrel.acorn_count)

# this won't work, because find_acorn is specific to the Squirrel class
# my_dog.find_acorn()

# this won't work, because potty_train is specific to the Dog class
my_squirrel.potty_train()
