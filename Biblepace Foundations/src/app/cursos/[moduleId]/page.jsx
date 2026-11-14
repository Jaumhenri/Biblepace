'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Play, 
  Check, 
  Clock, 
  FileText, 
  Download, 
  Calendar, 
  Award,
  ChevronRight 
} from 'lucide-react';
import { MODULES_DATA, BLOCKS_DATA } from '@/data/curriculumData';
import { useCourse } from '@/context/CourseContext';
import styles from './ModuleDetail.module.css';

export default function ModuleDetailPage({ params }) {
  const { moduleId } = params;
  const numericId = Number(moduleId);
  const module = MODULES_DATA.find(m => m.id === numericId);

  const { 
    isLessonCompleted, 
    completedChallenges, 
    toggleChallengeCompleted 
  } = useCourse();

  if (!module) {
    notFound();
  }

  const block = BLOCKS_DATA.find(b => b.id === module.blockId);
  const isChallengeDone = completedChallenges.includes(module.id);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={16} />
        <span>Voltar para a Trilha</span>
      </Link>

      {/* Hero Header */}
      <section className={styles.moduleHero}>
        <div className={styles.heroMeta}>
          <span className={styles.blockBadge}>
            Bloco {block?.id}: {block?.shortTitle}
          </span>
          <span className={styles.moduleNumber}>Módulo {module.number} de 24</span>
        </div>

        <h1 className={styles.moduleTitle}>{module.title}</h1>

        {/* Verse Box */}
        <div className={styles.verseBox}>
          <p className={styles.verseText}>&ldquo;{module.verse.text}&rdquo;</p>
          <span className={styles.verseRef}>— {module.verse.ref}</span>
        </div>

        {/* Main Idea Banner */}
        <div className={styles.mainIdeaBanner}>
          <div className={styles.mainIdeaTag}>Ideia Principal</div>
          <p className={styles.mainIdeaText}>{module.mainIdea}</p>
        </div>

        {/* Themes Tags */}
        <div className={styles.themesRow}>
          {module.themes.map((theme) => (
            <span key={theme} className={styles.themeChip}>
              {theme}
            </span>
          ))}
        </div>
      </section>

      {/* 2-Columns Details Grid */}
      <div className={styles.detailGrid}>
        {/* Left: Lessons List */}
        <div className={styles.lessonsSection}>
          <div className={styles.sectionHeading}>
            <span>Aulas do Módulo</span>
            <span className={styles.lessonsCount}>6 aulas completas</span>
          </div>

          <div className={styles.lessonsList}>
            {module.lessons.map((lesson, idx) => {
              const completed = isLessonCompleted(lesson.id);
              return (
                <Link
                  key={lesson.id}
                  href={`/aulas/${lesson.id}`}
                  className={styles.lessonCard}
                >
                  <div className={styles.lessonLeft}>
                    <div 
                      className={`${styles.lessonStatusIcon} ${
                        completed ? styles.statusCompleted : styles.statusCurrent
                      }`}
                    >
                      {completed ? (
                        <Check size={16} strokeWidth={2.5} />
                      ) : (
                        <Play size={14} fill="currentColor" strokeWidth={0} />
                      )}
                    </div>
                    <div>
                      <div className={styles.lessonTitle}>
                        Aula {idx + 1}: {lesson.title}
                      </div>
                    </div>
                  </div>

                  <div className={styles.lessonDuration}>
                    <Clock size={13} />
                    <span>{lesson.duration}</span>
                    <ChevronRight size={15} style={{ marginLeft: 6 }} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Contexto Teológico */}
          <div className={styles.infoCard} style={{ marginTop: '20px' }}>
            <h3 className={styles.cardHeader}>Contexto do Ensino</h3>
            <p style={{ fontSize: '14.5px', lineHeight: '1.65', color: '#4B5563' }}>
              {module.context}
            </p>
          </div>

          {/* Aplicação Prática */}
          <div className={styles.infoCard}>
            <h3 className={styles.cardHeader}>Aplicação Prática Pastoral</h3>
            <p style={{ fontSize: '14.5px', lineHeight: '1.65', color: '#4B5563' }}>
              {module.application}
            </p>
          </div>
        </div>

        {/* Right Sidebar: Challenge & Material */}
        <div className={styles.sidebarColumn}>
          {/* Desafio da Semana */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <Calendar size={18} color="var(--color-primary)" />
              <span>Desafio da Semana</span>
            </div>
            <p className={styles.challengeText}>
              {module.weeklyChallenge}
            </p>
            <button
              onClick={() => toggleChallengeCompleted(module.id)}
              className={`${styles.challengeButton} ${
                isChallengeDone ? styles.challengeButtonCompleted : ''
              }`}
            >
              {isChallengeDone ? (
                <>
                  <Check size={16} />
                  <span>Desafio Concluído!</span>
                </>
              ) : (
                <span>Marcar como Realizado</span>
              )}
            </button>
          </div>

          {/* Material de Apoio (Apostila) */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <FileText size={18} color="var(--color-primary)" />
              <span>Apostila Oficial</span>
            </div>
            <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '16px' }}>
              Apostila completa para acompanhar as aulas, responder às perguntas de reflexão e guardar anotações.
            </p>
            <a
              href={`#download-${module.id}`}
              onClick={(e) => {
                e.preventDefault();
                alert(`Iniciando download: ${module.material.title} (${module.material.size})`);
              }}
              className={styles.downloadButton}
            >
              <div>
                <div style={{ fontSize: '13px' }}>{module.material.title}</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 'normal' }}>
                  PDF • {module.material.size} • {module.material.pages} págs
                </div>
              </div>
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
