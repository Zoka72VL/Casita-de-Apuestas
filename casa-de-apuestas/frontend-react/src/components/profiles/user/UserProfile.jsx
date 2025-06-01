import React from "react";
import { NavLink } from "react-router";


const UserProfile = () => {
  return (
    <section className="contentHome" id="contentUser">
      <div className="container container-custom">
        <div className="row frente row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <form className="custom-form text-center" role="form">
              <img
                src="Image/Perfil zoka.jpg"
                alt="Perfil"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />

              <h2 className="hero-title mb-4">Zoka.lp</h2>

              <h3 className="hero-title mb-3">Cantidad de Lco</h3>

              <div className="d-flex justify-content-center align-items-center mb-4">
                <img
                  src="Image/LCO_COIN_REOK.png"
                  alt="Moneda LCO"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    border: "none",
                  }}
                />

                <h4
                  className="mb-0"
                  style={{
                    color: "gold",
                    border: "double 5px",
                    marginLeft: "20px",
                    padding: "5px",
                  }}
                >
                  500
                </h4>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <NavLink
                    className="btn custom-btn custom-border-btn w-100"
                    to="/modificarperfil"
                    end
                  >
                    Modificar Perfil
                  </NavLink>

                </div>
                  <div className="col-md-6 mb-2">
                  <NavLink
                    className="btn custom-btn custom-border-btn w-100"
                    to="/eventos"
                    end
                  >
                    Ir a los eventos
                  </NavLink>

                </div>
              </div>

              <button type="submit" className="form-control btn w-100">
                Historial de Apuestas
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
