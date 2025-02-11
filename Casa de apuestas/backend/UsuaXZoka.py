from peewee import *
from peewee import Model, CharField, DateTimeField, AutoField
from datetime import datetime
from BaseModel import BaseModel
from Evento import Evento


# Conectar y crear tablas
class Usuario(BaseModel):
    id = AutoField()
    nombre = CharField(max_length=50)
    email = CharField(max_length=100, unique=True)
    password = CharField(max_length=100)
    fecha_registro = DateTimeField(default=datetime.datetime.now)

    @classmethod
    def crear_usuario(cls, nombre, email, password):
        try:
            nuevo_usuario = cls.create(nombre=nombre, email=email, password=password)
            return nuevo_usuario
        except IntegrityError:
            raise ValueError("El email ya está registrado")

    @classmethod
    def validar_usuario(cls, email, password):
        try:
            usuario = cls.get(cls.email == email)
            if usuario.password == password:
                return usuario
            else:
                raise ValueError("Contraseña incorrecta")
        except cls.DoesNotExist:
            raise ValueError("Usuario no encontrado")

    def ingresar_a_billetera(self):
        try:
            billetera = billetera.get(billetera.usuario == self)
            return billetera
        except billetera.DoesNotExist:
            raise ValueError("Billetera no encontrada")

    def apostar_a_evento(self, evento, opcion, cantidad):
        billetera = self.ingresar_a_billetera()
        if billetera.lco_tokens < cantidad:
            raise ValueError("Fondos insuficientes")

        # Aquí podrías agregar la lógica para registrar la apuesta
        # Por ejemplo, podrías crear una clase Apuesta y registrar la apuesta allí
        billetera.lco_tokens -= cantidad
        billetera.save()
        return f"Has apostado {cantidad} LCO a la opción {opcion} en el evento {evento.nombre}"

# Ejemplo de uso
try:
    usuario = Usuario.crear_usuario("Juan Perez", "juan@example.com", "password123")
    print(f"Usuario creado: {usuario.nombre}")

    usuario_validado = Usuario.validar_usuario("juan@example.com", "password123")
    print(f"Usuario validado: {usuario_validado.nombre}")

    billetera = usuario.ingresar_a_billetera()
    print(f"Tokens en billetera: {billetera.lco_tokens}")

    evento = Evento.create(nombre="Partido de Fútbol", opcion_a="Equipo A", opcion_b="Equipo B", fecha_evento=datetime.datetime.now())
    resultado_apuesta = usuario.apostar_a_evento(evento, "Equipo A", 50.0)
    print(resultado_apuesta)

except ValueError as e:
    print(f"Error: {e}")