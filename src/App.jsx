import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/menu.jsx';
import Inicio from './paginas/Inicio.jsx';
import Portafolio from './paginas/Portafolio.jsx';
import QuienSoy from './paginas/QuienSoy.jsx';
import Habilidades from './paginas/Habilidades.jsx';
import Testimonios from './paginas/Testimonios.jsx';
import Contacto from './paginas/Contacto.jsx';
import NotFound from './paginas/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/quien-soy" element={<QuienSoy />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;