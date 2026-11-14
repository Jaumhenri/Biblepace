'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, ArrowRight } from 'lucide-react';
import { useCourse } from '@/context/CourseContext';
import styles from './SidebarWidgets.module.css';

export default function PaceWidget() {
  const { 
    user, 
    overallPercentage, 
    totalLessons, 
    totalCompletedLessons 
  } = useCourse();

  // SVG Progress Ring calculations
  const size = 56;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallPercentage / 100) * circumference;

  return (
    <div className={styles.widgetCard}>
      <div className={styles.widgetHeader}>
        <span className={styles.widgetTitle}>Seu Ritmo</span>
      </div>

      {/* Streak Row */}
      <Link href="/jornada" className={styles.streakRow}>
        <div className={styles.streakLeft}>
          <div className={styles.flameBox}>
            <Flame size={22} className={styles.flameIcon} />
          </div>
          <div>
            <div className={styles.streakValue}>{user.streakDays} dias</div>
            <div className={styles.streakLabel}>de sequência</div>
          </div>
        </div>
        <ArrowRight size={16} className={styles.streakArrow} />
      </Link>

      {/* Overall Progress Ring Row */}
      <div className={styles.progressRingRow}>
        <div className={styles.ringContainer}>
          <svg width={size} height={size}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#F3F4F6"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
            />
          </svg>
          <span className={styles.ringPercentText}>{overallPercentage}%</span>
        </div>

        <div className={styles.progressInfo}>
          <span className={styles.progressTitle}>Progresso geral</span>
          <span className={styles.progressSubtitle}>
            {totalCompletedLessons} de {totalLessons} aulas
          </span>
        </div>
      </div>
    </div>
  );
}
