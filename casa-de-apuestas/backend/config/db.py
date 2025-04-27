from peewee import SqliteDatabase
from backend.config.settings import DATABASE_NAME

db = SqliteDatabase(DATABASE_NAME)
