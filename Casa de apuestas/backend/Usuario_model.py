import bcrypt
from peewee import CharField, DateTimeField, AutoField
from datetime import datetime
from BaseModel import BaseModel
from Constructor import iniciar_sistema

class Usuario(BaseModel):
    id = AutoField()  # ID autoincremental
    nombre = CharField(max_length=100)
    email = CharField(unique=True, max_length=100)
    password = CharField(max_length=255)  # Ahora soporta contraseñas hash más largas
    fecha_registro = DateTimeField(default=datetime.now)

# Función para registrar un nuevo usuario con hash de contraseña
def registrar_usuario(nombre, email, password):
    try:
        # Validar si el email ya existe
        if Usuario.select().where(Usuario.email == email).exists():
            return {"success": False, "message": "El email ya está registrado"}

        # Hashear la contraseña antes de guardarla
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # Crear el usuario con la contraseña hasheada
        usuario = Usuario.create(nombre=nombre, email=email, password=hashed_password)

        return {
            "success": True,
            "message": "Usuario registrado exitosamente",
            "user": {
                "id": usuario.id,
                "nombre": usuario.nombre,
                "email": usuario.email,
                "fecha_registro": usuario.fecha_registro.strftime("%Y-%m-%d %H:%M:%S")
            }
        }
    
    except Exception as e:
        return {"success": False, "message": str(e)}
    
def verificar_usuario(email, password):
    try:
        usuario = Usuario.get(Usuario.email == email)
        
        # Comparar la contraseña ingresada con la almacenada en la base de datos
        if bcrypt.checkpw(password.encode('utf-8'), usuario.password.encode('utf-8')):
            return {"success": True, "message": "Login exitoso", "user_id": usuario.id}
        else:
            return {"success": False, "message": "Contraseña incorrecta"}

    except Usuario.DoesNotExist:
        return {"success": False, "message": "El email no está registrado"}

# Inicializar la base de datos al cargar el módulo
iniciar_sistema()
