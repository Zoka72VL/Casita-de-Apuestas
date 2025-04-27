from peewee import *
from datetime import datetime
from backend.models.BaseModel import BaseModel
from backend.models.Usuario import Usuario

class Evento(BaseModel):
    id = AutoField()
    nombre = CharField(unique=True, max_length=100)
    opcion_a = CharField(max_length=50, null=True)
    opcion_b = CharField(max_length=50, null=True)
    fecha = DateTimeField(default=datetime.now)
    creado_por = ForeignKeyField(Usuario, backref="eventos", on_delete="CASCADE")
    estado = CharField(max_length=50, default="pendiente")
