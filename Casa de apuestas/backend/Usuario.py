from peewee import Model, CharField, DateTimeField, AutoField
from datetime import datetime
from BaseModel import BaseModel
from Constructor import iniciar_sistema

class Usuario(BaseModel):
    id = AutoField()  # ID autoincremental
    nombre = CharField(max_length=100)
    email = CharField(unique=True, max_length=100)
    password = CharField(max_length=100)
    fecha_registro = DateTimeField(default=datetime.now)

# Función para registrar un nuevo usuario
def registrar_usuario(nombre, email, password):
    try:
        usuario = Usuario.create(nombre=nombre, email=email, password=password)
        return {"success": True, "message": "Usuario registrado exitosamente"}
    except Exception as e:
        return {"success": False, "message": str(e)}

# Inicializar la base de datos al cargar el módulo
iniciar_sistema()
