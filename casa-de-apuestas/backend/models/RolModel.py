from peewee import CharField
from backend.models.BaseModel import BaseModel

class Rol(BaseModel):
    nombre = CharField(unique=True, max_length=50)
