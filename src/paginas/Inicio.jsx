import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Bienvenido a mi Portafolio Online</h1>
        <Link
          to="/portafolio"
          className='portafolio-button'
        >
          Ver Proyectos
        </Link>
      </div>
    </div>
  );
}

export default Inicio;