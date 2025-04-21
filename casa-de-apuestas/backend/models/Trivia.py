from peewee import Model, CharField, DateTimeField, AutoField
from datetime import datetime
from BaseModel import BaseModel
from Usuario import Usuario

# Conexión a la base de datos (puedes cambiar esto según tu configuración)
db = BaseModel

class BaseModel(Model):
    class Meta:
        database = db

class Billetera(BaseModel):
    usuario = ForeignKeyField(Usuario, backref='billeteras')
    lco_tokens = FloatField(default=500.0)

    @staticmethod
    def ingresar_a_billetera(usuario):
        try:
            billetera = Billetera.get(Billetera.usuario == usuario)
            return billetera
        except Billetera.DoesNotExist:
            raise ValueError("Billetera no encontrada")

    @staticmethod
    def apostar_a_evento(usuario, evento, opcion, cantidad):
        billetera = Billetera.ingresar_a_billetera(usuario)
        if billetera.lco_tokens < cantidad:
            raise ValueError("Fondos insuficientes")

        # Aquí podrías agregar la lógica para registrar la apuesta
        # Por ejemplo, podrías crear una clase Apuesta y registrar la apuesta allí
        billetera.lco_tokens -= cantidad
        billetera.save()
        return f"Has apostado {cantidad} LCO a la opción {opcion} en el evento {evento.nombre}"

# Conectar y crear tablas
db.connect()
db.create_tables([Billetera])