import React from "react";
import perfilImg from "../../../../public/Image/Perfil zoka.jpg";
import lcoImg from "../../../../public/Image/LCO_Coin_Final.png";

const UserProfile = () => {
  return (
    <section className="contentHome" id="contentUser">
      <div className="container container-custom">
        <div className="row frente row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <form className="custom-form text-center" role="form">
              <img
                src={perfilImg}
                alt="Perfil"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />

              <h2 className="hero-title mb-4">Zoka.lp</h2>

              <h3 className="hero-title mb-3">Cantidad de Lco</h3>

              <div className="d-flex justify-content-center align-items-center mb-4">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: "50%",
                    display: "inline-block",
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    src={lcoImg}
                    alt="Moneda LCO"
                    style={{
                      width: "100%",
                      height: "102%",
                      objectFit: "cover",
                      objectPosition: "72% center", // mueve un poquito a la derecha
                    }}
                  />
                </div>

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
                  <button
                    type="submit"
                    className="form-control btn btn-primary w-100"
                  >
                    Modificar Perfil
                  </button>
                </div>
                <div className="col-md-6 mb-2">
                  <button
                    type="submit"
                    className="form-control btn btn-primary w-100"
                  >
                    Ir a los Eventos
                  </button>
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
