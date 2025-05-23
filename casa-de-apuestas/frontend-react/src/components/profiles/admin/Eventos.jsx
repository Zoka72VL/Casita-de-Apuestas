import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const Eventos = () => {
  return (
      <section class="hero-section d-flex justify-content-center align-items-center">
        <div class="container">
        <div class="row-frente">
          <h3 class="text-white text-center mt-2 mb-4 pb-2 fs-1 fs-sm-3">
            Eventos Para Apostar
          </h3>
      
          <div class="row frente">
            <div class="col-lg-6 col-12 mx-auto">
              <h2 class="text-white text-center mt-2 mb-4 fs-1 fs-sm-3">
                Nombre del Evento
              </h2>
      
              <form id="registerForm" class="custom-form" method="post">
               
                <div class="row justify-content-center align-items-center mb-4 text-center">
                  <input type="radio" class="btn-check" name="jugador" id="jugadorAzul" value="azul" required />
                 <label class="btnJugadorAzul">
                    Nombre del Jugador COLOR AZUL
                  </label>
      
                  <input type="radio" class="btn-check" name="jugador" id="jugadorRojo" value="rojo" required />
                  <label class="btnJugadorRojo">
                    Nombre del Jugador COLOR ROJO
                  </label>
                </div>
      
              
                <div class="row mb-4 text-white text-center">
                  <div class="col-6">
                    <h3>LCO APOSTADAS: 150</h3>
                    <p>Porcentaje: 60%</p>
                  </div>
                  <div class="col-6">
                    <h3>LCO APOSTADAS: 100</h3>
                    <p>Porcentaje: 40%</p>
                  </div>
                </div>
      
             
                <div class="form-floating mb-4">
                  <input
                    type="number"
                    name="lco"
                    id="lco"
                    class="form-control"
                    placeholder="Cantidad de LCO"
                    min="1"
                    required
                  />
                  <label for="lco">Ingresa la cantidad de LCO</label>
                </div>
      
            
                <div class="row justify-content-center align-items-center mb-3">
                  <div class="col-12 d-grid gap-2">
                    <button type="submit" class="btn btn-success">Apostar</button>
                  </div>
                <div class="row justify-content-center align-items-center mb-3">
                    <button type="submit" class="btn btn-success">Pagar Apuesta</button>
                    <button type="button" class="btn btn-warning">Modificar Evento</button>
                    <button type="button" class="btn btn-danger">Eliminar Evento</button>
                  </div>
                
                                    <a class="custom-btn btn mt-4" href="index.html">Volver al inicio</a>

                </div>
              </form>
            </div>
          </div>
        </div>

        
        </div>
      </section>
  );
};

export default Eventos;