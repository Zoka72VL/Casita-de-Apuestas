import jwt as pyjwt
from flask import request, jsonify
from functools import wraps
from backend.services.usuario_service import UsuarioService
from backend.config.settings import SECRET_KEY

def token_requerido(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"success": False, "message": "Token faltante"}), 401
        try:
            token = token.split(" ")[1]
            data = pyjwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            user = UsuarioService.obtener_usuario_por_id(data['user_id'])
            if not user:
                return jsonify({"success": False, "message": "Token inválido"}), 401
            request.user = user
        except Exception as e:
            return jsonify({"success": False, "message": "Token inválido", "error": str(e)}), 401
        return f(*args, **kwargs)
    return wrap
