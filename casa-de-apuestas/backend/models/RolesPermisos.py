from peewee import *
from backend.models.BaseModel import BaseModel
from backend.models.RolModel import Rol  # ✅ corregido
from backend.models.Usuario_model import Usuario  # ❌ si sigue causando ciclo, quitarlo

class Permiso(BaseModel):
    nombre = CharField(unique=True, max_length=100)

class RolPermiso(BaseModel):
    rol = ForeignKeyField(Rol, backref='permisos', on_delete='CASCADE')
    permiso = ForeignKeyField(Permiso, backref='roles', on_delete='CASCADE')

def inicializar_roles_permisos():
    roles_predeterminados = ["admin", "usuario"]
    permisos_predeterminados = ["apostar", "crear_evento", "ver_saldo"]

    for rol in roles_predeterminados:
        Rol.get_or_create(nombre=rol)

    for permiso in permisos_predeterminados:
        Permiso.get_or_create(nombre=permiso)

    asignaciones = {
        "admin": ["apostar", "crear_evento", "ver_saldo"],
        "usuario": ["apostar", "ver_saldo"]
    }

    for rol_nombre, permisos in asignaciones.items():
        rol = Rol.get(Rol.nombre == rol_nombre)
        for permiso_nombre in permisos:
            permiso = Permiso.get(Permiso.nombre == permiso_nombre)
            RolPermiso.get_or_create(rol=rol, permiso=permiso)

def tiene_permiso(usuario, nombre_permiso):
    try:
        return (RolPermiso
                .select()
                .join(Permiso, on=(RolPermiso.permiso == Permiso.id))
                .where((RolPermiso.rol == usuario.role) & (Permiso.nombre == nombre_permiso))
                .exists())
    except Exception:
        return False
