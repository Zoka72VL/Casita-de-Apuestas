import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const CrearEvento = () => {
    return (
        <div className="container">
        <div className="row frente">
          <div className="col-lg-6 col-12 mx-auto">
            <form id="registerForm" className="custom-form" role="form" method="post">
              <h2 className="hero-title text-center mb-4 pb-2">
                Crear Evento
              </h2>



              
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
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
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating mb-4 p-0">
                    <input
                      type="email"
                      name="email"
                      id="emailReg"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email address"
                      required="true"
                    />

                    <label for="email">Player Azul </label>
                  </div>
                </div>

                <h2 className="hero-title text-center mb-4 pb-2">
                  VS
                </h2>
                                     
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating mb-4 p-0">
                    <input
                      type="email"
                      name="email"
                      id="emailReg"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email address"
                      required="true"
                    />

                    <label for="email">Player Rojo </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        className="form-control"
                        placeholder="Full Name"
                        required="true"
                      />



                      <label for="floatingInput"> Inicia</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          className="form-control"
                          placeholder="Full Name"
                          required="true"
                        />
  
                        <label for="floatingInput"> Finaliza</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-md-5 col-5 ms-auto">
                    <button type="submit" className="form-control">Confirmar Evento</button>
                  </div>


                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
 
    );
  };



export default CrearEvento;
