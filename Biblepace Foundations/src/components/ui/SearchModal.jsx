'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, BookOpen, PlayCircle, FileText, X } from 'lucide-react';
import { MODULES_DATA, BLOCKS_DATA, RECENT_MATERIALS } from '@/data/curriculumData';
import { useCourse } from '@/context/CourseContext';
import styles from './SearchModal.module.css';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useCourse();
  const [query, setQuery] = useState('');

  // Keyboard shortcut Cmd+K or Ctrl+K and Esc to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const normalized = query.toLowerCase().trim();

  // Search in modules
  const filteredModules = normalized
    ? MODULES_DATA.filter(m => 
        m.title.toLowerCase().includes(normalized) ||
        m.themes.some(t => t.toLowerCase().includes(normalized)) ||
        m.objective.toLowerCase().includes(normalized)
      ).slice(0, 4)
    : MODULES_DATA.slice(0, 3);

  // Search in lessons
  const filteredLessons = normalized
    ? MODULES_DATA.flatMap(m => 
        m.lessons
          .filter(l => l.title.toLowerCase().includes(normalized))
          .map(l => ({ ...l, module: m }))
      ).slice(0, 6)
    : [];

  return (
    <div className={styles.backdrop} onClick={() => setIsSearchOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchHeader}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar por aulas, módulos, temas teológicos..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className={styles.closeKey}>ESC</span>
        </div>

        <div className={styles.resultsList}>
          {/* Modules Section */}
          {filteredModules.length > 0 && (
            <div>
              <div className={styles.sectionHeader}>Módulos</div>
              {filteredModules.map((m) => (
                <Link
                  key={m.id}
                  href={`/cursos/${m.id}`}
                  onClick={() => setIsSearchOpen(false)}
                  className={styles.resultItem}
                >
                  <div className={styles.itemLeft}>
                    <div className={styles.itemIcon}>
                      <BookOpen size={16} />
                    </div>
                    <div className={styles.itemContent}>
                      <span className={styles.itemTitle}>Módulo {m.number} — {m.title}</span>
                      <span className={styles.itemSubtitle}>{m.themes.slice(0, 3).join(' • ')}</span>
                    </div>
                  </div>
                  <span className={styles.itemBadge}>6 aulas</span>
                </Link>
              ))}
            </div>
          )}

          {/* Lessons Section */}
          {filteredLessons.length > 0 && (
            <div>
              <div className={styles.sectionHeader}>Aulas Encontradas</div>
              {filteredLessons.map((l) => (
                <Link
                  key={l.id}
                  href={`/aulas/${l.id}`}
                  onClick={() => setIsSearchOpen(false)}
                  className={styles.resultItem}
                >
                  <div className={styles.itemLeft}>
                    <div className={styles.itemIcon}>
                      <PlayCircle size={16} />
                    </div>
                    <div className={styles.itemContent}>
                      <span className={styles.itemTitle}>{l.title}</span>
                      <span className={styles.itemSubtitle}>Módulo {l.module.number}: {l.module.title}</span>
                    </div>
                  </div>
                  <span className={styles.itemBadge}>{l.duration}</span>
                </Link>
              ))}
            </div>
          )}

          {normalized && filteredModules.length === 0 && filteredLessons.length === 0 && (
            <div className={styles.emptyState}>
              Nenhum resultado encontrado para &quot;{query}&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
