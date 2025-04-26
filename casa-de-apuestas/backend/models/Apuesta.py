from peewee import *
from datetime import datetime
from backend.models.BaseModel import BaseModel
from backend.models.Usuario_model import Usuario
from backend.models.Evento import Evento

class Apuesta(BaseModel):
    """
    Representa una apuesta hecha por un usuario sobre un evento.
    """
    usuario = ForeignKeyField(Usuario, backref='apuestas', on_delete="CASCADE")
    evento = ForeignKeyField(Evento, backref='apuestas', on_delete="CASCADE")
    opcion = CharField(max_length=1)  # Debe ser "A" o "B"
    cantidad = FloatField()
    fecha_apuesta = DateTimeField(default=datetime.now)
