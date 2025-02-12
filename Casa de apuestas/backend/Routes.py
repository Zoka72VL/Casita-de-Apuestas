from flask import Flask, request, jsonify
from flask_cors import CORS  # Importar CORS
from Usuario_model import Usuario, registrar_usuario, verificar_usuario

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Habilita CORS para todas las rutas

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    nombre = data.get("nombre")
    email = data.get("email")
    password = data.get("password")
    
    if not nombre or not email or not password:
        return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400
    
    resultado = registrar_usuario(nombre, email, password)
    return jsonify(resultado)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"success": False, "message": "Faltan datos obligatorios"}), 400

    resultado = verificar_usuario(email, password)
    return jsonify(resultado)

@app.route('/users', methods=['GET'])
def get_users():
    usuarios = Usuario.select()
    users_list = [
        {"id": usuario.id, "nombre": usuario.nombre, "email": usuario.email, "fecha_registro": usuario.fecha_registro.strftime("%Y-%m-%d %H:%M:%S")}
        for usuario in usuarios
    ]
    return jsonify(users_list)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")  # Habilitar acceso desde cualquier IP
