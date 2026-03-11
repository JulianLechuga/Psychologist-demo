import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Users, MapPin, Star, Calendar } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container grid grid-2">
          <div className="hero-content">
            <span className="subtitle">Psicóloga Sanitaria</span>
            <h1>Encuentra tu equilibrio emocional y bienestar mental</h1>
            <p>
              Ofrezco un espacio seguro, cálido y confidencial donde podemos trabajar 
              juntos para superar tus dificultades y alcanzar tu mejor versión.
            </p>
            <div className="hero-actions">
              <Link to="/cita" className="btn btn-primary">Agendar Cita</Link>
              <Link to="/sobre-mi" className="btn btn-outline">Conóceme</Link>
            </div>
          </div>
          <div className="hero-image">
             {/* Note: In a real app, use a real serene image of the psychologist's office or nature */}
            <div className="image-placeholder">
               <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800" alt="Espacio de terapia tranquilo" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro/Philosophy Section */}
      <section className="section section-muted intro-section">
        <div className="container text-center">
          <h2 className="section-title">Mi enfoque terapéutico</h2>
          <p className="section-subtitle">Terapia basada en la evidencia científica y adaptada a tus necesidades</p>
          <div className="intro-grid grid grid-3">
            <div className="intro-card">
              <div className="icon-wrapper"><Brain size={32} /></div>
              <h3>Terapia Cognitivo-Conductual</h3>
              <p>Identificamos y modificamos patrones de pensamiento y comportamiento que te generan malestar.</p>
            </div>
            <div className="intro-card">
              <div className="icon-wrapper"><Heart size={32} /></div>
              <h3>Empatía y Calidez</h3>
              <p>Un espacio libre de juicios donde te sentirás escuchado, comprendido y validado.</p>
            </div>
            <div className="intro-card">
              <div className="icon-wrapper"><Users size={32} /></div>
              <h3>Trato Personalizado</h3>
              <p>Cada persona es única, por lo que el proceso terapéutico se adapta a tu ritmo y objetivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Areas Summary */}
      <section className="section areas-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Áreas de Especialización</h2>
            <p className="section-subtitle">Te acompaño en diferentes etapas y dificultades de la vida</p>
          </div>
          <div className="areas-grid grid grid-2">
            
            <div className="area-card">
              <div className="area-content">
                <h3>Ansiedad y Estrés</h3>
                <p>Aprende herramientas para gestionar la preocupación constante, ataques de pánico y estrés diario.</p>
                <Link to="/terapias" className="read-more">Saber más &rarr;</Link>
              </div>
            </div>

            <div className="area-card">
              <div className="area-content">
                <h3>Depresión y Estado de Ánimo</h3>
                <p>Recupera la motivación, energía y sentido vital tras periodos de tristeza profunda o apatía.</p>
                <Link to="/terapias" className="read-more">Saber más &rarr;</Link>
              </div>
            </div>

            <div className="area-card">
              <div className="area-content">
                <h3>Autoestima y Crecimiento</h3>
                <p>Mejora la relación contigo mismo, fortalece tu seguridad y establece límites saludables.</p>
                <Link to="/terapias" className="read-more">Saber más &rarr;</Link>
              </div>
            </div>

            <div className="area-card">
              <div className="area-content">
                <h3>Terapia de Pareja</h3>
                <p>Mejora la comunicación, resuelve conflictos y fortalece el vínculo en un espacio neutral.</p>
                <Link to="/terapias" className="read-more">Saber más &rarr;</Link>
              </div>
            </div>

          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
             <Link to="/terapias" className="btn btn-outline">Ver todas las áreas</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section text-center">
        <div className="container">
          <h2>¿Damos el primer paso?</h2>
          <p>Solicita tu primera sesión de valoración para conocernos y trazar un plan de acción.</p>
          <div className="cta-actions">
            <Link to="/cita" className="btn btn-accent btn-lg"><Calendar className="icon-inline" size={20} /> Agendar Cita</Link>
            <a href="tel:+34600000000" className="btn btn-outline btn-lg"><MapPin className="icon-inline" size={20} /> Consulta en Madrid</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
