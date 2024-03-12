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
import { Link } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">INDEX</Navbar.Brand>
        <br></br>
        <Nav.Link as={Link} to="/interes">PUNTOS DE INTERES</Nav.Link>
        <br></br>
        <Nav.Link as={Link} to="/restaurantes">RESTAURANTES</Nav.Link>
        <br></br>
        <Nav.Link as={Link} to="/hoteles">HOTELES</Nav.Link>
        <br></br>
        <Nav.Link as={Link} to="/actividades">ACTIVIDADES</Nav.Link>
        
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