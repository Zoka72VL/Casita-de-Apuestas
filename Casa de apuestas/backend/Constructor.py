from __init__ import db
from Usuario import Usuario

def iniciar_sistema():
    """
    Conecta a la base de datos y crea las tablas si no existen.
    """
    db.connect()
    db.create_tables([Usuario], safe=True)
    db.close()
    print("Base de datos inicializada correctamente.")
