import { NavLink } from "react-router";
import { useRef, useState } from "react";

const SidebarMenu = () => {
  const offcanvasMenuRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    const offcanvas = new window.bootstrap.Offcanvas(offcanvasMenuRef.current);
    offcanvas.hide();
  };

  const handleTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleNavClick = () => {
    closeMenu(); // Cierra con animación
  };

  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${
          isClosing ? "offcanvas-close" : ""
        }`}
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
        <div className="offcanvas-body d-flex flex-column justify-content-start align-items-center">
          <nav className="d-flex flex-column align-items-start w-100 px-4">
            <NavLink to="/login" end onClick={handleNavClick}>
              Login
            </NavLink>
            <NavLink to="/register" end onClick={handleNavClick}>
              Registro
            </NavLink>
            <NavLink to="/events" end onClick={handleNavClick}>
              Eventos Disponibles
            </NavLink>
            <NavLink to="/counter" end onClick={handleNavClick}>
              Ir al contador
            </NavLink>
            <NavLink to="/" end onClick={handleNavClick}>
              Cerrar Sesión
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
