import React from 'react';
import './menu.css';

function Menu() {
  return (
    <header className="header">
      <div className="logo">Felipe Zapata</div>
      <nav>
        <ul className="nav-list">
          <li><a href="#inicio-section" className="nav-link"><strong>Inicio</strong></a></li>
          <li><a href="#mis-proyectos-section" className="nav-link"><strong>Portafolio</strong></a></li>
          <li><a href="#quien-soy-section" className="nav-link"><strong>¿Quién Soy?</strong></a></li>
          <li><a href="#habilidades-section" className="nav-link"><strong>Habilidades</strong></a></li>
          <li><a href="#testimonios-section" className="nav-link"><strong>Testimonios</strong></a></li>
          <li><a href="#contacto-section" className="nav-link"><strong>Contacto</strong></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;