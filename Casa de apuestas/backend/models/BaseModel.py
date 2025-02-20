from peewee import Model
from backend.__init__ import db

class BaseModel(Model):
    class Meta:
        database = db

# Inicialización de la base de datos y modelos
def iniciar_sistema():
    from backend.models.Usuario_model import Usuario
    from backend.models.RolesPermisos import Role, Permission, RolePermission
    
    db.connect()
    db.create_tables([Usuario, Role, Permission, RolePermission], safe=True)
    db.close()
    print("Base de datos y modelos inicializados correctamente.")

__all__ = ["BaseModel", "iniciar_sistema"]
