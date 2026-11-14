'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass, 
  BookOpen, 
  Layers, 
  PlayCircle, 
  FileText, 
  User, 
  Award,
  X 
} from 'lucide-react';
import BiblePaceLogo from '../ui/BiblePaceLogo';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const primaryItems = [
    { label: 'Início', href: '/', icon: Home },
    { label: 'Minha Jornada', href: '/jornada', icon: Compass },
    { label: 'Biblioteca', href: '/biblioteca', icon: BookOpen }
  ];

  const contentItems = [
    { label: 'Cursos', href: '/cursos', icon: Layers },
    { label: 'Aulas', href: '/aulas/3-3', icon: PlayCircle },
    { label: 'Materiais', href: '/materiais', icon: FileText }
  ];

  const profileItems = [
    { label: 'Meu Perfil', href: '/perfil', icon: User },
    { label: 'Certificados', href: '/certificados', icon: Award }
  ];

  const renderLink = (item) => {
    const Icon = item.icon;
    const isActive = item.href === '/' 
      ? pathname === '/' 
      : pathname.startsWith(item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onClose}
        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
      >
        <Icon size={18} strokeWidth={isActive ? 2.3 : 1.8} />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      {isOpen && (
        <div 
          className={styles.sidebarOverlay} 
          onClick={onClose}
          aria-hidden="true" 
        />
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <BiblePaceLogo size={26} />
          <span className={styles.brandName}>BiblePace</span>
        </div>

        <div className={styles.navContainer}>
          <div className={styles.navSection}>
            {primaryItems.map(renderLink)}
          </div>

          <div className={styles.navSection}>
            <span className={styles.sectionTitle}>Conteúdo</span>
            {contentItems.map(renderLink)}
          </div>

          <div className={styles.navSection}>
            <span className={styles.sectionTitle}>Perfil</span>
            {profileItems.map(renderLink)}
          </div>
        </div>

        <div className={styles.sidebarFooter}>
          <div className={styles.footerMotto}>
            <div className={styles.mottoLogo}>
              <BiblePaceLogo size={18} />
            </div>
            <div className={styles.mottoText}>
              <div>Mais da Palavra.</div>
              <div>Mais de Cristo.</div>
              <div>Sempre no ritmo.</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
