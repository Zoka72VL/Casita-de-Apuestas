import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const Dashboar = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
          
<form className="custom-form login-form" role="form" method="post">
  <div className="col-lg-12 col-12 mb-3">
    <div className="form-floating p-0">
      <button type="submit" className="form-control">Panel Usuario</button>
    </div>
  </div>

  <div className="col-lg-12 col-12 mb-3">
    <div className="form-floating p-0">
      <button type="submit" className="form-control">Panel Administracion</button>
    </div>
  </div>

  <div className="col-lg-12 col-12">
    <div className="form-floating p-0">
      <button type="submit" className="form-control">Ingresar a La Casita</button>
    </div>
  </div>
</form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboar;