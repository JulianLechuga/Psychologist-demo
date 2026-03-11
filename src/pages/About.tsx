import React from 'react';
import { Award, BookOpen, Heart, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page fade-in">
      
      {/* Bio Section */}
      <section className="about-bio section section-light">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div className="bio-image-wrapper">
             {/* Note: Placeholder for professional headshot */}
            <div className="bio-image">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Psicóloga profesional en su consulta" />
            </div>
            <div className="experience-badge">
              <span className="years">+10</span>
              <span className="text">Años de<br/>Experiencia</span>
            </div>
          </div>

          <div className="bio-content">
            <span className="subtitle">Conóceme</span>
            <h1>Hola, soy [Nombre Apellido]</h1>
            <p className="lead">
              Psicóloga General Sanitaria (Nº Colegiada: M-00000) apasionada por el comportamiento humano 
              y el bienestar emocional.
            </p>
            <p>
              Mi vocación por la psicología nació del profundo deseo de entender cómo funcionamos y cómo 
              podemos mejorar nuestra calidad de vida, incluso en las circunstancias más adversas. 
              A lo largo de mi trayectoria profesional, he tenido el privilegio de acompañar a cientos 
              de personas en sus procesos de transformación personal.
            </p>
            <p>
              Creo firmemente en que buscar ayuda psicológica no es un signo de debilidad, sino 
              un acto de valentía y responsabilidad hacia uno mismo. Mi objetivo no es decirte qué 
              hacer, sino proporcionarte la linterna para que tú mismo/a encuentres tu camino.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications & Approach */}
      <section className="about-details section section-muted">
        <div className="container">
          <div className="grid grid-2">
            
            <div className="qualifications-box">
              <h2>Formación y Recorrido</h2>
              <ul className="timeline">
                <li>
                  <div className="timeline-icon"><Award size={20} /></div>
                  <div className="timeline-content">
                    <h3>Grado en Psicología</h3>
                    <p>Universidad Autónoma de Madrid (UAM)</p>
                  </div>
                </li>
                <li>
                  <div className="timeline-icon"><BookOpen size={20} /></div>
                  <div className="timeline-content">
                    <h3>Máster en Psicología General Sanitaria</h3>
                    <p>Universidad Complutense de Madrid (UCM)</p>
                  </div>
                </li>
                <li>
                  <div className="timeline-icon"><BookOpen size={20} /></div>
                  <div className="timeline-content">
                    <h3>Experto en Terapia Cognitivo-Conductual</h3>
                    <p>Colegio Oficial de Psicólogos de Madrid</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="philosophy-box">
              <h2>Mi forma de trabajar</h2>
              <div className="philosophy-text">
                <p>
                  Trabajo desde una perspectiva <strong>Cognitivo-Conductual integradora</strong>, 
                  lo que significa que utilizo técnicas basadas en la evidencia científica adaptándolas 
                  siempre a las necesidades concretas de cada paciente.
                </p>
              </div>
              
              <ul className="values-list">
                <li>
                  <CheckCircle2 className="value-icon" size={24} />
                  <div>
                    <strong>Confidencialidad Absoluta</strong>
                    <p>Tu privacidad es sagrada y está protegida por secreto profesional.</p>
                  </div>
                </li>
                <li>
                  <Heart className="value-icon" size={24} />
                  <div>
                    <strong>Espacio Seguro</strong>
                    <p>Un entorno libre de juicios donde puedes ser tú mismo/a al 100%.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="value-icon" size={24} />
                  <div>
                    <strong>Enfoque Práctico</strong>
                    <p>Herramientas útiles y aplicables desde la primera sesión.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
