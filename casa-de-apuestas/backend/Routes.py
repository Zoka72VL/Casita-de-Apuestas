import jwt as pyjwt
import datetime
from functools import wraps
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import bcrypt
from backend.models.Usuario_model import Usuario, registrar_usuario, verificar_usuario
from backend.models.RolesPermisos import tiene_permiso

app = Flask(__name__)
app.config['SECRET_KEY'] = 'clave_secreta_segura'
CORS(app, supports_credentials=True)

# Middleware para agregar encabezados CORS en todas las respuestas
@app.after_request
def agregar_encabezados_cors(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    return response

# Middleware para verificar el token JWT
def token_requerido(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"success": False, "message": "Token faltante"}), 401
        try:
            token = token.split(" ")[1]  # Extraer el token del encabezado "Bearer token"
            data = pyjwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            user = Usuario.get_or_none(Usuario.id == data['user_id'])
            if not user:
                return jsonify({"success": False, "message": "Token inválido"}), 401
            request.user = user
        except Exception as e:
            return jsonify({"success": False, "message": "Token inválido", "error": str(e)}), 401
        return f(*args, **kwargs)
    return wrap

@app.route('/register', methods=['POST'])
@cross_origin()
def register():
    data = request.get_json()
    nombre = data.get("nombre")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "usuario")  # Permitir asignar un rol al registrar
    
    if not nombre or not email or not password:
        return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400
    
    resultado = registrar_usuario(nombre, email, password, role)
    return jsonify(resultado)

import logging

# Configurar logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/login', methods=['OPTIONS', 'POST'])
@cross_origin()
def login():
    if request.method == 'OPTIONS':
        return jsonify({"success": True}), 200

    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        logging.debug(f"Intentando login con email: {email}")

        if not email or not password:
            logging.error("Faltan datos obligatorios")
            return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400

        resultado = verificar_usuario(email, password)

        if resultado.get("success"):
            user = Usuario.get_or_none(Usuario.email == email)
            if not user:
                logging.error("Usuario no encontrado")
                return jsonify({"success": False, "message": "Usuario no encontrado"}), 404
            
            token = pyjwt.encode({
                "user_id": user.id,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            }, app.config['SECRET_KEY'], algorithm="HS256")

            logging.debug(f"Token generado para usuario {email}")
            return jsonify({"success": True, "token": token})

        logging.error(f"Error en verificación de usuario: {resultado}")
        return jsonify(resultado)
    
    except Exception as e:
        logging.exception("Error inesperado en el login")
        return jsonify({"success": False, "message": "Error en el servidor", "error": str(e)}), 500

@app.route('/admin', methods=['GET'])
@token_requerido
@cross_origin()
def admin_route():
    if not tiene_permiso(request.user, "crear_evento"):
        return jsonify({"success": False, "message": "Acceso denegado"}), 403
    return jsonify({"success": True, "message": "Bienvenido, administrador"})

@app.route('/users', methods=['GET'])
@token_requerido
@cross_origin()
def get_users():
    if not tiene_permiso(request.user, "crear_evento"):
        return jsonify({"success": False, "message": "Acceso denegado"}), 403
    usuarios = Usuario.select()
    users_list = [{"id": u.id, "nombre": u.nombre, "email": u.email, "role": u.role.name} for u in usuarios]
    return jsonify({"success": True, "users": users_list})

@app.route('/usuario/apostar')
@token_requerido
@cross_origin()
def apostar():
    if not tiene_permiso(request.user, "apostar"):
        return jsonify({"success": False, "message": "No tienes permiso"}), 403
    return jsonify({"success": True, "message": "Apuesta realizada con éxito"})

