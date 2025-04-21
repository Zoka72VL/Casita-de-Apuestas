import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const LoginForm = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <form
              id="loginForm"
              className="custom-form"
              role="form"
              method="post"
            >
              <h2 className="hero-title text-center mb-4 pb-2">
                Iniciar Sesión
              </h2>
              <div className="form-floating mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-5 mb-2">
                  <button
                    type="submit"
                    className="form-control btn btn-primary w-100"
                  >
                    Iniciar Sesión
                  </button>
                </div>
                <div className="col-12 col-md-7 text-center">
                  <NavLink
                    className="btn custom-btn custom-border-btn w-100"
                    to="/register"
                    end
                  >
                    ¿No tenés cuenta?
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
