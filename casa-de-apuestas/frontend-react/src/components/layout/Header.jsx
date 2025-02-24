const Header = () => {
  return (
    <>
    
  
    <header className="site-header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12 col-12 d-flex align-items-center">
            <a
              className="site-header-text d-flex justify-content-center align-items-center me-auto"
              href="index.html"
            >
              <i className="bi-coin"></i>

              <span>Casita de Apuestas</span>
            </a>

            <ul className="social-icon d-flex justify-content-center align-items-center mx-auto">
              <span>
                <a href="login.html">
                  <span> Login </span>
                </a>
              </span>

              <li className="social-icon-item">
                <a
                  href="https://instagram.com/locoser_aoe/?hl=es"
                  target="blank"
                  className="social-icon-link bi-instagram"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://discord.gg/h8Dyrkb"
                  target="blank"
                  className="social-icon-link bi-discord"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://www.youtube.com/@LocoSer"
                  target="blank"
                  className="social-icon-link bi-youtube"
                ></a>
              </li>
              <li className="social-icon-item">
                <a
                  href="https://x.com/LocoSerAoE?s=08"
                  target="blank"
                  className="social-icon-link bi-twitter"
                ></a>
              </li>
              <li className="social-icon-item">
                <div className="iconoKick">
                  <a href="https://kick.com/locoser" target="blank">
                    Seguinos en
                    <img src="./images/KICK ICON.jpg" />
                  </a>
                </div>
              </li>
            </ul>

            <div>
              <a
                href="#"
                className="custom-btn custom-border-btn btn"
                data-bs-toggle="modal"
                data-bs-target="#subscribeModal"
              >
                Alertas
                <i className="bi-arrow-right ms-2"></i>
              </a>
            </div>

            <a
              className="bi-list offcanvas-icon"
              data-bs-toggle="offcanvas"
              href="#offcanvasMenu"
              role="button"
              aria-controls="offcanvasMenu"
            ></a>
          </div>
        </div>
      </div>
    </header>
    <div
    className="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabIndex="-1"
    id="offcanvasMenu"
    aria-labelledby="offcanvasMenuLabel"
  >
    <div className="offcanvas-header">
      <button
        type="button"
        className="btn-close ms-auto"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div
      className="offcanvas-body d-flex flex-column justify-content-center align-items-center"
    >
      <nav>
        <ul>
          <li>
            <a href="login.html">Login</a>
          </li>

          <li>
            <a href="register.html">Crea tu Usuario</a>
          </li>

          <li>
            <a href="password-reset.html">Restablecer Password</a>
          </li>

          <li>
            <a href="eventosCargados.html">Eventos disponibles</a>
          </li>

          <li>
            <a href="contact.html">Contact Form</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  </>
  );
};
export default Header;
