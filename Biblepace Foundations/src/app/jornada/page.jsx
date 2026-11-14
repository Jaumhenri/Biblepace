'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Flame, 
  CheckCircle, 
  BookOpen, 
  Calendar, 
  ArrowRight,
  Compass,
  Check
} from 'lucide-react';
import { BLOCKS_DATA, MODULES_DATA } from '@/data/curriculumData';
import { useCourse } from '@/context/CourseContext';

export default function MinhaJornadaPage() {
  const { 
    user, 
    totalLessons, 
    totalCompletedLessons, 
    overallPercentage,
    completedChallenges,
    notebookNotes,
    getModuleStatus,
    getModuleCompletedCount
  } = useCourse();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* LP Header Section */}
      <div className="lp-header-section">
        <div className="lp-pill lp-pill-black">
          <Compass size={13} />
          <span>Trilha de Evolução do Aluno</span>
        </div>
        <h1 className="lp-title">
          Minha Jornada de Discipulado
        </h1>
        <p className="lp-subtitle">
          Acompanhe seu avanço contínuo rumo à maturidade cristã através dos 6 blocos pedagógicos, consolidando hábitos espirituais diários.
        </p>
      </div>

      {/* Stats Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', width: '100%', minWidth: 0 }}>
        <div 
          className="lp-card-white" 
          style={{ 
            padding: '28px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px' 
          }}
        >
          <div 
            style={{ 
              width: 52, 
              height: 52, 
              borderRadius: '14px', 
              backgroundColor: 'var(--primary)', 
              color: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Flame size={26} />
          </div>
          <div>
            <div style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {user.streakDays} dias
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>
              Sequência Ativa
            </div>
          </div>
        </div>

        <div 
          className="lp-card-white" 
          style={{ 
            padding: '28px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px' 
          }}
        >
          <div 
            style={{ 
              width: 52, 
              height: 52, 
              borderRadius: '14px', 
              backgroundColor: 'var(--accent-black)', 
              color: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <CheckCircle size={26} />
          </div>
          <div>
            <div style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {totalCompletedLessons}/{totalLessons}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>
              Aulas Concluídas ({overallPercentage}%)
            </div>
          </div>
        </div>

        <div 
          className="lp-card-white" 
          style={{ 
            padding: '28px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px' 
          }}
        >
          <div 
            style={{ 
              width: 52, 
              height: 52, 
              borderRadius: '14px', 
              backgroundColor: 'var(--primary)', 
              color: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Calendar size={26} />
          </div>
          <div>
            <div style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {completedChallenges.length} de 24
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>
              Desafios Semanais
            </div>
          </div>
        </div>

        <div 
          className="lp-card-white" 
          style={{ 
            padding: '28px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px' 
          }}
        >
          <div 
            style={{ 
              width: 52, 
              height: 52, 
              borderRadius: '14px', 
              backgroundColor: 'var(--accent-black)', 
              color: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <BookOpen size={26} />
          </div>
          <div>
            <div style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {Object.keys(notebookNotes).length} módulos
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '4px' }}>
              Caderno de Anotações
            </div>
          </div>
        </div>
      </div>

      {/* Discipleship Roadmap Timeline */}
      <div 
        style={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid var(--color-border)', 
          borderRadius: 'var(--radius-card)', 
          padding: '48px 40px', 
          boxShadow: 'var(--shadow-card-white)' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--space-xl)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-md)' }}>
          <div>
            <span className="lp-pill lp-pill-orange" style={{ marginBottom: '8px' }}>
              Itinerário Progressivo
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-dark)' }}>
              Trilha Linear de Formação Bíblica
            </h2>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
            6 Blocos • 24 Módulos Sequenciais
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
          {BLOCKS_DATA.map((block, idx) => {
            const blockModules = MODULES_DATA.filter(m => m.blockId === block.id);
            const completedCount = blockModules.reduce((acc, m) => acc + getModuleCompletedCount(m), 0);
            const totalCount = blockModules.reduce((acc, m) => acc + m.lessons.length, 0);
            const isCompleted = completedCount === totalCount;
            const isInProgress = completedCount > 0 && !isCompleted;

            return (
              <div key={block.id} style={{ display: 'flex', gap: '28px', position: 'relative' }}>
                {/* Timeline Node */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: isCompleted ? 'var(--accent-black)' : isInProgress ? 'var(--primary)' : '#FFFFFF',
                      border: isCompleted || isInProgress ? 'none' : '2px solid var(--color-border)',
                      color: isCompleted || isInProgress ? '#FFFFFF' : 'var(--text-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      fontSize: '1rem',
                      zIndex: 2,
                      boxShadow: isCompleted || isInProgress ? 'var(--shadow-sm)' : 'none'
                    }}
                  >
                    {isCompleted ? <Check size={24} strokeWidth={3} /> : block.id}
                  </div>
                  {idx < BLOCKS_DATA.length - 1 && (
                    <div
                      style={{
                        width: '2px',
                        flex: 1,
                        backgroundColor: isCompleted ? 'var(--accent-black)' : 'var(--color-border)',
                        marginTop: '12px',
                        minHeight: '60px'
                      }}
                    />
                  )}
                </div>

                {/* Timeline Content */}
                <div style={{ flex: 1, paddingBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
                        Bloco {block.id}: {block.title}
                      </h3>
                      {isCompleted && (
                        <span className="lp-pill lp-pill-black" style={{ padding: '3px 10px', fontSize: '0.68rem' }}>
                          Concluído
                        </span>
                      )}
                      {isInProgress && (
                        <span className="lp-pill lp-pill-orange" style={{ padding: '3px 10px', fontSize: '0.68rem' }}>
                          Em andamento
                        </span>
                      )}
                    </div>

                    <span style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--text-muted)' }}>
                      {completedCount} de {totalCount} aulas ({Math.round((completedCount/totalCount)*100)}%)
                    </span>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: '1.6', maxWidth: '820px' }}>
                    {block.description}
                  </p>

                  {/* Modules Pills in this Block */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', width: '100%', minWidth: 0 }}>
                    {blockModules.map((m) => {
                      const modStatus = getModuleStatus(m);
                      const isModDone = modStatus === 'completed';
                      const isModCurrent = modStatus === 'in_progress';

                      return (
                        <Link
                          key={m.id}
                          href={`/cursos/${m.id}`}
                          style={{
                            padding: '16px 20px',
                            borderRadius: '16px',
                            backgroundColor: isModDone ? 'var(--accent-black)' : isModCurrent ? 'var(--primary)' : '#FFFFFF',
                            color: isModDone || isModCurrent ? '#FFFFFF' : 'var(--text-dark)',
                            border: isModDone || isModCurrent ? 'none' : '1px solid var(--color-border)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            boxShadow: isModDone || isModCurrent ? 'var(--shadow-sm)' : 'none',
                            transition: 'all var(--transition-fast)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div>
                            <div 
                              style={{ 
                                fontSize: '0.68rem', 
                                fontWeight: '900', 
                                textTransform: 'uppercase', 
                                letterSpacing: '0.06em',
                                opacity: 0.85
                              }}
                            >
                              Módulo {m.number}
                            </div>
                            <div style={{ fontSize: '0.95rem', fontWeight: '800', letterSpacing: '-0.02em', marginTop: '2px' }}>
                              {m.title}
                            </div>
                          </div>
                          <ArrowRight size={16} color={isModDone || isModCurrent ? '#FFFFFF' : 'var(--text-dark)'} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

