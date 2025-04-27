from peewee import *
from backend.models.BaseModel import BaseModel

class Rol(BaseModel):
    id = AutoField()
    nombre = CharField(unique=True, max_length=50)
