from peewee import *
from backend.models.BaseModel import BaseModel
from backend.models.Usuario import Usuario

class Billetera(BaseModel):
    id = AutoField()
    usuario = ForeignKeyField(Usuario, backref="billetera", unique=True, on_delete="CASCADE")
    saldo = FloatField(default=100.0)
