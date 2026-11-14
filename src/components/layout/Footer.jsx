import React from 'react';
import { ArrowUp } from 'lucide-react';
import { APP_NAME, COURSE_TITLE, NAV_LINKS } from '../../utils/constants';
import biblepaceLogo from '../../assets/biblepace.svg';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-light">
      <div className="container footer-light-container">
        <div className="footer-top-row">
          <div className="footer-brand-box">
            <div className="footer-brand-header">
              <img src={biblepaceLogo} alt="BiblePace Logo" className="footer-logo-img" />
              <span className="footer-title">{APP_NAME}</span>
              <span className="brand-dot">.</span>
            </div>
            <p className="footer-tagline-text">
              {COURSE_TITLE} — Formação Bíblica para Jovens Discípulos.
            </p>
          </div>

          <div className="footer-pills-nav">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="footer-pill-item">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy-text">
            © {new Date().getFullYear()} {APP_NAME}. Todos os direitos reservados.
          </p>
          <button className="footer-top-btn" onClick={scrollToTop}>
            <ArrowUp size={16} /> TOPO
          </button>
        </div>
      </div>
    </footer>
  );
}
