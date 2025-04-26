from peewee import *
from backend.models.BaseModel import BaseModel
from backend.models.Usuario_model import Usuario

class Billetera(BaseModel):
    """
    Representa la billetera de un usuario con su saldo disponible.
    """
    usuario = ForeignKeyField(Usuario, backref='billetera', unique=True, on_delete="CASCADE")
    saldo = FloatField(default=100.0)
