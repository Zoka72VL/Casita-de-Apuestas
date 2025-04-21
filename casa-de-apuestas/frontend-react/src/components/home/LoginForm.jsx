import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
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
            <div className="col-lg-5 col-12 mx-auto">
              <form className="custom-form login-form" role="form" onSubmit={handleLogin}>
                <h2 className="hero-title text-center mb-4 pb-2">Ingresa</h2>
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
                  <label htmlFor="email">Email</label>
                </div>
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
                  <a href="password-reset.html"> ¿Olvidaste la Contraseña?</a>
                </div>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-12">
                    <button type="submit" className="form-control">14!</button>
                  </div>
                  <div className="col-lg-5 col-12">
                    <NavLink className="btn custom-btn custom-border-btn" to="/register" end>
                      Registrate
                    </NavLink>
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

export default LoginForm;
