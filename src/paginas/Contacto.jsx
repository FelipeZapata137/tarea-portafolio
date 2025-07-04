import React from 'react';
import { Link } from 'react-router-dom';
import mailImage from "../assets/mail.svg";
import facebookLogo from '../assets/facebook-logo.png';
import xLogo from '../assets/x-logo.jpg';
import instagramLogo from '../assets/instagram-logo.png';

function Contacto() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1>Contáctame</h1>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <img src={facebookLogo} alt="Logo de Facebook" className="social-icon-img" />
            </div>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <img src={xLogo} alt="Logo de X (Twitter)" className="social-icon-img" />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <img src={instagramLogo} alt="Logo de Instagram" className="social-icon-img" />
            </div>
          </a>
        </div>
        <div className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/quien-soy">Sobre mí</Link>
          <Link to="/portafolio">Proyectos</Link>
        </div>
        <p>Derechos reservados © Felipe Zapata</p>
      </div>
      <div className="footer-right">
        <img src={mailImage} alt="Ilustración de correo" className="mail-illustration" />
      </div>
    </footer>
  );
}

export default Contacto;