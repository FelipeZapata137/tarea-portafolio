import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css';

function Menu() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">Felipe Zapata</div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <strong>Inicio</strong>
            </Link>
          </li>
          <li>
            <Link 
              to="/portafolio" 
              className={`nav-link ${location.pathname === '/portafolio' ? 'active' : ''}`}
            >
              <strong>Portafolio</strong>
            </Link>
          </li>
          <li>
            <Link 
              to="/quien-soy" 
              className={`nav-link ${location.pathname === '/quien-soy' ? 'active' : ''}`}
            >
              <strong>¿Quién Soy?</strong>
            </Link>
          </li>
          <li>
            <Link 
              to="/habilidades" 
              className={`nav-link ${location.pathname === '/habilidades' ? 'active' : ''}`}
            >
              <strong>Habilidades</strong>
            </Link>
          </li>
          <li>
            <Link 
              to="/testimonios" 
              className={`nav-link ${location.pathname === '/testimonios' ? 'active' : ''}`}
            >
              <strong>Testimonios</strong>
            </Link>
          </li>
          <li>
            <Link 
              to="/contacto" 
              className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
            >
              <strong>Contacto</strong>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;