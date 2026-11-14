'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass, 
  BookOpen, 
  Search, 
  ChevronDown, 
  Menu 
} from 'lucide-react';
import BiblePaceLogo from '../ui/BiblePaceLogo';
import { useCourse } from '@/context/CourseContext';
import styles from './TopNav.module.css';

export default function TopNav({ onToggleMobileSidebar }) {
  const pathname = usePathname();
  const { user, setIsSearchOpen } = useCourse();

  const navItems = [
    { label: 'Início', href: '/', icon: Home },
    { label: 'Minha Jornada', href: '/jornada', icon: Compass },
    { label: 'Biblioteca', href: '/biblioteca', icon: BookOpen }
  ];

  return (
    <header className={styles.topNav}>
      <div className={styles.leftGroup}>
        {onToggleMobileSidebar && (
          <button 
            className={styles.mobileMenuToggle} 
            onClick={onToggleMobileSidebar}
            aria-label="Menu"
          >
            <Menu size={22} />
          </button>
        )}

        <Link href="/" className={styles.brand}>
          <div className={styles.brandLogo}>
            <BiblePaceLogo size={28} />
          </div>
          <span>BiblePace</span>
        </Link>

        <nav className={styles.navLinks}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.3 : 1.8} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className={styles.rightGroup}>
        <div 
          className={styles.searchBox} 
          onClick={() => setIsSearchOpen(true)}
          role="button"
          tabIndex={0}
        >
          <Search size={16} />
          <span>Buscar aulas, módulos, materiais...</span>
          <span className={styles.searchShortcut}>⌘K</span>
        </div>

        <Link href="/perfil" className={styles.userMenuButton}>
          <div className={styles.avatar}>
            {user.initials}
          </div>
          <span className={styles.userName}>{user.name}</span>
          <ChevronDown size={15} className={styles.userChevron} />
        </Link>
      </div>
    </header>
  );
}
