import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const CrearPlayer = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">

          <form class="custom-form" role="form" method="post">
                <h2 class="hero-title text-center mb-4 pb-2">Crear Jugador</h2>

                <div class="form-floating mt-4">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    pattern="[0-9a-zA-Z]{4,10}"
                    class="form-control"
                    placeholder="name"
                    required=""
                  />

                  <label for="name"> Nombre</label>
                </div>
                <div class="form-floating mt-4">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    pattern="[0-9a-zA-Z]{4,10}"
                    class="form-control"
                    placeholder="name"
                    required=""
                  />

                  <label for="pais"> Pais</label>
                </div>
                <div class="row">
                  <div class="col-lg-5 col-12 mx-auto">
                    <button type="submit" class="form-control">Guardar</button>
                  </div>
                </div> 

                <div class="form-floating">
                  <input
                    type="image"
                    name="image"
                    id="image"
                    pattern="[0-9a-zA-Z]{4,10}"
                    class="form-control"
                    placeholder="image"
                    required="" 
                  />

                  <label for="confirm_password">Cargar Imagen</label>
                </div>
            

                <div class="row">
                  <div class="col-lg-5 col-12 mx-auto">
                    <button type="submit" class="form-control">Enviar</button>
                  </div>
                </div>   
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrearPlayer;