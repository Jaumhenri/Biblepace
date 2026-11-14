'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Lock, Circle } from 'lucide-react';
import { useCourse } from '@/context/CourseContext';
import styles from './ModuleCard.module.css';

export default function ModuleCard({ module, index }) {
  const { getModuleStatus, getModuleCompletedCount } = useCourse();

  const status = getModuleStatus(module);
  const completedCount = getModuleCompletedCount(module);
  const totalLessons = module.lessons.length;

  // Alternate card background theme as shown in the screenshot:
  // Odd positions = Orange, Even positions = Dark
  const isOrange = index % 2 === 0;
  const themeClass = isOrange ? styles.themeOrange : styles.themeDark;
  const statusClass = status === 'locked' ? styles.statusLocked : '';

  return (
    <Link 
      href={`/cursos/${module.id}`} 
      className={`${styles.moduleCard} ${themeClass} ${statusClass}`}
    >
      <div className={styles.cardTop}>
        <span className={styles.moduleTag}>Módulo {module.number}</span>
        <ArrowRight size={16} className={styles.topArrow} />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{module.title}</h3>
        <p className={styles.cardDesc}>{module.objective}</p>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.footerLeft}>
          {status === 'completed' && (
            <>
              <div className={styles.checkCircle}>
                <Check size={11} strokeWidth={3.5} />
              </div>
              <span>{completedCount} de {totalLessons} aulas</span>
            </>
          )}

          {status === 'in_progress' && (
            <>
              <div className={styles.inProgressCircle} />
              <span>{completedCount} de {totalLessons} aulas</span>
            </>
          )}

          {status === 'locked' && (
            <>
              <Lock size={14} />
              <span>Bloqueado</span>
            </>
          )}
        </div>

        <div className={styles.footerRight}>
          {status === 'completed' && 'Concluído'}
          {status === 'in_progress' && 'Em andamento'}
          {status === 'locked' && `${totalLessons} aulas`}
        </div>
      </div>
    </Link>
  );
}
