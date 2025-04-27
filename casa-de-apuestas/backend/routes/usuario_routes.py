from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from backend.services.usuario_service import UsuarioService
from backend.services.apuesta_service import ApuestaService
from backend.services.permiso_service import PermisoService
from backend.routes.auth_middleware import token_requerido

usuario_bp = Blueprint('usuario', __name__)

@usuario_bp.route('/register', methods=['POST'])
@cross_origin()
def register():
    data = request.get_json()
    nombre = data.get("nombre")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "usuario")

    if not nombre or not email or not password:
        return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400

    resultado = UsuarioService.registrar_usuario(nombre, email, password, role)
    return jsonify(resultado)

@usuario_bp.route('/login', methods=['POST'])
@cross_origin()
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400

    resultado = UsuarioService.login(email, password)
    return jsonify(resultado)

@usuario_bp.route('/usuario/apostar', methods=['POST'])
@token_requerido
@cross_origin()
def apostar():
    if not PermisoService.tiene_permiso(request.user, "apostar"):
        return jsonify({"success": False, "message": "No tienes permiso para apostar"}), 403

    data = request.get_json()
    evento_id = data.get("evento_id")
    opcion = data.get("opcion")
    monto = data.get("monto")

    if not evento_id or not opcion or not monto:
        return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400

    try:
        apuesta = ApuestaService.apostar(request.user.id, evento_id, opcion, monto)
        return jsonify({
            "success": True,
            "message": "Apuesta realizada con éxito",
            "apuesta": {
                "evento_id": apuesta.evento.id,
                "opcion": apuesta.opcion,
                "monto": apuesta.cantidad,
                "usuario": apuesta.usuario.id
            }
        })
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 400

@usuario_bp.route('/usuario/saldo', methods=['GET'])
@token_requerido
@cross_origin()
def consultar_saldo():
    billetera = UsuarioService.obtener_billetera(request.user.id)
    saldo = billetera.saldo if billetera else 0
    return jsonify({"success": True, "saldo": saldo})
