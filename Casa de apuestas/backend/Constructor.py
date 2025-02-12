from __init__ import db

def iniciar_sistema():
    """
    Conecta a la base de datos y crea las tablas si no existen.
    """
    from Usuario_model import Usuario  # Mover la importación aquí
    db.connect()
    db.create_tables([Usuario], safe=True)
    db.close()
    print("Base de datos inicializada correctamente.")
