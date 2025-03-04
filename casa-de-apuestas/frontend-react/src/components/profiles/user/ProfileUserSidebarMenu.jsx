
const ProfileUserSidebarMenu =() => {
    return (
      <>
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
                          <a href="login.html">Ver Eventos</a>
                      </li>
                      <li>
                          <a href="login.html">Modificar Perfil</a>
                      </li>
  
                     <li>
                      <a href="register.html">Apostar</a>
                      </li>
                      
                      <li>
                      <a href="password-reset.html">Ver Billetera</a>
                      </li>
                      <li>
                      <a href="eventosCargados.html">Comprar Raspadita</a>
                      </li>
                      <li>
                      <a href="eventosCargados.html">Contestar TRIVIA</a>
                      </li>
                      
                      <li>
                      <a href="eventosCargados.html">Restablecer Contraseña</a>
                      </li>
                      
                      <li>
                      <a href="contact.html">Cerrar Secion</a>
                      </li>
                      </ul>
                      </nav>
                      </div>
                  </div>
        
      </>
    );
  }
  
  export default ProfileUserSidebarMenu;