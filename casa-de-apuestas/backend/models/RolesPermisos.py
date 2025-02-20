from peewee import *
from backend.models.BaseModel import BaseModel

# Definición de roles
class Role(BaseModel):
    name = CharField(unique=True)

# Definición de permisos
class Permission(BaseModel):
    name = CharField(unique=True)

# Relación entre roles y permisos (muchos a muchos)
class RolePermission(BaseModel):
    role = ForeignKeyField(Role, backref="permissions")
    permission = ForeignKeyField(Permission, backref="roles")

def tiene_permiso(user, permiso):
    return (RolePermission
            .select()
            .join(Role)
            .join(Permission)
            .where((RolePermission.role == user.role) & (Permission.name == permiso))
            .exists())

# Cargar roles y permisos iniciales
def inicializar_roles_permisos():
    usuario_role, _ = Role.get_or_create(name="usuario")
    admin_role, _ = Role.get_or_create(name="admin")
    sistema_role, _ = Role.get_or_create(name="sistema")

    permisos = ["apostar", "ver_eventos", "crear_evento", "banear_usuario", "modificar_saldo", "gestionar_admins"]
    
    for perm in permisos:
        Permission.get_or_create(name=perm)
    
    def asignar_permisos(role_name, permisos):
        role = Role.get(Role.name == role_name)
        for perm in permisos:
            permiso = Permission.get(Permission.name == perm)
            RolePermission.get_or_create(role=role, permission=permiso)

    asignar_permisos("usuario", ["apostar", "ver_eventos"])
    asignar_permisos("admin", ["apostar", "ver_eventos", "crear_evento", "banear_usuario", "modificar_saldo"])
    asignar_permisos("sistema", permisos)