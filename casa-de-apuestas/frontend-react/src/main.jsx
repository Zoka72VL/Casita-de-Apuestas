import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CasterPage from "./pages/CasterPage.jsx";
import UserPage from "./pages/UserPage.jsx";


// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
import "./css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./css/tooplate-kool-form-pack.css";

import { BrowserRouter, Route, Routes } from "react-router";

const PrivateAdminPage = (AdminPage);
const PrivateCasterPage = (CasterPage);
const PrivateUserPage = (UserPage);
// const PrivateContactPage = withLoggedIn(ContactPage);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<AdminPage />}>
          <Route index path="/admin" element={
                  <React.Suspense fallback={<div>Cargando...</div>}>
                    <PrivateAdminPage />
                  </React.Suspense>
                } />
        </Route>
        <Route path="/" element={<CasterPage />}>
          <Route index path="/caster" element={
                  <React.Suspense fallback={<div>Cargando...</div>}>
                    <PrivateCasterPage />
                  </React.Suspense>
                } />
        </Route>
        <Route path="/" element={<UserPage />}>
          <Route index path="/user" element={
                  <React.Suspense fallback={<div>Cargando...</div>}>
                    <PrivateUserPage />
                  </React.Suspense>
                } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
