import os

# Clave secreta para JWT
SECRET_KEY = os.environ.get("SECRET_KEY", "clave_secreta_default")

# Configuración de la base de datos (si en el futuro quieres cambiar de SQLite a PostgreSQL, etc.)
DATABASE_NAME = os.environ.get("DATABASE_NAME", "database.db")
DATABASE_ENGINE = os.environ.get("DATABASE_ENGINE", "sqlite")  # Puede ser "sqlite", "postgres", etc.

# Otros settings que puedes agregar luego:
# - Expiración de token
# - Configuración de correo
# - URLs de APIs externas
# - Modos de debug, producción, etc.
