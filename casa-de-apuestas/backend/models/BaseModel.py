from peewee import Model
from backend.config.db import db

class BaseModel(Model):
    class Meta:
        database = db
