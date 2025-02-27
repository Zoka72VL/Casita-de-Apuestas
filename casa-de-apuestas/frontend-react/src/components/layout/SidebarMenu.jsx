const SidebarMenu = () => {
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
            
export default SidebarMenu;