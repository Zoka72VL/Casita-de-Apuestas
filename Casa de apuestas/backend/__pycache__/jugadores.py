from peewee import *
from peewee import Model, CharField, DateTimeField, AutoField
from datetime import datetime
from BaseModel import BaseModel
from Evento import Evento


# Conectar y crear tablas
class Jugadores(BaseModel):
    id = AutoField()
    nombre = CharField(max_length=50)
    elo= CharField(max_length=50)
    pais = CharField(max_length=100, unique=True)
    foto = CharField(max_length=100)

    @classmethod
    def crear_jugador(cls, nombre, elo, pais, foto):
        try:
            nuevo_jugador = cls.create(nombre=nombre, elo=elo, pais=pais, foto=foto)
            return nuevo_jugador
        except IntegrityError:
            raise ValueError("El Jugador ya está registrado")
    
    
    def modificar_datos(jugador_id=None, jugador_nombre=None, nuevo_nombre=None, nuevo_elo=None, nuevo_pais=None, nueva_foto=None):
        try:
            # Verificar que se proporcione al menos un identificador (id o nombre)
            if jugador_id is None and jugador_nombre is None:
                print("Debes proporcionar un ID o un nombre para buscar al jugador.")
                return

            # Buscar el jugador por ID o nombre
            if jugador_id is not None:
                jugador = Jugadores.get(Jugadores.id == jugador_id)
            else:
                jugador = Jugadores.get(Jugadores.nombre == jugador_nombre)

            # Actualizar los campos si se proporcionan nuevos valores
            if nuevo_nombre is not None:
                jugador.nombre = nuevo_nombre
            if nuevo_elo is not None:
                jugador.elo = nuevo_elo
            if nuevo_pais is not None:
                jugador.pais = nuevo_pais
            if nueva_foto is not None:
                jugador.foto = nueva_foto

            # Guardar los cambios en la base de datos
            jugador.save()
            print(f"Jugador modificado exitosamente: {jugador.nombre} (ID: {jugador.id})")

        except Jugadores.DoesNotExist:
            print("No se encontró un jugador con el ID o nombre proporcionado.")
        except Exception as e:
            print(f"Ocurrió un error al modificar el jugador: {e}")
