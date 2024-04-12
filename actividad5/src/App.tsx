import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Instrumentos from "./views/Elementos"; // Importa tu componente Instrumentos

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        
        <Route path="./views/Elementos" element={<Instrumentos />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
