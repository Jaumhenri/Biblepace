'use client';

import React from 'react';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import BiblePaceLogo from '../ui/BiblePaceLogo';
import { useCourse } from '@/context/CourseContext';
import styles from './DashboardHeader.module.css';

export default function TopBanners() {
  const { 
    user, 
    totalLessons, 
    totalCompletedLessons, 
    overallPercentage,
    currentIncompleteLesson
  } = useCourse();

  const activeItem = currentIncompleteLesson();
  const currentModule = activeItem?.module;
  const currentLesson = activeItem?.lesson;

  return (
    <>
      {/* Welcome Greeting Header */}
      <section className={styles.welcomeSection}>
        <h1 className={styles.title}>
          <span>Olá, {user.firstName}</span>
          <span className={styles.wave}>👋</span>
        </h1>
        <p className={styles.subtitle}>
          Continue sua jornada... Deus tem muito mais para você.
        </p>
      </section>

      {/* Top 2 Banners Grid */}
      <section className={styles.topBannersGrid}>
        {/* Left: Sua Jornada */}
        <div className={styles.journeyCard}>
          <div className={styles.journeyTop}>
            <div className={styles.journeyIconBox}>
              <BiblePaceLogo size={26} />
            </div>
            <div>
              <span className={styles.journeyLabel}>Sua Jornada</span>
              <h2 className={styles.journeyHeading}>
                {totalCompletedLessons} de {totalLessons} aulas concluídas
              </h2>
            </div>
          </div>

          <div>
            <div className={styles.journeyProgressRow}>
              <div className={styles.progressBarTrack}>
                <div 
                  className={styles.progressBarFill} 
                  style={{ width: `${overallPercentage}%` }} 
                />
              </div>
              <span className={styles.percentageLabel}>{overallPercentage}%</span>
            </div>

            <div className={styles.currentModuleLabel}>
              Você está no <strong>Módulo {currentModule?.number || 3} — {currentModule?.title || 'Disciplinas Espirituais'}</strong>
            </div>
          </div>
        </div>

        {/* Right: Continue de Onde Parou (Orange CTA Card) */}
        <Link 
          href={`/aulas/${currentLesson?.id || '3-3'}`} 
          className={styles.continueBanner}
        >
          <div className={styles.continueHeader}>
            <span className={styles.continueTag}>Continue de onde parou</span>
            <ArrowRight size={18} className={styles.continueArrow} />
          </div>

          <div className={styles.continueContent}>
            <div className={styles.videoThumbnail}>
              <div className={styles.videoBackdrop} />
              <div className={styles.playCircle}>
                <Play size={18} fill="currentColor" strokeWidth={0} />
              </div>
              <span className={styles.durationBadge}>
                {currentLesson?.duration || '12:48'}
              </span>
            </div>

            <div className={styles.continueDetails}>
              <h3 className={styles.lessonTitle}>
                Aula {currentLesson?.order || 3} — {currentLesson?.title || 'O que são disciplinas espirituais'}
              </h3>
              <p className={styles.lessonDesc}>
                {currentModule?.objective || 'Nesta aula vamos entender o que são disciplinas espirituais e como elas nos ajudam a crescer na fé e na intimidade com Deus.'}
              </p>
              <div className={styles.continueButton}>
                <Play size={14} fill="currentColor" strokeWidth={0} />
                <span>Continuar aula</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
