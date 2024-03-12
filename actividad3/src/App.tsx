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
import { Link } from 'fs';



function App() {
  return (
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/inicio">INDEX</Navbar.Brand>
        <br></br>
        <Navbar.Brand as={Link} to="/interes">PUNTOS DE INTERES</Navbar.Brand>
        <br></br>
        <Navbar.Brand href="/restaurantes">RESTAURANTES</Navbar.Brand>
        <br></br>
        <Navbar.Brand href="/hoteles">HOTELES</Navbar.Brand>
        <br></br>
        <Navbar.Brand href="/actividades">ACTIVIDADES</Navbar.Brand>
        
      </Container>
      </Navbar>
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/interes" element={<Interes />} />
        <Route path="/restaurantes" element={<Restaurantes/>}/>
        <Route path="/hoteles" element={<Hoteles/>}/>
        <Route path="/actividades" element={<Actividades/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;