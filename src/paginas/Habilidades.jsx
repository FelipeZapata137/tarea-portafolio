import React from 'react';
import htmlLogo from '../assets/html-icon.png';
import cssLogo from '../assets/css-icon.png';
import jsLogo from '../assets/js-icon.png';
import reactLogo from '../assets/react-icon.png';

function Habilidades() {
  return (
    <section className="habilidades">
      <div className='habilidades-arriba'>
        <h2>Habilidades</h2>
      </div>
      <div className="habilidades-contenedor">
        <div className="habilidad-item">
          <img src={htmlLogo} alt="Logo de HTML5" className="habilidad-icono" />
        </div>
        <div className="habilidad-item">
          <img src={cssLogo} alt="Logo de CSS3" className="habilidad-icono" />
        </div>
        <div className="habilidad-item">
          <img src={jsLogo} alt="Logo de JavaScript" className="habilidad-icono" />
        </div>
        <div className="habilidad-item">
          <img src={reactLogo} alt="Logo de React" className="habilidad-icono" />
        </div>
      </div>
    </section>
  );
}

export default Habilidades;