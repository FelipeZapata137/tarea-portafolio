import React from 'react';
import proyecto01 from '../assets/proyecto01.jpg';
import proyecto02 from '../assets/proyecto02.jpg';
import proyecto03 from '../assets/proyecto03.jpg';

function Portafolio() {
  return (
    <section className="mis-proyectos">
      <div className='proyectos-arriba'>
        <h2>Mis Proyectos</h2>
      </div>
      <div className="proyectos-grid">
        <div className="columna-proyecto">
          <img src={proyecto01} alt="Captura de pantalla del Proyecto 1: Aplicación de Gestión de Tareas" className="imagen-proyecto" />
          <h3>Proyecto - 1: Aplicación de Gestión de Tareas</h3>
          <p>
            Desarrollo de una aplicación web completa para la gestión de tareas, utilizando React para el frontend y una API RESTful para el backend.
            Permite a los usuarios crear, editar, eliminar y organizar sus tareas de manera intuitiva, con funcionalidades de filtrado y búsqueda.
            Este proyecto demuestra mi habilidad para construir interfaces de usuario robustas y manejar el estado de la aplicación eficientemente.
          </p>
          <button className='boton-proyecto'>MÁS INFORMACIÓN</button>
        </div>
        <div className="columna-proyecto">
          <img src={proyecto02} alt="Captura de pantalla del Proyecto 2: E-commerce de Productos Digitales" className="imagen-proyecto" />
          <h3>Proyecto - 2: E-commerce de Productos Digitales</h3>
          <p>
            Implementación de una plataforma de comercio electrónico para la venta de productos digitales.
            Incluye un carrito de compras interactivo, pasarela de pago simulada y un panel de administración básico para la gestión de productos.
            Este proyecto resalta mi experiencia en la creación de flujos de usuario complejos y la integración de componentes interactivos.
          </p>
          <button className='boton-proyecto'>MÁS INFORMACIÓN</button>
        </div>
        <div className="columna-proyecto">
          <img src={proyecto03} alt="Captura de pantalla del Proyecto 3: Blog Personal Interactivo" className="imagen-proyecto" />
          <h3>Proyecto - 3: Blog Personal Interactivo</h3>
          <p>
            Creación de un blog personal dinámico con funcionalidades para la publicación y visualización de artículos.
            Cuenta con un sistema de comentarios y una interfaz responsiva que se adapta a diferentes dispositivos.
            Este proyecto muestra mi capacidad para diseñar interfaces de usuario atractivas y optimizadas para la lectura de contenido.
          </p>
          <button className='boton-proyecto'>MÁS INFORMACIÓN</button>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;