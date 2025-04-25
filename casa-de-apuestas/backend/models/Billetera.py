from peewee import *
from datetime import datetime
from backend.models.BaseModel import BaseModel
from backend.models.Evento import Evento

# Modelo de la Billetera
class Billetera(BaseModel):
    from backend.models.Usuario_model import Usuario
    usuario = ForeignKeyField(Usuario, backref='billetera', unique=True, on_delete="CASCADE")  # Se cambia 'Usuario' por string para evitar circular import
    saldo = FloatField(default=100.0)  # Saldo inicial de 100

    @staticmethod
    def apostar_a_evento(usuario, evento, opcion, cantidad):
        from backend.models.Usuario_model import Usuario  # Importación diferida
        
        billetera = Billetera.get_or_none(Billetera.usuario == usuario)
        if not billetera:
            raise ValueError("El usuario no tiene una billetera registrada")
        
        if billetera.saldo < cantidad:
            raise ValueError("Fondos insuficientes")
        
        # Registrar la apuesta
        apuesta = Apuesta.crear_apuesta(usuario, evento, opcion, cantidad)
        
        # Descontar saldo
        billetera.saldo -= cantidad
        billetera.save()
        return apuesta

# Modelo de Apuesta
class Apuesta(BaseModel):
    from backend.models.Usuario_model import Usuario  # Agrega esto arriba de la clase Apuesta
    usuario = ForeignKeyField(Usuario, backref='apuestas', on_delete="CASCADE")
    evento = ForeignKeyField(Evento, backref='apuestas', on_delete="CASCADE")
    opcion = CharField(max_length=1)  # "A" o "B"
    cantidad = FloatField()
    fecha_apuesta = DateTimeField(default=datetime.now)

    @classmethod
    def crear_apuesta(cls, usuario, evento, opcion, cantidad):
        return cls.create(usuario=usuario, evento=evento, opcion=opcion, cantidad=cantidad)