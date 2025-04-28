import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const CrearTrivia = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
          <form class="custom-form login-form" role="form" method="post">
                <h2 class="hero-title text-center mb-4 pb-2">Crea tu Trivia</h2>



                    <div className="form-floating mb-4 p-0">
                    <input
                        type="text"
                        name="triviaPregunta"
                        id="triviaPregunta"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Pregunta Trivia"
                        required=""
                    />
                    <label for="trivia">Pregunta</label>
                    </div>

                    <div className="form-floating mb-4 p-0">
                    <input
                        type="text"
                        name="triviaRespuesta"
                        id="triviaRespuesta"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Respuesta Trivia"  
                        required=""
                    />
                     <label for="triviaRespuesta">Respuesta</label>
                    </div>
                    <div className="form-floating mb-4 p-0">
                        <input
                        type="number"
                        name="triviaPrice"
                        id="triviaPrice"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Pregunta Price"
                        required=""
                        />
                        <label for="trivia">cantidad de LCO</label>
                    </div>


                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-12">
                        <button type="submit" className="form-control">Crear</button>
                    </div>





                    </div>
              </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CrearTrivia;