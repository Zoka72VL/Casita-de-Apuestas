const CrearEvento = () => {
    return (
        // <div className="container">
<section className="contentHome" id="contentHome">
  <div className="container container-custom">
    <div className="row frente">
      <div className="col-lg-6 col-12 mx-auto">
        <form id="registerForm" className="custom-form" role="form" method="post">
          <h2 className="hero-title text-center mb-4 pb-2">Crear Evento</h2>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="form-floating text-center">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="floatingInput">Nombre de Evento</label>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-floating mb-4">
                <input
                  type="email"
                  name="email"
                  id="emailReg"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Email address"
                  required
                />
                <label htmlFor="email">Player Azul</label>
              </div>
            </div>

           <div className="col-12 text-center"> 
              <h2 className="hero-title mb-4 pb-22">VS</h2>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-floating mb-4">
                <input
                  type="email"
                  name="email"
                  id="emailReg"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Email address"
                  required
                />
                <label htmlFor="email">Player Rojo</label>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-floating">
                <input
                  type="text"
                  name="start-date"
                  id="start-date"
                  className="form-control"
                  placeholder="Start Date"
                  required
                />
                <label htmlFor="start-date">Inicia</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-floating">
                <input
                  type="text"
                  name="end-date"
                  id="end-date"
                  className="form-control"
                  placeholder="End Date"
                  required
                />
                <label htmlFor="end-date">Finaliza</label>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center mt-4">
            <div className="col-lg-5 col-md-5 col-5">
              <button type="submit" className="form-control">Confirmar Evento</button>
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
