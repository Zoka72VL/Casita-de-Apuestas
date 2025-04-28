from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from backend.services.evento_service import EventoService
from backend.services.permiso_service import PermisoService
from backend.routes.auth_middleware import token_requerido

evento_bp = Blueprint('evento', __name__)

@evento_bp.route('/admin/crearEvento', methods=['POST'])
@token_requerido
@cross_origin()
def crear_evento():
    #if not PermisoService.tiene_permiso(request.user, "crear_evento"):
    #    return jsonify({"success": False, "message": "No tienes permiso para crear eventos"}), 403

    data = request.get_json()
    nombre = data.get("nombre")
    opcion_a = data.get("opcion_a")
    opcion_b = data.get("opcion_b")
    fecha_evento = data.get("fecha_evento")
    estado = data.get("estado", "pendiente")

    if not nombre or not opcion_a or not opcion_b or not fecha_evento:
        return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400

    try:
        evento = EventoService.crear_evento(nombre, opcion_a, opcion_b, fecha_evento, request.user.id, estado)
        return jsonify({
            "success": True,
            "message": "Evento creado exitosamente",
            "evento": {
                "id": evento.id,
                "nombre": evento.nombre,
                "opcion_a": evento.opcion_a,
                "opcion_b": evento.opcion_b,
                "fecha_evento": evento.fecha.strftime('%Y-%m-%d %H:%M:%S'),
                "estado": evento.estado,
                "creado_por": evento.creado_por.id
            }
        })
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 400
