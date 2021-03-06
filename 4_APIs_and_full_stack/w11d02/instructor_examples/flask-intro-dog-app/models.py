from flask_login import UserMixin
from peewee import *
import datetime

DATABASE = SqliteDatabase('dogs.sqlite')

class User(UserMixin, Model):
  username = CharField(unique=True)
  email = CharField(unique=True)
  password = CharField()

  class Meta:
    database = DATABASE

class Dog(Model):
  name = CharField()
  owner = ForeignKeyField(User, backref='dogs')
  breed = CharField()
  created_at = DateTimeField(default=datetime.datetime.now)

  class Meta:
    database = DATABASE

def initialize():
  DATABASE.connect()
  DATABASE.create_tables([Dog, User], safe=True)
  print("TABLES created")
  DATABASE.close()

