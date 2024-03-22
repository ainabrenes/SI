import React from 'react';
import logo from './logo.svg';
import './App.css';
import Breeds from './views/Breeds';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Razas from './views/Breeds';
import Esp from './views/Esp'; 
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Razas />} />
        <Route path="/razas/:id" element={<Esp />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
