import React from 'react';
import imagenQuienSoy from '../assets/imagen01.jpg';

function QuienSoy() {
  return (
    <section className="quien-soy-section">
      <div className='columna-izquierda'>
        <h2>¿Quién Soy?</h2>
        <p>
          Soy Felipe Zapata, un apasionado y dedicado estudiante de desarrollo de software con un fuerte deseo de aprender y crecer en el mundo de la tecnología.
          Mi enfoque principal se centra en el desarrollo web frontend, donde disfruto transformando ideas en experiencias digitales interactivas y visualmente atractivas.
          Siempre estoy buscando nuevos desafíos y oportunidades para aplicar mis habilidades y contribuir a proyectos innovadores.
        </p>
        <a
          href="https://tarea-cv-felipezapata137s-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className='boton-cv'
        >
          CURRICULUM VITAE
        </a>
      </div>
      <div className='columna-derecha'>
        <img src={imagenQuienSoy} alt="Felipe Zapata trabajando en desarrollo web con código en pantallas" className="imagen-quien-soy" />
      </div>
    </section>
  );
}

export default QuienSoy;