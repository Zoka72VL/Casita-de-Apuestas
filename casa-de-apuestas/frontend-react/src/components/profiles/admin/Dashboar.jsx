import { NavLink } from "react-router-dom";

const Dashboar = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-7 text-center mb-3">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/buscarusuario"
                >
                    Panel Roles
                </NavLink>
              </div>
              <div className="col-12 col-md-7 text-center mb-3">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/modificacioneventosytrivia"
                >
                  Panel De Eventos y Trivias
                </NavLink>
              </div>
                            <div className="col-12 col-md-7 text-center mb-3">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/abmplayer"
                >
                 Panel Jugadores
                </NavLink>
              </div>
              
              
              <div className="col-12 col-md-7 text-center">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/eventos"
                >
                  Ingresar a La Casita
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboar;