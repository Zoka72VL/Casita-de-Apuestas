from peewee import Model
from __init__ import db

class BaseModel(Model):
    class Meta:
        database = db
