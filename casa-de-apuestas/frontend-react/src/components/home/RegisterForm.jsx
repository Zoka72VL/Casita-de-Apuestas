import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const RegisterForm = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <form
              id="registerForm"
              className="custom-form"
              role="form"
              method="post"
            >
              <h2 className="hero-title text-center mb-4 pb-2">
                Crea tu Usuario
              </h2>
              <div className="row">
                <div className="col-md-6 col-12 mb-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                    <label htmlFor="full-name">Nick de AOE2insights</label>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="emailregister"
                      id="emailregister"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="emailregister">Email</label>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="form-floating">
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
                  <div className="form-check my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Acepto los términos de servicio y la política de
                      privacidad.
                    </label>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-5 mb-2">
                  <button
                    type="submit"
                    className="form-control btn btn-success w-100"
                  >
                    Registrarse
                  </button>
                </div>
                <div className="col-12 col-md-7 text-center">
                  <NavLink
                    className="btn custom-btn custom-border-btn w-100"
                    to="/login"
                    end
                  >
                    ¿Ya tenés cuenta?
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

export default RegisterForm;
