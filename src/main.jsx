import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Pokemon from "./pages/Pokemon/Pokemon.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
