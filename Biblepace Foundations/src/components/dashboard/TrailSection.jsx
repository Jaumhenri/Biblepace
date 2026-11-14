'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ModuleCard from './ModuleCard';
import { MODULES_DATA, BLOCKS_DATA } from '@/data/curriculumData';
import styles from './TrailSection.module.css';

export default function TrailSection() {
  const [selectedBlockId, setSelectedBlockId] = useState('all');

  const filteredModules = selectedBlockId === 'all'
    ? MODULES_DATA
    : MODULES_DATA.filter(m => m.blockId === Number(selectedBlockId));

  return (
    <div className={styles.trailContainer}>
      <div className={styles.trailHeader}>
        <div className={styles.headerLeft}>
          <h2 className={styles.sectionTitle}>Sua trilha</h2>
          <span className={styles.trailMeta}>
            BIBLEPACE • 6 BLOCOS • 24 MÓDULOS
          </span>
        </div>

        <Link href="/cursos" className={styles.viewAllLink}>
          <span>Ver todos</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Block Filter Tabs */}
      <div className={styles.blockFilterTabs}>
        <button
          className={`${styles.filterTab} ${selectedBlockId === 'all' ? styles.filterTabActive : ''}`}
          onClick={() => setSelectedBlockId('all')}
        >
          Todos os 24 Módulos
        </button>
        {BLOCKS_DATA.map((block) => (
          <button
            key={block.id}
            className={`${styles.filterTab} ${selectedBlockId === String(block.id) ? styles.filterTabActive : ''}`}
            onClick={() => setSelectedBlockId(String(block.id))}
          >
            Bloco {block.id}: {block.shortTitle}
          </button>
        ))}
      </div>

      {/* Modules Grid */}
      <div className={styles.moduleGrid}>
        {filteredModules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
