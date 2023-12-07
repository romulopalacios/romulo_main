import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Biblioteca from './components/biblioteca';
import MisProyectos from './components/misproyectos';
import Perfil from './components/perfil';
import Proyecto from './components/proyecto';
import Upload from './components/upload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/mis-proyectos" element={<MisProyectos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/proyecto" element={<Proyecto />} /> {/* Suponiendo que /proyecto/:id es una ruta dinámica */}
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
