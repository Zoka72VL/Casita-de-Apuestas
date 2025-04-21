from backend.Routes import app
from backend.models.BaseModel import setup_db

if __name__ == "__main__":
    # Inicializar base de datos antes de arrancar la aplicación
    setup_db()
    
    # Ejecutar servidor Flask
    app.run(debug=True, host='0.0.0.0', port=5000)
