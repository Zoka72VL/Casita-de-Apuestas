from datetime import datetime
from peewee import DoesNotExist

from backend.models.Evento import Evento
from backend.models.Usuario import Usuario

class EventoService:

    @staticmethod
    def crear_evento(nombre, opcion_a, opcion_b, fecha_evento_str, usuario_id, estado="pendiente"):
        try:
            # Validar fecha
            fecha_evento = datetime.strptime(fecha_evento_str, "%Y-%m-%d %H:%M:%S")
        except ValueError:
            raise ValueError("Formato de fecha inválido. Usa 'YYYY-MM-DD HH:MM:SS'")

        try:
            usuario = Usuario.get_by_id(usuario_id)
        except DoesNotExist:
            raise ValueError("Usuario creador no encontrado.")

        # Crear el evento
        evento = Evento.create(
            nombre=nombre,
            opcion_a=opcion_a,
            opcion_b=opcion_b,
            fecha=fecha_evento,
            creado_por=usuario,
            estado=estado
        )

        return evento
