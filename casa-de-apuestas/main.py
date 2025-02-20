from backend.models.BaseModel import iniciar_sistema
from backend.Routes import app

if __name__ == "__main__":
    iniciar_sistema()  # Inicializar la base de datos antes de correr Flask
    app.run(debug=True, host="0.0.0.0")
