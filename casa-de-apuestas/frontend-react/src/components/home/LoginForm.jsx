import { NavLink } from "react-router";

const LoginForm = () => {
    return (
        <>
            
              <div className="container">
                <div className="row frente">
                  <div className="col-lg-5 col-12 mx-auto">
                    <form className="custom-form login-form" role="form" method="post">
                      <h2 className="hero-title text-center mb-4 pb-2">Ingresa</h2>
                      <div className="form-floating mb-4 p-0">
                        <input
                          type="email"
                          name="email"
                          id="emailUser"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required=""
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
                          required=""
                        />
                        <label htmlFor="password">Contraseña</label>
                      </div>
                        <div className="form-check mb-4">
                          <a href="password-reset.html" > ¿Olvidaste la Contraseña?</a>
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
                  </form>
                </div>
              </div>
            </div>
          
        </>
    );
}

export default LoginForm;