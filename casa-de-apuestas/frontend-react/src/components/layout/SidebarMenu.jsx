import { NavLink, Outlet } from "react-router";

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
                    <nav className="offcanvas-body d-flex flex-column align-items-start">
                        <NavLink to="/login" end>
                            Login
                        </NavLink>
                        <NavLink to="/register" end>
                            Registro
                        </NavLink>
                        <NavLink to="/events" end>
                            Eventos Disponibles
                        </NavLink>
                        <NavLink to="/counter" end>
                            Ir al contador
                        </NavLink>
                    </nav>
                </div>
            </div>
            <Outlet/>
        </>
        );
    };
            
export default SidebarMenu;