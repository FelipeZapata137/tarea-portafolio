import React from 'react';
import TextoDinamico from '../componentes/textoDinamico.jsx';
import danielFoto from '../assets/daniel-foto.jpg';
import jonatanFoto from '../assets/jonatan-foto.jpeg';
import karinaFoto from '../assets/karina-foto.jpeg';

function Testimonios() {
  return (
    <>
      <section className="dynamic-text-section">
        <TextoDinamico phrases={["Testimonios", "Clientes felices", "Trabajo garantizado"]} />
      </section>

      <section className="testimonios-section">
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
    </>
  );
}

export default Testimonios;