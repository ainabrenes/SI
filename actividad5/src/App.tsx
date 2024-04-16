import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Instrumentos from "./views/Instrumentos"; // Importa tu componente Instrumentos
import Tiendas from "./views/Instrumentos";

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        
        <Route path="/Instrumentos" element={<Tiendas />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
