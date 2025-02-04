from flask import Flask, request, jsonify
from Usuario import registrar_usuario

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True)
