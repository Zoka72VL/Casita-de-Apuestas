import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const Eventos = () => {
  return (
              <section className="hero-section d-flex justify-content-center align-items-center">
        <div className="container">
        <div className="row-frente">
          <h3 className="text-white text-center mt-2 mb-4 pb-2 fs-1 fs-sm-3">
            Eventos Para Apostar
          </h3>
      
          <div className="row frente">
            <div className="col-lg-6 col-12 mx-auto">
              <h2 className="text-white text-center mt-2 mb-4 fs-1 fs-sm-3">
                Nombre del Evento
              </h2>
      
              <form id="registerForm" className="custom-form" method="post">
               
                <div className="row justify-content-center align-items-center mb-4 text-center">
                  <button type="sudmit"className="btn btn-success btnJugadorAzul ">
                    Nombre del Jugador COLOR AZUL
                    </button>
      
                
                    <button type="sudmit"className="btn btn-success btnJugadorRojo">
                    Nombre del Jugador COLOR ROJO
                     </button>
                </div>
      
              
                <div className="row mb-4 text-white text-center">
                  <div className="col-6">
                    <h3>LCO APOSTADAS: 150</h3>
                    <p>Porcentaje: 60%</p>
                  </div>
                  <div className="col-6">
                    <h3>LCO APOSTADAS: 100</h3>
                    <p>Porcentaje: 40%</p>
                  </div>
                </div>
      
             
                <div className="form-floating mb-4">
                  <input
                    type="number"
                    name="lco"
                    id="lco"
                    className="form-control"
                    placeholder="Cantidad de LCO"
                    min="1"
                    required
                  />
                  <label htmlFor="lco">Ingresa la cantidad de LCO</label>
                </div>
      
            <div className="row justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center mb-3">
                  <div className="col-12 d-grid gap-2">
                    <button type="submit" className="btn btn-success">Apostar</button>
                  </div>
                  <div className="col-12 d-grid gap-2">
                        <div className="row justify-content-center align-items-center mb-3">
                            <button type="submit" className="btn btn-success">Pagar Apuesta</button>
                            <button type="button" className="btn btn-warning">Modificar Evento</button>
                            <button type="button" className="btn btn-danger">Eliminar Evento</button>
                        </div>
                  </div>
                        
                </div>
                  <div className="col-12 col-md-7 text-center">
                      <NavLink
                          className="btn custom-btn custom-border-btn w-100"
                          to="/"
                          end
                  >
                    Home
                  </NavLink>
                  </div>
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