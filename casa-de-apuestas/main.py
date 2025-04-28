from flask import Flask
from flask_cors import CORS
from backend.routes.usuario_routes import usuario_bp
from backend.routes.evento_routes import evento_bp
from backend.routes.admin_routes import admin_bp

from backend.models.BaseModel import db
from backend.models.Usuario import Usuario
from backend.models.Billetera import Billetera
from backend.models.Evento import Evento
from backend.models.Apuesta import Apuesta
from backend.models.Rol import Rol
from backend.models.Permiso import Permiso
from backend.models.RolPermiso import RolPermiso

from backend.setup.init_roles import inicializar_roles_y_permisos

app = Flask(__name__)
CORS(app)

def crear_tablas():
    with db:
        db.create_tables([
            Rol,
            Permiso,
            RolPermiso,
            Usuario,
            Billetera,
            Evento,
            Apuesta
        ], safe=True)  # safe=True para que no truene si ya existen

if __name__ == "__main__":
    db.connect(reuse_if_open=True)

    # ✅ Crear tablas si no existen
    crear_tablas()

    # ✅ Inicializar roles y permisos después de crear tablas
    inicializar_roles_y_permisos()

    # ✅ Registrar Blueprints
    app.register_blueprint(usuario_bp)
    app.register_blueprint(evento_bp)
    app.register_blueprint(admin_bp)

    # ✅ Iniciar servidor
    app.run(host="0.0.0.0", port=5000, debug=True)
