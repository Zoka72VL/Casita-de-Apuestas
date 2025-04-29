from datetime import datetime
from peewee import DoesNotExist
from backend.models.Evento import Evento
from backend.models.Usuario import Usuario
from backend.models.Apuesta import Apuesta
from backend.models.Billetera import Billetera
from backend.models.base_model import db

class EventoService:

    @staticmethod
    def crear_evento(nombre, opcion_a, opcion_b, fecha_evento_str, usuario_id, estado="pendiente"):
        try:
            fecha_evento = datetime.strptime(fecha_evento_str, "%Y-%m-%d %H:%M:%S")
        except ValueError:
            raise ValueError("Formato de fecha inválido. Usa 'YYYY-MM-DD HH:MM:SS'")

        usuario = Usuario.get_or_none(Usuario.id == usuario_id)
        if not usuario:
            raise ValueError("Usuario creador no encontrado.")

        evento = Evento.create(
            nombre=nombre,
            opcion_a=opcion_a,
            opcion_b=opcion_b,
            fecha=fecha_evento,
            creado_por=usuario,
            estado=estado
        )

        return evento

    @staticmethod
    def listar_eventos_activos():
        return Evento.select().where(
            (Evento.estado == "activo") &
            (Evento.fecha > datetime.now())
        ).order_by(Evento.fecha.asc())

    @staticmethod
    def terminar_evento(evento_id, opcion_ganadora):
        evento = Evento.get_or_none(Evento.id == evento_id)
        if not evento:
            raise ValueError("Evento no encontrado.")

        if evento.estado != "activo":
            raise ValueError("El evento no está activo o ya ha finalizado.")

        if opcion_ganadora not in ["A", "B"]:
            raise ValueError("Opción ganadora inválida. Solo puede ser 'A' o 'B'.")

        # Obtener apuestas del evento
        apuestas = Apuesta.select().where(Apuesta.evento == evento)

        if not apuestas.exists():
            raise ValueError("No hay apuestas registradas para este evento.")

        total_pozo = sum(apuesta.cantidad for apuesta in apuestas)
        total_ganadores = sum(apuesta.cantidad for apuesta in apuestas if apuesta.opcion == opcion_ganadora)

        if total_ganadores == 0:
            # Si nadie apostó a la opción correcta, el pozo se queda en la casa (opcionalmente podrías hacer otra cosa)
            evento.estado = "finalizado"
            evento.save()
            return {"message": "El evento finalizó. No hubo ganadores."}

        # Repartir premios entre ganadores
        with db.atomic():
            for apuesta in apuestas:
                if apuesta.opcion == opcion_ganadora:
                    porcentaje = apuesta.cantidad / total_ganadores
                    premio = porcentaje * total_pozo
                    billetera = Billetera.get_or_none(Billetera.usuario == apuesta.usuario)
                    if billetera:
                        billetera.saldo += premio
                        billetera.save()

            # Marcar evento como finalizado
            evento.estado = "finalizado"
            evento.save()

        return {"message": "Evento finalizado y premios distribuidos exitosamente."}
