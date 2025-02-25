import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import HomePage from "./pages/HomePage.jsx";
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
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
