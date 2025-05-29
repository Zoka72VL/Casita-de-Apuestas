import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";
import "./css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/tooplate-kool-form-pack.css";

import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CasterPage from "./pages/CasterPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import LoginForm from "./components/home/LoginForm.jsx";
import RegisterForm from "./components/home/RegisterForm";
import Events from "./components/home/Events.jsx";
import Counter from "./components/home/Counter.jsx";
import App from "./App.jsx";
import { FinderFruit } from "./components/home/FinderFruit.jsx";
import CrearEvento from "./components/profiles/admin/CrearEvento.jsx";
import UserProfile from "./components/profiles/user/UserProfile.jsx";
import ResponderTrivia from "./components/profiles/admin/ResponderTrivia.jsx";
import CrearTrivia from "./components/profiles/admin/CrearTrivia.jsx";
import BuscarUsuario from "./components/profiles/admin/BuscarUsuario.jsx";
import RestablecerPassword from "./components/profiles/admin/RestablecerPassword.jsx";
import Eventos from "./components/profiles/admin/Eventos.jsx";
import Dashboar from "./components/profiles/admin/Dashboar.jsx";
import AbmT from "./components/profiles/admin/AbmT.jsx";
import DashboarUsuario from "./components/profiles/admin/DashboarUsuario.jsx";

const PrivateAdminPage = AdminPage;
const PrivateCasterPage = CasterPage;
const PrivateUserPage = UserPage;
// const PrivateContactPage = withLoggedIn(ContactPage);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="events" element={<Events />} />
          <Route path="counter" element={<Counter />} />
          <Route path="fruit" element={<FinderFruit />} />
          <Route path="crearevento" element={<CrearEvento />} />
          <Route path="miperfil" element={<UserProfile />} />
          <Route path="respondertrivia" element={<ResponderTrivia />} />
          <Route path="creartrivia" element={<CrearTrivia />} />
          <Route path="buscarusuario" element={<BuscarUsuario />} />
          <Route path="restablecerpassword" element={<RestablecerPassword />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="crearevento" element={<CrearEvento />} />
          <Route path="dashboar" element={<Dashboar />} />
          <Route path="abmt" element={<AbmT/>} />
          <Route path="dashboarusuario" element={<DashboarUsuario/>} />


        </Route>

        <Route path="admin" element={<AdminPage />}>
          <Route
            index
            element={
              <React.Suspense fallback={<div>Cargando...</div>}>
                <PrivateAdminPage />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="caster" element={<CasterPage />}>
          <Route
            index
            element={
              <React.Suspense fallback={<div>Cargando...</div>}>
                <PrivateCasterPage />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="user" element={<UserPage />}>
          <Route
            index
            element={
              <React.Suspense fallback={<div>Cargando...</div>}>
                <PrivateUserPage />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
