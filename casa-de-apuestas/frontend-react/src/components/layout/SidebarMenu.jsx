import { NavLink } from "react-router";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const SidebarMenu = () => {
    const navigate = useNavigate();
    const offcanvasMenuRef = useRef(null);  // Referencia al menú offcanvas
    const [isClosing, setIsClosing] = useState(false); 
    // Función para cerrar el menú con animación
    const closeMenu = () => {
     // Activamos el estado de cierre y aplicamos la clase de animación
    setIsClosing(true);   
    // Función para cerrar el menú al hacer clic en un enlace
    const offcanvas = new window.bootstrap.Offcanvas(offcanvasMenuRef.current);
    offcanvas.hide();  
};
 
    const handleTransitionEnd = () => {
    setIsClosing(false);
    };

  const handleLinkClick = (e) => {
    closeMenu();  
    e.preventDefault(); 
    setTimeout(() => {
        navigate(e.target.href);
    }, 400);  
  };

    return ( 
        <>
            <div
                className={`offcanvas offcanvas-end ${isClosing ? 'offcanvas-close' : ''}`}
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasMenu"
                aria-labelledby="offcanvasMenuLabel"
                ref={offcanvasMenuRef}
                onTransitionEnd={handleTransitionEnd}
            >
                <div className="offcanvas-header">
                <button
                    type="button"
                    className="btn-close ms-auto"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={closeMenu}
                ></button>
                </div>
                <div
                    className="offcanvas-body d-flex flex-column justify-content-center align-items-center"
                >
                    <nav className="offcanvas-body d-flex flex-column align-items-start">
                        <NavLink to="/login" end onClick={handleLinkClick}>
                            Login
                        </NavLink>
                        <NavLink to="/register" end onClick={handleLinkClick}>
                            Registro
                        </NavLink>
                        <NavLink to="/events" end onClick={handleLinkClick}>
                            Eventos Disponibles
                        </NavLink>
                        <NavLink to="/counter" end onClick={handleLinkClick}>
                            Ir al contador
                        </NavLink>
                        <NavLink to="/counter" end onClick={handleLinkClick}>
                            Cerrar Secion
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
        );
    };
            
export default SidebarMenu;