from peewee import *
from datetime import datetime
from backend.models.BaseModel import BaseModel

# Modelo de Evento
class Evento(BaseModel):
    nombre = CharField(unique=True, max_length=100)
    fecha = DateTimeField(default=datetime.now)
    estado = CharField(max_length=50, default="pendiente")

    @staticmethod
    def crear_evento(nombre, fecha):
        return Evento.create(nombre=nombre, fecha=fecha)

    @staticmethod
    def registrar_apuesta(usuario, evento_id, opcion, cantidad):
        from backend.models.Usuario_model import Usuario  # Importación diferida
        from backend.models.Billetera import Billetera, Apuesta  # Importación diferida
        
        usuario = Usuario.get_or_none(Usuario.id == usuario.id)
        evento = Evento.get_or_none(Evento.id == evento_id)
        
        if not usuario:
            raise ValueError("Usuario no encontrado")
        if not evento:
            raise ValueError("Evento no encontrado")
        
        return Billetera.apostar_a_evento(usuario, evento, opcion, cantidad)
