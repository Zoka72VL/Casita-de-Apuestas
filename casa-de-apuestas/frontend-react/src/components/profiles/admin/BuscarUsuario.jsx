import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const BuscarUsuario = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">

          <form class="custom-form login-form" role="form" method="post">
                <h2 class="hero-title text-center mb-4 pb-2">Buscar Usuario</h2>

                <div class="form-floating mb-4 p-0">
                  <input
                    type="email"
                    name="email"
                    id="emailUser"
                    pattern="[^ @]*@[^ @]*"
                    class="form-control"
                    placeholder="Email address"
                    required=""
                  />

                  <label for="email">Ingre el email del Usuario</label>
                </div>

                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-5 col-12">
                    <button type="submit" onclick="buscarUsuario()" id="buscarUsuarioBtn" class="form-control">Buscar</button>
                  </div>
                </div>

                  
                  {/* {<!-- Contenedor para mostrar el resultado del usuario -->} */}
                  <div id="resultadoUsuario" class="mt-4 text-center"></div>
                  

               
              </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BuscarUsuario;