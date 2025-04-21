import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const RegisterForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password })
      });
      const data = await response.json();
      if (data.success) {
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error en la conexión");
    }
  };

  return (
    <>
      <content className="contentHome" id="contentHome">
        <div className="container">
          <div className="row frente">
            <div className="col-lg-6 col-12 mx-auto">
              <form id="registerForm" className="custom-form" role="form" onSubmit={handleRegister}>
                <h2 className="hero-title text-center mb-4 pb-2">Crea tu Usuario</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Ingresa tu Nick de AOE2insights</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating mb-4 p-0">
                      <input
                        type="email"
                        name="emailregister"
                        id="emailregister"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Email </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="form-floating p-0">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Acepto los términos de servicio y la política de privacidad.
                      </label>
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-5 col-5 ms-auto">
                      <button type="submit" className="form-control">Registrarse</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-7">
                      <p className="mb-0">
                        <NavLink className="btn custom-btn custom-border-btn" to="/login" end>
                          Ya tenes cuenta?
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
                {error && <p className="text-danger mt-3">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </content>
    </>
  );
};

export default RegisterForm;
