from peewee import *
from backend.models.BaseModel import BaseModel
from backend.models.Rol import Rol
from backend.models.Permiso import Permiso

class RolPermiso(BaseModel):
    id = AutoField()
    rol = ForeignKeyField(Rol, backref="permisos", on_delete="CASCADE")
    permiso = ForeignKeyField(Permiso, backref="roles", on_delete="CASCADE")
