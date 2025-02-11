from peewee import *
import datetime
from BaseModel import BaseModel



class Evento(BaseModel):
    id = AutoField()
    nombre = CharField(max_length=100)
    opcion_a = CharField(max_length=50)
    opcion_b = CharField(max_length=50)
    fecha_evento = DateTimeField()

    @classmethod
    def crear_evento(cls, nombre, opcion_a, opcion_b, fecha_evento):
        try:
            nuevo_evento = cls.create(nombre=nombre, opcion_a=opcion_a, opcion_b=opcion_b, fecha_evento=fecha_evento)
            return nuevo_evento
        except IntegrityError:
            raise ValueError("Error al crear el evento")

