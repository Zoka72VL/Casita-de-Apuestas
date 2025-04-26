from peewee import *

# Conexión a la base de datos (puedes cambiar esto según tu configuración)
db = SqliteDatabase('database.db')  # O MySQLDatabase(...) si usas MySQL

class BaseModel(Model):
    class Meta:
        database = db

# Inicialización de la base de datos
def inicializar_base_de_datos():
    # Importaciones diferidas para evitar importación circular
    from backend.models.RolesPermisos import Permiso, RolPermiso
    from backend.models.Usuario_model import Usuario
    from backend.models.Billetera import Billetera
    from backend.models.Apuesta import Apuesta
    from backend.models.Evento import Evento
    from backend.models.RolModel import Rol
    
    db.connect()
    db.create_tables([Rol, Permiso, RolPermiso, Usuario, Billetera, Evento, Apuesta], safe=True)
    db.close()

# Crear roles y permisos predeterminados
def inicializar_roles_permisos():
    from backend.models.RolesPermisos import Rol, Permiso, RolPermiso  # Importación diferida
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

# Ejecutar la inicialización de la base de datos
def setup_db():
    inicializar_base_de_datos()
    inicializar_roles_permisos()
    db.close()

# setup_db()  # Se ejecutará solo en Main.py
