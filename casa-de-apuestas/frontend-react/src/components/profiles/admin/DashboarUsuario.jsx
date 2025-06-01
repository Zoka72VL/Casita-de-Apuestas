import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DashboarUsuario = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <div className="row justify-content-center align-items-center">

              <div className="col-12 col-md-7 text-center mb-3">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/eventos"
                >
                  BUSCAR EVENTOS
                </NavLink>
              </div>

              <div className="col-12 col-md-7 text-center mb-3">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/respondertrivia"
                >
                  CONTESTAR TRIVIA
                </NavLink>
              </div>
                           <div className="col-12 col-md-7 text-center mb-3">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/miperfil"
                >
                  MI PERFIL
                </NavLink>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboarUsuario;  