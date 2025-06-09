import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const CrearEvento = () => {
    return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
          <form class="custom-form login-form" role="form" method="post">
                             <h2 className="hero-title text-center mb-4 pb-2">
                                   Crear Evento
                             </h2>



              
                        <div className="row">
                             <div className="col-12">
                                   <div className="form-floating">
                                  <input
                                  type="text"
                                  name="full-name"
                                  id="full-name"
                                  className="form-control"
                                  placeholder="Full Name"
                                  required="true"
                                />
                                       <label for="floatingInput"> Nombre de Evento</label>
                               </div>
                          </div>


                            <div className="row align-items-center mb-4">
  <div className="col-5">
    <div className="form-floating">
      <input
        type="text"
        name="playerAzul"
        id="playerAzul"
        className="form-control"
        placeholder="Nombre jugador azul"
        required
      />
      <label htmlFor="playerAzul">Player Azul</label>
    </div>
  </div>
  <div className="col-2 text-center">
    <h2 className="hero-title mb-0">VS</h2>
  </div>
  <div className="col-5">
    <div className="form-floating">
      <input
        type="text"
        name="playerRojo"
        id="playerRojo"
        className="form-control"
        placeholder="Nombre jugador rojo"
        required
      />
      <label htmlFor="playerRojo">Player Rojo</label>
    </div>
  </div>
</div>                  
              <div className="col-12 col-md-7 text-center mb-3">
                <NavLink
                  className="custom-btn btn mt-4 w-100"
                  to="/crearplayer"
                >
                  Crear Jugador
                </NavLink>
              </div>
              

                              <div className="row mb-4">
                                <div className="col-6">
                                  <div className="form-floating">
                                    <input
                                      type="datetime-local"
                                      name="inicio"
                                      id="inicio"
                                      className="form-control"
                                      placeholder="Inicia"
                                      required
                                    />
                                    <label htmlFor="inicio">Inicia</label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-floating">
                                    <input
                                      type="datetime-local"
                                      name="finaliza"
                                      id="finaliza"
                                      className="form-control"
                                      placeholder="Finaliza"
                                      required
                                    />
                                    <label htmlFor="finaliza">Finaliza</label>
                                  </div>
                                </div>
                              </div>

                <div className="row justify-content-center align-items-center">
                  <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary w-100 ">Confirmar Evento</button>
                  </div>


                </div>
                       </div>
          </form>

          </div>
        </div>
      </div>
    </section>
    );
  };



export default CrearEvento;
