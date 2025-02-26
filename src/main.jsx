import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
{
  /*import App from "./App.jsx";*/
}
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/layouts/Header.jsx";
import Home from "./components/pages/Home.jsx";
import Catalogue from "./components/pages/Catalogue.jsx";
import App from "./App.jsx";
import Fashion from "./components/pages/Fashion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Fashion" element={<Fashion />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
