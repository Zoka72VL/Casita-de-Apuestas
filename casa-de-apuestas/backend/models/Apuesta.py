from peewee import *
from datetime import datetime
from backend.models.BaseModel import BaseModel
from backend.models.Usuario_model import Usuario
from backend.models.Evento import Evento

# Modelo de Apuesta
class Apuesta(BaseModel):
    usuario = ForeignKeyField(Usuario, backref='apuestas', on_delete="CASCADE")
    evento = ForeignKeyField(Evento, backref='apuestas', on_delete="CASCADE")
    opcion = CharField(max_length=1)  # "A" o "B"
    cantidad = FloatField()
    fecha_apuesta = DateTimeField(default=datetime.now)

    @classmethod
    def crear_apuesta(cls, usuario, evento, opcion, cantidad):
        return cls.create(usuario=usuario, evento=evento, opcion=opcion, cantidad=cantidad)

