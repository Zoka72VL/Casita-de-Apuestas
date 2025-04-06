import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
import "./css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./css/tooplate-kool-form-pack.css";

import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CasterPage from "./pages/CasterPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import LoginForm from "./components/home/LoginForm.jsx";
import RegisterForm from './components/home/RegisterForm';
import Events from "./components/home/Events.jsx";
import Counter from "./components/home/Counter.jsx";
import App from "./App.jsx";
import Content from "./components/layout/Content.jsx";
import { FinderFruit } from "./components/home/FinderFruit.jsx";
import CrearEvento from "./components/profiles/admin/CrearEvento.jsx";



const PrivateAdminPage = (AdminPage);
const PrivateCasterPage = (CasterPage);
const PrivateUserPage = (UserPage);
// const PrivateContactPage = withLoggedIn(ContactPage);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<App />} >
          <Route index element= {<><HomePage /><Content /></>} />        
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="events" element={<Events />} />
          <Route path="counter" element={<Counter />} />
          <Route path="fruit" element={<FinderFruit />} />
          <Route path="crearevento" element={<CrearEvento />} />
        </Route>

        <Route path="admin" element={<AdminPage />}>
          <Route index  element={
                  <React.Suspense fallback={<div>Cargando...</div>}>
                    <PrivateAdminPage />
                  </React.Suspense>
                } />
        </Route>
        <Route path="caster" element={<CasterPage />}>
          <Route index  element={
                  <React.Suspense fallback={<div>Cargando...</div>}>
                    <PrivateCasterPage />
                  </React.Suspense>
                } />
        </Route>
        <Route path="user" element={<UserPage />}>
          <Route index  element={
                  <React.Suspense fallback={<div>Cargando...</div>}>
                    <PrivateUserPage />
                  </React.Suspense>
                } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
