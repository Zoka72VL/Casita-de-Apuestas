from peewee import Model, SqliteDatabase

# Configuración de la base de datos
DATABASE_NAME = "database.db"
db = SqliteDatabase(DATABASE_NAME)

__all__ = ["db", "DATABASE_NAME"]

class BaseModel(Model):
    class Meta:
        database = db # Usar la base de datos SQLite definida arriba