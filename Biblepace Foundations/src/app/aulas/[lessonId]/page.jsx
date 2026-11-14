'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Maximize, 
  Check, 
  ChevronRight, 
  BookOpen, 
  HelpCircle, 
  Calendar, 
  Edit3, 
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BiblePaceLogo from '@/components/ui/BiblePaceLogo';
import { MODULES_DATA } from '@/data/curriculumData';
import { useCourse } from '@/context/CourseContext';
import styles from './LessonPlayer.module.css';

export default function LessonPlayerPage({ params }) {
  const { lessonId } = params;
  const router = useRouter();

  // Find module and lesson
  let currentModule = null;
  let currentLesson = null;
  let currentLessonIndex = -1;

  for (const mod of MODULES_DATA) {
    const idx = mod.lessons.findIndex(l => l.id === lessonId);
    if (idx !== -1) {
      currentModule = mod;
      currentLesson = mod.lessons[idx];
      currentLessonIndex = idx;
      break;
    }
  }

  // Fallback to Module 3 Lesson 3 if not found or testing
  if (!currentLesson) {
    currentModule = MODULES_DATA[2]; // Module 3
    currentLesson = currentModule.lessons[2]; // Lesson 3
    currentLessonIndex = 2;
  }

  const { 
    isLessonCompleted, 
    toggleLessonCompleted,
    notebookNotes,
    saveNotebookNote,
    reflectionAnswers,
    saveReflectionAnswer,
    completedChallenges,
    toggleChallengeCompleted
  } = useCourse();

  // Video player local UI state
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const [activeTab, setActiveTab] = useState('vision'); // vision | reflections | challenge | notebook

  const isCompleted = isLessonCompleted(currentLesson.id);
  const currentNote = notebookNotes[currentModule.id] || '';

  // Handle Mark as completed with celebration using strictly the 3 brand colors: Laranja, Preto, Branco
  const handleToggleComplete = () => {
    toggleLessonCompleted(currentLesson.id);
    if (!isCompleted) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E8461E', '#000000', '#FFFFFF']
      });
    }
  };

  const nextLesson = currentLessonIndex < currentModule.lessons.length - 1 
    ? currentModule.lessons[currentLessonIndex + 1] 
    : null;

  return (
    <div className={styles.pageLayout}>
      {/* Left Column: Player & Interactive Content Tabs */}
      <div className={styles.mainColumn}>
        <div className={styles.backRow}>
          <Link href={`/cursos/${currentModule.id}`} className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Módulo {currentModule.number}: {currentModule.title}</span>
          </Link>

          <span style={{ fontSize: '13px', color: '#000000', fontWeight: '700' }}>
            Aula {currentLessonIndex + 1} de {currentModule.lessons.length}
          </span>
        </div>

        {/* Video Player */}
        <div className={styles.playerContainer}>
          <div 
            className={styles.videoScreen} 
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <div className={styles.watermark}>
              <BiblePaceLogo size={18} color="#FFFFFF" />
              <span>BIBLEPACE FOUNDATIONS</span>
            </div>

            <div className={styles.bigPlayButton}>
              {isPlaying ? (
                <Pause size={32} fill="#FFFFFF" />
              ) : (
                <Play size={32} fill="#FFFFFF" strokeWidth={0} />
              )}
            </div>
          </div>

          {/* Controls Bar */}
          <div className={styles.playerControlsBar}>
            <div className={styles.timelineTrack}>
              <div className={styles.timelineFill} />
            </div>

            <div className={styles.controlsRow}>
              <div className={styles.leftControls}>
                <button 
                  className={styles.controlButton} 
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? <Pause size={18} fill="#FFFFFF" /> : <Play size={18} fill="#FFFFFF" />}
                </button>
                <button className={styles.controlButton} aria-label="Reiniciar">
                  <RotateCcw size={16} />
                </button>
                <button className={styles.controlButton} aria-label="Volume">
                  <Volume2 size={18} />
                </button>
                <span className={styles.timeDisplay}>
                  {isPlaying ? '04:15' : '00:00'} / {currentLesson.duration}
                </span>
              </div>

              <div className={styles.rightControls}>
                <button 
                  className={styles.speedBadge}
                  onClick={() => {
                    const speeds = ['1x', '1.25x', '1.5x', '2x'];
                    const next = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
                    setPlaybackSpeed(next);
                  }}
                >
                  {playbackSpeed}
                </button>
                <button className={styles.controlButton} aria-label="Tela cheia">
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Header Card */}
        <div className={styles.lessonMetaCard}>
          <div className={styles.lessonInfo}>
            <span className={styles.moduleTag}>
              Módulo {currentModule.number} • {currentModule.title}
            </span>
            <h1 className={styles.lessonTitle}>{currentLesson.title}</h1>
          </div>

          <div className={styles.actionsRight}>
            <button
              onClick={handleToggleComplete}
              className={`${styles.markCompleteButton} ${
                isCompleted ? styles.completedButtonActive : ''
              }`}
            >
              <Check size={16} strokeWidth={isCompleted ? 3 : 2} />
              <span>{isCompleted ? 'Aula Concluída' : 'Marcar como Concluída'}</span>
            </button>

            {nextLesson && (
              <Link 
                href={`/aulas/${nextLesson.id}`}
                className={styles.markCompleteButton}
                style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
              >
                <span>Próxima</span>
                <ChevronRight size={16} />
              </Link>
            )}
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsHeader}>
            <button
              className={`${styles.tabButton} ${activeTab === 'vision' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <BookOpen size={16} />
              <span>Visão da Aula</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'reflections' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('reflections')}
            >
              <HelpCircle size={16} />
              <span>Perguntas de Reflexão (3)</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'challenge' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('challenge')}
            >
              <Calendar size={16} />
              <span>Desafio da Semana</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'notebook' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('notebook')}
            >
              <Edit3 size={16} />
              <span>Meu Caderno de Anotações</span>
            </button>
          </div>

          <div className={styles.tabContent}>
            {/* Tab 1: Visão da Aula */}
            {activeTab === 'vision' && (
              <div className={styles.visionContent}>
                <div className={styles.verseCard}>
                  <p style={{ fontStyle: 'italic', color: '#000000', fontSize: '15px', fontWeight: '600' }}>
                    &ldquo;{currentModule.verse.text}&rdquo;
                  </p>
                  <span style={{ display: 'block', marginTop: '6px', fontWeight: '800', fontSize: '12px', color: 'var(--color-primary)' }}>
                    — {currentModule.verse.ref}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px', color: '#000000' }}>
                    Objetivo Desta Aula
                  </h3>
                  <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#000000' }}>
                    {currentModule.objective}
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px', color: '#000000' }}>
                    Ideia Central
                  </h3>
                  <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#000000', fontWeight: '600' }}>
                    {currentModule.mainIdea}
                  </p>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid #000000' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#000000' }}>
                    Temas abordados: {currentModule.themes.join(' • ')}
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Perguntas de Reflexão */}
            {activeTab === 'reflections' && (
              <div className={styles.reflectionList}>
                <p style={{ fontSize: '13.5px', color: '#000000', marginBottom: '10px', fontWeight: '500' }}>
                  Perguntas de autoexame extraídas da apostila oficial para aprofundar seu discipulado. Suas respostas são salvas automaticamente.
                </p>

                {currentModule.reflectionQuestions.map((question, qIdx) => {
                  const savedAnswer = reflectionAnswers[`${currentModule.id}-${qIdx}`] || '';
                  return (
                    <div key={qIdx} className={styles.reflectionItem}>
                      <label className={styles.reflectionQuestion}>
                        {qIdx + 1}. {question}
                      </label>
                      <textarea
                        className={styles.reflectionTextarea}
                        placeholder="Escreva sua reflexão sincera aqui..."
                        value={savedAnswer}
                        onChange={(e) => saveReflectionAnswer(currentModule.id, qIdx, e.target.value)}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 3: Desafio da Semana */}
            {activeTab === 'challenge' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #000000', padding: '20px', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} />
                    <span>Compromisso Prático de 7 Dias</span>
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#000000', fontWeight: '500' }}>
                    {currentModule.weeklyChallenge}
                  </p>
                </div>

                <button
                  onClick={() => toggleChallengeCompleted(currentModule.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: completedChallenges.includes(currentModule.id) ? 'var(--color-primary)' : '#000000',
                    color: '#FFFFFF',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  <Check size={18} />
                  <span>
                    {completedChallenges.includes(currentModule.id) 
                      ? 'Desafio da Semana Concluído!' 
                      : 'Marcar Desafio como Concluído'}
                  </span>
                </button>
              </div>
            )}

            {/* Tab 4: Caderno de Anotações */}
            {activeTab === 'notebook' && (
              <div className={styles.notebookContainer}>
                <div className={styles.notebookHeaderRow}>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#000000' }}>
                    Caderno do Discípulo — Módulo {currentModule.number}
                  </span>
                  <span className={styles.notebookStatus}>
                    <Check size={12} />
                    Salvo localmente
                  </span>
                </div>

                <div className="notebook-paper">
                  <textarea
                    className={styles.notebookInput}
                    style={{ background: 'transparent', border: 'none', lineHeight: '32px', color: '#000000' }}
                    placeholder="Espaço para anotações: respostas, reflexões, rascunhos, insights e orações..."
                    value={currentNote}
                    onChange={(e) => saveNotebookNote(currentModule.id, e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Lessons Navigator Sidebar */}
      <div className={styles.lessonNavigator}>
        <div className={styles.navHeader}>
          <span className={styles.navHeaderTitle}>
            Aulas do Módulo {currentModule.number}
          </span>
          <span className={styles.navHeaderSubtitle}>
            {currentModule.title}
          </span>
        </div>

        <div className={styles.navLessonsList}>
          {currentModule.lessons.map((lesson, idx) => {
            const isLessonActive = lesson.id === currentLesson.id;
            const isLessonDone = isLessonCompleted(lesson.id);

            return (
              <Link
                key={lesson.id}
                href={`/aulas/${lesson.id}`}
                className={`${styles.navLessonItem} ${
                  isLessonActive ? styles.navLessonActive : ''
                }`}
              >
                <div className={styles.navItemLeft}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '9999px',
                      backgroundColor: isLessonDone ? '#000000' : '#FFFFFF',
                      border: '1px solid #000000',
                      color: isLessonDone ? '#FFFFFF' : '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: '800',
                      flexShrink: 0
                    }}
                  >
                    {isLessonDone ? <Check size={13} strokeWidth={3} /> : idx + 1}
                  </div>
                  <span className={styles.navLessonTitle}>
                    {lesson.title}
                  </span>
                </div>

                <span className={styles.navLessonDuration}>
                  {lesson.duration}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Apostila download link inside lesson player */}
        <div style={{ padding: '16px', borderTop: '1px solid #000000', backgroundColor: '#FFFFFF' }}>
          <a
            href={`#download-${currentModule.id}`}
            onClick={(e) => {
              e.preventDefault();
              alert(`Baixando apostila do Módulo ${currentModule.number}`);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'var(--color-primary)',
              fontWeight: '700'
            }}
          >
            <FileText size={16} />
            <span>Baixar Apostila deste Módulo (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
