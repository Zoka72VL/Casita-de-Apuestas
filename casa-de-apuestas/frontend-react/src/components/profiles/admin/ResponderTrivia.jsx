import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";

const ResponderTrivia = () => {
  return (
    <section className="contentHome" id="contentHome">
      <div className="container container-custom">
        <div className="row frente">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
          
              <form className="custom-form login-form" role="form" method="post">
                    <h2 className="hero-title text-center mb-4 pb-2">Trivia</h2>
{/* aca tenememos q trabajrllo, xq tiene que aparecer la pregunta que se genera en CrearTrivia */}
                    <h3 className="hero-title text-center mb-4 pb-2">¿Pregunta, aca esta la pregunta?</h3>
                    <div className="col-lg-12 col-12">
                        <div className="form-floating p-0">
                            <input
                                type="text"
                                name="triviaRespuesta"
                                id="triviaRespuesta"
                                className="form-control"
                                placeholder="TriviaRespuesta"
                                required="true"
                                />

                            <label for="triviaRespuesta">Ingresa tu respuesta</label>

                            <button type="submit" className="form-control">Enviar Respuesta</button>
                        </div>
                    </div>
                
                </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponderTrivia;