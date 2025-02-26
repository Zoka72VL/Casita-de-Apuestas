import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AdminPage from "./pages/AdminPage.jsx";
import CasterPage from "./pages/CasterPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";


// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
import "./css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./css/tooplate-kool-form-pack.css";

import { BrowserRouter, Route, Routes } from "react-router";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/caster" element={<CasterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
