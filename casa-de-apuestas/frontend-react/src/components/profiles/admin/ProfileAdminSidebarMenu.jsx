
const ProfileAdminSidebarMenu =() => {
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
                        <a href="login.html">Crear Evento</a>
                    </li>
                {/* <NavLink to="/home/login" end>
                            Login
                </NavLink> */}
                <li>
                    <a href="register.html">Finalizar Evento</a>
                    </li>
                    
                    <li>
                    <a href="password-reset.html">Administrar Lco</a>
                    </li>
                    
                    <li>
                    <a href="eventosCargados.html">Eliminar Usuario</a>
                    </li>
                    <li>
                    <a href="eventosCargados.html">Cerrar Sesion</a>
                    </li>
                                       
                      <li>
                          <a href="login.html">Crear Evento</a>
                      </li>
                  {/* <NavLink to="/home/login" end>
                              Login
                  </NavLink> */}
  
                    <li>
                      <a href="register.html">Finalizar Evento</a>
                      </li>
                      
                      <li>
                      <a href="password-reset.html">Administrar Lco</a>
                      </li>

                      <li>
                      <a href="eventosCargados.html">Ver Billetera</a>
                      </li>
                      
                      <li>
                      <a href="eventosCargados.html">Eliminar Usuario</a>
                      </li>

                      <li>
                      <a href="eventosCargados.html">Crear Trivia</a>
                      </li>

                      <li>
                      <a href="eventosCargados.html">Cerrar Sesion</a>
                      </li>

                      </ul>
                                          
                    </nav>
                    </div>
                </div>
      
    </>
  );
}

export default ProfileAdminSidebarMenu;