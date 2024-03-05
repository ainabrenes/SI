import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Inicio from './views/Inicio';
import Interes from './views/Interes';
import Hoteles from './views/Hoteles';
import Actividades from './views/Actividades';
import Restaurantes from './views/Restaurantes';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



function App() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/interes">PUNTOS DE INTERES</Navbar.Brand>
        <br></br>
        <Navbar.Brand href="/restaurantes">RESTAURANTES</Navbar.Brand>
        <br></br>
        <Navbar.Brand href="/hoteles">HOTELES</Navbar.Brand>
        <br></br>
        <Navbar.Brand href="/actividades">ACTIVIDADES</Navbar.Brand>
        
      </Container>
      
    <BrowserRouter>
    
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/interes" element={<Interes />} />
        <Route path="/restaurantes" element={<Restaurantes/>}/>
        <Route path="/hoteles" element={<Hoteles/>}/>
        <Route path="/actividades" element={<Actividades/>}/>
      </Routes>
    </BrowserRouter>
    </Navbar>
  );
}

export default App;