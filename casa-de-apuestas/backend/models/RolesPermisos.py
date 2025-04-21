from peewee import *
from backend.models.BaseModel import BaseModel
from backend.models.Usuario_model import Usuario

# Modelo de Permiso
class Permiso(BaseModel):
    nombre = CharField(unique=True, max_length=100)

# Modelo de Rol
class Rol(BaseModel):
    nombre = CharField(unique=True, max_length=50)

# Relación entre Roles y Permisos
class RolPermiso(BaseModel):
    rol = ForeignKeyField(Rol, backref='permisos', on_delete='CASCADE')
    permiso = ForeignKeyField(Permiso, backref='roles', on_delete='CASCADE')

# Asignación de permisos por defecto
def inicializar_roles_permisos():
    roles_predeterminados = ["admin", "usuario"]
    permisos_predeterminados = ["apostar", "crear_evento", "ver_saldo"]
    
    for rol in roles_predeterminados:
        Rol.get_or_create(nombre=rol)
    
    for permiso in permisos_predeterminados:
        Permiso.get_or_create(nombre=permiso)
    
    # Asignación de permisos a roles
    asignaciones = {
        "admin": ["apostar", "crear_evento", "ver_saldo"],
        "usuario": ["apostar", "ver_saldo"]
    }
    
    for rol_nombre, permisos in asignaciones.items():
        rol = Rol.get(Rol.nombre == rol_nombre)
        for permiso_nombre in permisos:
            permiso = Permiso.get(Permiso.nombre == permiso_nombre)
            RolPermiso.get_or_create(rol=rol, permiso=permiso)

# Función para verificar si un usuario tiene un permiso específico
def tiene_permiso(usuario, nombre_permiso):
    try:
        rol_permisos = (RolPermiso
                        .select()
                        .join(Permiso, on=(RolPermiso.permiso == Permiso.id))
                        .where((RolPermiso.rol == usuario.role) & (Permiso.nombre == nombre_permiso))
                        .exists())
        return rol_permisos
    except Exception:
        return False