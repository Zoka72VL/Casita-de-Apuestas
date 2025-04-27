from peewee import *
from datetime import datetime
from backend.models.BaseModel import BaseModel
from backend.models.Rol import Rol

class Usuario(BaseModel):
    id = AutoField()
    nombre = CharField(max_length=100)
    email = CharField(unique=True, max_length=100)
    password = CharField(max_length=255)
    fecha_registro = DateTimeField(default=datetime.now)
    role = ForeignKeyField(Rol, backref="usuarios", on_delete="CASCADE")
