import React, { useState } from 'react';
import { Calendar, Clock, Video, Building2 } from 'lucide-react';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    modality: 'online',
    reason: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', modality: 'online', reason: '' });
      setTimeout(() => setFormStatus('idle'), 5000); // Reset after 5s
    }, 1500);
  };

  return (
    <div className="appointment-page fade-in">
      <section className="appointment-header section-muted text-center">
        <div className="container">
          <h1>Agendar Primera Cita</h1>
          <p className="page-subtitle">
            Da el primer paso hacia tu bienestar. Rellena el formulario y me pondré en contacto 
            contigo lo antes posible para acordar fecha y hora para una sesión de valoración.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2" style={{ gap: '4rem' }}>
          
          {/* Info Side */}
          <div className="appointment-info">
            <h2>Información Práctica</h2>
            <p className="info-desc">
              La primera sesión tiene como objetivo conocernos, evaluar tu caso y establecer 
              los objetivos terapéuticos. No te compromete a continuar si sientes que no soy 
              la profesional adecuada para ti.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="icon"><Video size={24} /></div>
                <div>
                  <h3>Sesiones Online</h3>
                  <p>A través de plataforma segura. Flexibilidad y comodidad desde cualquier lugar.</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon"><Building2 size={24} /></div>
                <div>
                  <h3>Sesiones Presenciales</h3>
                  <p>En mi consulta ubicada en el centro profundo y reconfortante del barrio.</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon"><Clock size={24} /></div>
                <div>
                  <h3>Duración y Honorarios</h3>
                  <p>Las sesiones duran 55 minutos. Tarifa: 60€/sesión.</p>
                </div>
              </div>
            </div>
            
            <div className="emergency-notice mt-lg">
              <strong>Importante:</strong> Si te encuentras en una situación de emergencia médica 
              o riesgo vital, por favor acude a urgencias o llama al 112 (Emergencias España) / 024 (Prevención Suicidio).
            </div>
          </div>

          {/* Form Side */}
          <div className="appointment-form-wrapper">
            <div className="form-card">
              {formStatus === 'success' ? (
                <div className="form-success text-center">
                  <div className="success-icon"><Calendar size={48} /></div>
                  <h3>¡Solicitud enviada!</h3>
                  <p>He recibido tus datos correctamente. Te contactaré en un plazo máximo de 24-48 horas laborables al correo o teléfono indicado.</p>
                </div>
              ) : (
                <form className="appointment-form" onSubmit={handleSubmit}>
                  <h3>Formulario de Contacto</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name">Nombre completo *</label>
                    <input type="text" id="name" name="name" required placeholder="Tu nombre" value={formData.name} onChange={handleChange} />
                  </div>
                  
                  <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '0' }}>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" required placeholder="tu@email.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Teléfono *</label>
                      <input type="tel" id="phone" name="phone" required placeholder="Tu teléfono" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="modality">Modalidad preferida *</label>
                    <select id="modality" name="modality" required value={formData.modality} onChange={handleChange}>
                      <option value="online">Terapia Online</option>
                      <option value="presencial">Terapia Presencial</option>
                      <option value="indiferente">Me es indiferente</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="reason">Motivo de consulta (Opcional)</label>
                    <textarea 
                      id="reason" 
                      name="reason" 
                      rows={4} 
                      placeholder="Brevemente, ¿qué te trae por aquí?"
                      value={formData.reason} 
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="form-policy">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>He leído y acepto la política de privacidad.*</span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Solicitar Cita'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Appointment;
