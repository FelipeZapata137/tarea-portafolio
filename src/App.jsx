import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './componentes/menu.jsx';
import imagenQuienSoy from './assets/imagen01.jpg';
import proyecto01 from './assets/proyecto01.jpg';
import proyecto02 from './assets/proyecto02.jpg';
import proyecto03 from './assets/proyecto03.jpg';
import htmlLogo from './assets/html-icon.png';
import cssLogo from './assets/css-icon.png';
import jsLogo from './assets/js-icon.png';
import reactLogo from './assets/react-icon.png';
import mailImage from "./assets/mail.svg";
import TextoDinamico from './componentes/textoDinamico.jsx';
import danielFoto from './assets/daniel-foto.jpg';
import jonatanFoto from './assets/jonatan-foto.jpeg';
import karinaFoto from './assets/karina-foto.jpeg';
import facebookLogo from './assets/facebook-logo.png';
import xLogo from './assets/x-logo.jpg';
import instagramLogo from './assets/instagram-logo.png';

function App() {
  return (
    <>
      <div id="inicio-section" className="hero-section">
        <div className='hero-menu'>
          <Menu />
        </div>
        <div className="hero-content">
          <h1>Bienvenido a mi Portafolio Online</h1>
          <button className="portfolio-button">VER PORTAFOLIO</button>
        </div>
      </div>

      <section id="quien-soy-section" className="quien-soy-section">
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

      <section id="mis-proyectos-section" className="mis-proyectos">
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

      <section id="habilidades-section" className="habilidades">
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

      <section className="dynamic-text-section">
        <TextoDinamico phrases={["Testimonios", "Clientes felices", "Trabajo garantizado"]} />
      </section>

      <section id="testimonios-section" className="testimonios-section">
        <h2 className="testimonios-titulo">Lo que dicen nuestros clientes</h2>
        <div className="testimonios-grid">
          <div className="testimonial-card color-primario">
            <div className="testimonial-header">
              <img src={danielFoto} alt="Avatar de Daniel Castillo" className="testimonial-avatar" />
              <div className="testimonial-info">
                <p className="testimonial-name">Daniel Castillo</p>
                <p className="testimonial-status">Verificado</p>
              </div>

              <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 11c0 2.209 1.791 4 4 4s4-1.791 4-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3zm10 0c0 2.209 1.791 4 4 4s4-1.791 4-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3z"/>
              </svg>
            </div>
            <p className="testimonial-text">"Recibí una oferta de trabajo a mitad del curso, y los temas que aprendí estaban actualizados, si no más, en la empresa a la que me uní. Honestamente siento que valió cada centavo."</p>
            <p className="testimonial-full-text">"Fui paramédico durante muchos años antes de unirme al bootcamp. Me inscribí en el curso introductorio gratuito y ¡me pareció increíblemente divertido! Me inscribí poco después. Las siguientes 12 semanas fueron las mejores, y más exigentes, de mi vida. Desde que terminé el curso, logré cambiar de carrera y ahora trabajo como Ingeniero de Software en una startup de realidad virtual."</p>
          </div>

          <div className="testimonial-card color-secundario">
            <div className="testimonial-header">
              <img src={jonatanFoto} alt="Avatar de Jonatan Wilson" className="testimonial-avatar" />
              <div className="testimonial-info">
                <p className="testimonial-name">Jonatan Wilson</p>
                <p className="testimonial-status">Verificado</p>
              </div>
              <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 11c0 2.209 1.791 4 4 4s4-1.791 4-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3zm10 0c0 2.209 1.791 4 4 4s4-1.791 4-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3z"/>
              </svg>
            </div>
            <p className="testimonial-text">"El equipo fue muy solidario y me mantuvo motivado"</p>
            <p className="testimonial-full-text">"Empecé como un completo principiante sin prácticamente habilidades de programación. Ahora trabajo como ingeniero móvil para una gran empresa. ¡Esta fue una de las mejores inversiones que he hecho en mí mismo! Realmente cambió mi perspectiva y me dio las herramientas para triunfar en un nuevo campo. No podría estar más agradecido por la experiencia transformadora."</p>
          </div>

          <div className="testimonial-card color-terciario">
            <div className="testimonial-header">
              <img src={karinaFoto} alt="Avatar de Karina White" className="testimonial-avatar" />
              <div className="testimonial-info">
                <p className="testimonial-name">Karina White</p>
                <p className="testimonial-status">Verificada</p>
              </div>
              <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 11c0 2.209 1.791 4 4 4s4-1.791 4-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3z"/>
              </svg>
            </div>
            <p className="testimonial-text">"Una experiencia que cambia la vida. ¡Altamente recomendado!"</p>
            <p className="testimonial-full-text">"Antes de unirme al bootcamp, nunca había escrito una línea de código. Necesitaba estructura de profesionales que pudieran ayudarme a aprender programación paso a paso. Me animó a inscribirme un exalumno que solo tenía cosas maravillosas que decir sobre el programa. Todo el plan de estudios y el personal no decepcionaron. Fueron muy atentos y nunca tuve que esperar mucho tiempo para recibir ayuda. Si buscas un cambio de carrera, este es el lugar."</p>
          </div>
        </div>
      </section>

      <footer id="contacto-section" className="footer">
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
            <a href="#inicio-section">Inicio</a>
            <a href="#quien-soy-section">Sobre mí</a>
            <a href="#mis-proyectos-section">Proyectos</a>
            <a href="#habilidades-section">Habilidades</a>
            <a href="#testimonios-section">Testimonios</a>
            <a href="#contacto-section">Contacto</a>
          </div>
          <p>Derechos reservados © Felipe Zapata</p>
        </div>
        <div className="footer-right">
          <img src={mailImage} alt="Ilustración de correo" className="mail-illustration" />
        </div>
      </footer>
    </>
  );
}

export default App;
