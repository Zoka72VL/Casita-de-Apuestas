import { NavLink } from "react-router";

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
                        <NavLink to="/home/login" end>
                            Login
                        </NavLink>
                        <NavLink to="/home/register" end>
                            Register
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
        );
    };
            
export default SidebarMenu;