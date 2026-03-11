import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <section className="contact-header section-muted text-center">
        <div className="container">
          <h1>Contacto y Ubicación</h1>
          <p className="page-subtitle">
            Estoy aquí para ayudarte. Contacta conmigo para resolver cualquier duda 
            sobre la terapia, mis servicios o para agendar una sesión.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2" style={{ gap: '4rem' }}>
          
          {/* Contact Details */}
          <div className="contact-details">
            <h2>Datos de Contacto</h2>
            <p className="contact-intro">
              Puedes contactarme directamente a través de los siguientes canales. Si no puedo 
              atenderte porque me encuentro en sesión, por favor deja un mensaje y te devolveré 
              la llamada lo antes posible.
            </p>

            <div className="contact-info-list w-full">
              <div className="contact-item">
                <div className="icon"><Phone size={24} /></div>
                <div>
                  <h3>Teléfono / WhatsApp</h3>
                  <p><a href="tel:+34600000000">+34 600 000 000</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><Mail size={24} /></div>
                <div>
                  <h3>Correo Electrónico</h3>
                  <p><a href="mailto:contacto@psicologo-demo.es">contacto@psicologo-demo.es</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><MapPin size={24} /></div>
                <div>
                  <h3>Ubicación de Consulta</h3>
                  <p>Calle Principal 123, 1º Izquierda<br/>28001 Madrid, España</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><Clock size={24} /></div>
                <div>
                  <h3>Horario de Atención</h3>
                  <p>Lunes a Viernes: 09:00 - 20:00<br/>Sábados: Mañanas (con cita previa)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact-map">
            <div className="map-container">
              {/* Note: In a real environment, replace this with the exact Google Maps embed iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12148.694675549887!2d-3.6937571329242953!3d40.42718100147633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289c03b879c1%3A0xc312b9d21ebaa9fc!2sBarrio%20de%20Salamanca%2C%20Madrid!5e0!3m2!1ses!2ses!4v1709123456789!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la consulta en Madrid"
              ></iframe>
            </div>
            <div className="map-caption">
              Ubicación céntrica, accesible en transporte público (Metro Serrano/Colón). Parking público a 50m.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
