import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-muted">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Intro */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              Psicología<span>Logo</span>
            </Link>
            <p className="footer-desc">
              Acompañamiento psicológico profesional para tu bienestar mental y emocional en un entorno seguro y confidencial.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/terapias">Áreas de Terapia</Link></li>
              <li><Link to="/sobre-mi">Sobre Mí</Link></li>
              <li><Link to="/cita">Agendar Cita</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Contacto</h3>
            <ul>
              <li>
                <Phone size={18} />
                <span>+34 600 000 000</span>
              </li>
              <li>
                <Mail size={18} />
                <span>contacto@psicologo-demo.es</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Calle Principal 123, 28001 Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Psicología Logo. Todos los derechos reservados.</p>
          <div className="legal-links">
            <Link to="/privacidad">Política de Privacidad</Link>
            <Link to="/legal">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
