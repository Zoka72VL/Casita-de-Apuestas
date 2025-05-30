import { useState } from "react";

const BuscarUsuario = () => {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleBuscar = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMensaje("Por favor, ingresa un correo electrónico.");
      setUsuario(null);
      return;
    }

    // Simulación de búsqueda de usuario
    const usuarioEncontrado = {
      nombre: "Juan Pérez",
      email: email,
    };

    setUsuario(usuarioEncontrado);
    setMensaje("");
  };

  const handleEliminar = () => {
    alert(`Usuario eliminado: ${usuario.nombre}`);
    setUsuario(null);
    setEmail("");
  };

  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <form className="custom-form login-form" role="form" onSubmit={handleBuscar}>
              <h2 className="hero-title text-center mb-4 pb-2">Buscar Usuario</h2>

              <div className="form-floating mb-4 p-0">
                <input
                  type="email"
                  name="email"
                  id="emailUser"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Ingrese el email del Usuario</label>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-12">
                  <button type="submit" id="buscarUsuarioBtn" className="form-control">
                    Buscar
                  </button>
                </div>
              </div>

              {/* Contenedor para mostrar el resultado del usuario */}
              <div id="resultadoUsuario" className="mt-4 text-center">
                {mensaje && <p className="text-danger">{mensaje}</p>}
                {usuario && (
                  <div>
                    <p>
                      Usuario encontrado: <strong>{usuario.nombre}</strong> ({usuario.email})
                    </p>
                    <button onClick={handleEliminar} className="btn btn-danger">
                      Eliminar Usuario
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuscarUsuario;
