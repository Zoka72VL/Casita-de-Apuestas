import bcrypt
from datetime import datetime, timedelta
import jwt as pyjwt

from backend.models.Usuario import Usuario
from backend.models.Billetera import Billetera
from backend.models.Rol import Rol
from backend.config.settings import SECRET_KEY

class UsuarioService:

    @staticmethod
    def registrar_usuario(nombre, email, password, role_name="usuario"):
        if Usuario.select().where(Usuario.email == email).exists():
            return {"success": False, "message": "El email ya está registrado"}

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        rol, _ = Rol.get_or_create(nombre=role_name)

        usuario = Usuario.create(
            nombre=nombre,
            email=email,
            password=hashed_password,
            role=rol
        )

        # Crear billetera con saldo inicial
        Billetera.create(usuario=usuario, saldo=100.0)

        return {
            "success": True,
            "message": "Usuario registrado exitosamente",
            "user": {
                "id": usuario.id,
                "nombre": usuario.nombre,
                "email": usuario.email,
                "fecha_registro": usuario.fecha_registro.strftime("%Y-%m-%d %H:%M:%S"),
                "role": usuario.role.nombre,
                "saldo": 100.0
            }
        }

    @staticmethod
    def login(email, password):
        usuario = Usuario.get_or_none(Usuario.email == email)
        if not usuario:
            return {"success": False, "message": "El email no está registrado"}

        if not bcrypt.checkpw(password.encode('utf-8'), usuario.password.encode('utf-8')):
            return {"success": False, "message": "Contraseña incorrecta"}

        # Generar token JWT
        token = pyjwt.encode({
            "user_id": usuario.id,
            "exp": datetime.utcnow() + timedelta(hours=1)
        }, SECRET_KEY, algorithm="HS256")

        billetera = Billetera.get_or_none(Billetera.usuario == usuario)
        saldo = billetera.saldo if billetera else 0

        return {
            "success": True,
            "message": "Login exitoso",
            "token": token,
            "user": {
                "id": usuario.id,
                "nombre": usuario.nombre,
                "email": usuario.email,
                "role": usuario.role.nombre,
                "saldo": saldo
            }
        }

    @staticmethod
    def obtener_usuario_por_id(user_id):
        """
        Obtiene un usuario por ID (usado para validar el token).
        """
        return Usuario.get_or_none(Usuario.id == user_id)

    @staticmethod
    def obtener_billetera(user_id):
        """
        Obtiene la billetera de un usuario.
        """
        usuario = Usuario.get_or_none(Usuario.id == user_id)
        if usuario:
            return Billetera.get_or_none(Billetera.usuario == usuario)
        return None
