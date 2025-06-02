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
                    marginRight: "10px",
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
                    marginLeft: "10px",
                    padding: "15px",
                  }}
                >
                  500
                </h4>
              </div>

              <article className="menu-usuario buttons-wrapper">
                <NavLink
                  className="btn custom-btn custom-border-btn "
                  to="/modificarperfil"
                  end
                >
                  Modificar Perfil
                </NavLink>
                <NavLink
                  className="btn custom-btn custom-border-btn "
                  to="/eventos"
                  end
                >
                  Ir a los eventos
                </NavLink>
              </article>
              <article className="menu-usuario buttons-wrapper">
                <button
                  type=""
                  className=" btn-eliminar btn custom-btn custom-border-btn"
                >
                  Historial de Apuestas
                </button>
              </article>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
