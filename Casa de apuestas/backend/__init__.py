from peewee import SqliteDatabase

# Configuración de la base de datos
DATABASE_NAME = "database.db"
db = SqliteDatabase(DATABASE_NAME)

__all__ = ["db", "DATABASE_NAME"]
