// import SidebarMenu from "./SidebarMenu";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12 col-12 d-flex align-items-center">
              <a className="site-header-text d-flex justify-content-center align-items-center me-auto">
                <NavLink to="/" className="home-icon">
                  <i className="bi bi-coin"></i>
                </NavLink>
                <nav>
                  <NavLink to="/" end>
                    Casita de Apuestas
                  </NavLink>
                </nav>
              </a>

              <div className="d-flex align-items-center mx-auto">
                {/* Login y Kick (visibles siempre) */}
                <div className="me-3">
                  <NavLink to="/login" end>
                    Login
                  </NavLink>
                </div>
                <div className="me-3 iconoKick">
                  <a
                    href="https://kick.com/locoser"
                    target="blank"
                    className="d-flex align-items-center"
                  >
                    Seguinos en
                    <img
                      src="Image/KICK ICON.jpg"
                      alt="Kick"
                      style={{ width: "20px", marginLeft: "5px" }}
                    />
                  </a>
                </div>

                {/* Redes sociales: solo visibles desde md en adelante */}
                <ul className="social-icon d-none d-md-flex justify-content-center align-items-center mb-0">
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
                </ul>
              </div>

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
      {/* <SidebarMenu /> */}
    </>
  );
};

export default Header;
