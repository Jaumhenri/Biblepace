import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { APP_NAME, NAV_LINKS } from '../../utils/constants';
import { Button } from '../common/Button';
import biblepaceLogo from '../../assets/biblepace.svg';
import './Navbar.css';

export function Navbar() {
  const scrolled = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <img src={biblepaceLogo} alt="BiblePace Logo" className="brand-logo-img" />
          <span className="brand-title">{APP_NAME}</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Desktop Pill Navigation Links */}
        <nav className="nav-desktop-pills">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="nav-pill-item">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="nav-actions">
          <a href="#contagem">
            <Button variant="orange" size="sm" icon={ArrowUpRight}>
              LANÇAMENTO 01/DEZ
            </Button>
          </a>
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contagem" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="orange" size="md" className="w-full">
              LISTA VIP · 01/DEZ
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
