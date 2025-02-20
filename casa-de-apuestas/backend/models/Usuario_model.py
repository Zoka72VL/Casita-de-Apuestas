import bcrypt
from peewee import CharField, DateTimeField, AutoField, ForeignKeyField
from datetime import datetime
from backend.models.BaseModel import BaseModel
from backend.models.RolesPermisos import Role

class Usuario(BaseModel):
    id = AutoField()  # ID autoincremental
    nombre = CharField(max_length=100)
    email = CharField(unique=True, max_length=100)
    password = CharField(max_length=255)  # Ahora soporta contraseñas hash más largas
    fecha_registro = DateTimeField(default=datetime.now)
    role = ForeignKeyField(Role, backref="users")

# Función para registrar un nuevo usuario con hash de contraseña
def registrar_usuario(nombre, email, password, role_name="usuario"):
    try:
        if Usuario.select().where(Usuario.email == email).exists():
            return {"success": False, "message": "El email ya está registrado"}

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        
         # Asignar el rol por defecto "usuario" si no se proporciona otro
        if role_name is None:
            role_name = "usuario"
        
        role, _ = Role.get_or_create(name=role_name)
        usuario = Usuario.create(nombre=nombre, email=email, password=hashed_password, role=role)

        return {
            "success": True,
            "message": "Usuario registrado exitosamente",
            "user": {
                "id": usuario.id,
                "nombre": usuario.nombre,
                "email": usuario.email,
                "fecha_registro": usuario.fecha_registro.strftime("%Y-%m-%d %H:%M:%S"),
                "role": usuario.role.name
            }
        }
    except Exception as e:
        return {"success": False, "message": str(e)}
    
# Función para verificar credenciales de usuario
def verificar_usuario(email, password):
    try:
        usuario = Usuario.get(Usuario.email == email)
        
        if bcrypt.checkpw(password.encode('utf-8'), usuario.password.encode('utf-8')):
            return {"success": True, "message": "Login exitoso", "user_id": usuario.id, "role": usuario.role.name}
        else:
            return {"success": False, "message": "Contraseña incorrecta"}
    except Usuario.DoesNotExist:
        return {"success": False, "message": "El email no está registrado"}
