from datetime import datetime
from peewee import DoesNotExist

from backend.models.Usuario import Usuario
from backend.models.Evento import Evento
from backend.models.Billetera import Billetera
from backend.models.Apuesta import Apuesta
from backend.models.BaseModel import db  # para manejar transacciones

class ApuestaService:

    @staticmethod
    def apostar(usuario_id, evento_id, opcion, cantidad):
        if opcion not in ["A", "B"]:
            raise ValueError("Opción inválida. Solo se permite 'A' o 'B'.")

        try:
            usuario = Usuario.get_by_id(usuario_id)
        except DoesNotExist:
            raise ValueError("Usuario no encontrado.")

        try:
            evento = Evento.get_by_id(evento_id)
        except DoesNotExist:
            raise ValueError("Evento no encontrado.")

        if evento.estado != "activo":
            raise ValueError("El evento no está activo.")
        if evento.fecha < datetime.now():
            raise ValueError("El evento ya ha finalizado.")

        billetera = Billetera.get_or_none(Billetera.usuario == usuario)
        if not billetera:
            raise ValueError("El usuario no tiene una billetera registrada.")

        if billetera.saldo < cantidad:
            raise ValueError("Fondos insuficientes.")

        # Transacción segura
        with db.atomic():
            apuesta = Apuesta.create(
                usuario=usuario,
                evento=evento,
                opcion=opcion,
                cantidad=cantidad
            )
            billetera.saldo -= cantidad
            billetera.save()

        return apuesta
