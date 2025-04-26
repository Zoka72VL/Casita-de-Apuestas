from peewee import *
from datetime import datetime
from backend.models.BaseModel import BaseModel
from backend.models.Usuario_model import Usuario

# Modelo de Evento
class Evento(BaseModel):
    nombre = CharField(unique=True, max_length=100)
    opcion_a = CharField(max_length=50, null=True)  # Opción A
    opcion_b = CharField(max_length=50, null=True)  # Opción B
    fecha = DateTimeField(default=datetime.now)
    creado_por = ForeignKeyField(Usuario, backref="eventos", on_delete="CASCADE")
    estado = CharField(max_length=50, default="pendiente")

    @staticmethod
    def crear_evento(nombre, opcion_a, opcion_n, fecha, user):
        return Evento.create(nombre=nombre, fecha=fecha, opcion_a=opcion_a, opcion_b=opcion_n, creado_por=user)

