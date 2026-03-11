import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CloudRain, HeartHandshake, ShieldCheck } from 'lucide-react';
import './Therapies.css';

const Therapies = () => {
  return (
    <div className="therapies-page fade-in">
      <section className="therapies-header section-muted text-center">
        <div className="container">
          <h1>Áreas de Intervención</h1>
          <p className="page-subtitle">
            Cada proceso terapéutico es único. Trabajo contigo para comprender tu situación específica 
            y proporcionarte las herramientas necesarias para mejorar tu calidad de vida.
          </p>
        </div>
      </section>

      <section className="section therapies-list">
        <div className="container">
          
          {/* Anxiety */}
          <div className="therapy-row">
            <div className="therapy-icon">
              <Sparkles size={40} />
            </div>
            <div className="therapy-details">
              <h2>Ansiedad y Estrés</h2>
              <p>
                La ansiedad es una respuesta natural de nuestro cuerpo ante situaciones de peligro o incertidumbre, 
                pero cuando se vuelve constante e incontrolable, puede resultar paralizante.
              </p>
              <div className="therapy-symptoms">
                <strong>Síntomas comunes:</strong>
                <ul>
                  <li>Preocupación excesiva y constante</li>
                  <li>Dificultad para relajarse o dormir</li>
                  <li>Palpitaciones o sensación de ahogo</li>
                  <li>Miedos irracionales y fobias</li>
                </ul>
              </div>
              <p className="therapy-approach">
                Trabajaremos en identificar los desencadenantes, aprender técnicas de relajación, 
                reestructurar pensamientos ansiosos y afrontar los miedos de forma gradual.
              </p>
            </div>
          </div>

          {/* Depression */}
          <div className="therapy-row reverse">
            <div className="therapy-icon">
              <CloudRain size={40} />
            </div>
            <div className="therapy-details">
              <h2>Depresión y Estado de Ánimo</h2>
              <p>
                La depresión va más allá de sentirse triste temporalmente. Es un trastorno que afecta 
                profundamente cómo te sientes, piensas y manejas las actividades diarias.
              </p>
              <div className="therapy-symptoms">
                <strong>Síntomas comunes:</strong>
                <ul>
                  <li>Tristeza profunda o sentimiento de vacío</li>
                  <li>Pérdida de interés en actividades que antes disfrutabas</li>
                  <li>Cambios en el apetito o en el patrón de sueño</li>
                  <li>Falta de energía y fatiga constante</li>
                </ul>
              </div>
              <p className="therapy-approach">
                En terapia, nos enfocaremos en la activación conductual, la modificación de creencias 
                limitantes y la prevención de recaídas para que recuperes el sentido de tu vida.
              </p>
            </div>
          </div>

          {/* Stress Management */}
          <div className="therapy-row">
            <div className="therapy-icon">
              <ShieldCheck size={40} />
            </div>
            <div className="therapy-details">
              <h2>Gestión del Estrés y Burnout</h2>
              <p>
                El ritmo de vida actual, las exigencias laborales y personales pueden llevar al agotamiento 
                físico, mental y emocional, conocido como síndrome de burnout o desgaste profesional.
              </p>
              <div className="therapy-symptoms">
                <strong>Síntomas comunes:</strong>
                <ul>
                  <li>Agotamiento extremo y falta de motivación</li>
                  <li>Irritabilidad y cambios de humor</li>
                  <li>Problemas de concentración y bajo rendimiento</li>
                  <li>Aislamiento social y cinismo frente al trabajo</li>
                </ul>
              </div>
              <p className="therapy-approach">
                Aprenderemos a establecer límites saludables, gestionar el tiempo eficientemente y 
                desarrollar estrategias de autocontrol y resiliencia frente a la presión.
              </p>
            </div>
          </div>

          {/* Couples Therapy */}
          <div className="therapy-row reverse">
            <div className="therapy-icon">
              <HeartHandshake size={40} />
            </div>
            <div className="therapy-details">
              <h2>Terapia de Pareja</h2>
              <p>
                Todas las relaciones pasan por altibajos. La terapia de pareja ofrece un espacio neutral 
                y mediado para abordar conflictos, mejorar la comunicación y reconectar emocionalmente.
              </p>
              <div className="therapy-symptoms">
                <strong>Motivos de consulta frecuentes:</strong>
                <ul>
                  <li>Dificultades y patrones negativos de comunicación</li>
                  <li>Problemas de convivencia o infidelidad</li>
                  <li>Distanciamiento afectivo o sexual</li>
                  <li>Gestión de crisis vitales o familiares conjuntas</li>
                </ul>
              </div>
              <p className="therapy-approach">
                Fomentaremos la empatía, el entrenamiento en habilidades de comunicación asertiva 
                y la resolución de conflictos constructiva para fortalecer el vínculo de la pareja.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Line */}
      <section className="section text-center section-light border-top">
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>¿Identificas alguna de estas situaciones?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>No tienes que afrontarlo en soledad. Solicita una cita y evaluaremos tu caso.</p>
          <Link to="/cita" className="btn btn-primary btn-lg">Reservar Primera Sesión</Link>
        </div>
      </section>
    </div>
  );
};

export default Therapies;
