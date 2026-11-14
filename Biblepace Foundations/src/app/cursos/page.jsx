'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, ChevronRight, Check, Lock, BookOpen, ArrowRight } from 'lucide-react';
import { BLOCKS_DATA, MODULES_DATA } from '@/data/curriculumData';
import { useCourse } from '@/context/CourseContext';

export default function CursosPage() {
  const { getModuleStatus, getModuleCompletedCount } = useCourse();
  const [activeBlockTab, setActiveBlockTab] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* LP Header Section */}
      <div className="lp-header-section">
        <div className="lp-pill lp-pill-black">
          <Layers size={13} />
          <span>Grade Curricular Oficial • 144 Aulas</span>
        </div>
        <h1 className="lp-title">
          24 Módulos em 6 Blocos Pedagógicos
        </h1>
        <p className="lp-subtitle">
          Um itinerário bíblico completo e sistemático para edificar fundamentos inabaláveis na fé, na oração, na teologia bíblica e na missão diária.
        </p>
      </div>

      {/* Blocks Grid / Tabs */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-dark)' }}>
            Selecione o Bloco Temático
          </h2>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            6 Blocos de Maturidade
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 'var(--space-md)', width: '100%', minWidth: 0 }}>
          {BLOCKS_DATA.map((block) => {
            const blockModules = MODULES_DATA.filter(m => m.blockId === block.id);
            const totalLessonsInBlock = blockModules.reduce((acc, m) => acc + m.lessons.length, 0);
            const completedLessonsInBlock = blockModules.reduce((acc, m) => acc + getModuleCompletedCount(m), 0);
            const blockPercent = Math.round((completedLessonsInBlock / totalLessonsInBlock) * 100);
            const isSelected = activeBlockTab === block.id;

            return (
              <div
                key={block.id}
                onClick={() => setActiveBlockTab(block.id)}
                style={{
                  backgroundColor: isSelected ? 'var(--accent-black)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-dark)',
                  border: isSelected ? '1.5px solid var(--accent-black)' : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: '28px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isSelected ? 'var(--shadow-card-black)' : 'var(--shadow-card-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: '900', 
                        color: 'var(--primary)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.08em' 
                      }}
                    >
                      Bloco {block.id}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '0.82rem', 
                        fontWeight: '900',
                        color: isSelected ? '#FFFFFF' : 'var(--text-dark)',
                        backgroundColor: isSelected ? '#222222' : 'var(--bg-card-gray)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      {blockPercent}% Concluído
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                    {block.shortTitle}
                  </h3>
                  <p style={{ fontSize: '0.88rem', lineHeight: '1.55', color: isSelected ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-muted)' }}>
                    {block.description}
                  </p>
                </div>

                <div>
                  <div style={{ height: '6px', backgroundColor: isSelected ? '#262626' : '#E5E7EB', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        backgroundColor: 'var(--primary)', 
                        width: `${blockPercent}%`,
                        transition: 'width 0.4s ease'
                      }} 
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.75rem', fontWeight: '800', opacity: 0.8 }}>
                    <span>4 Módulos</span>
                    <span>{completedLessonsInBlock}/{totalLessonsInBlock} Aulas</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modules of the selected block */}
      {BLOCKS_DATA.filter(b => b.id === activeBlockTab).map((block) => {
        const blockModules = MODULES_DATA.filter(m => m.blockId === block.id);

        return (
          <div key={block.id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-md)' }}>
              <div>
                <span className="lp-pill lp-pill-orange" style={{ marginBottom: '8px' }}>
                  Bloco {block.id} Ativo
                </span>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '-0.04em', color: 'var(--text-dark)' }}>
                  {block.title}
                </h2>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>
                4 módulos • 24 aulas completas
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {blockModules.map((module) => {
                const status = getModuleStatus(module);
                const completedCount = getModuleCompletedCount(module);
                const isCompleted = status === 'completed';
                const isInProgress = status === 'in_progress';

                return (
                  <Link
                    key={module.id}
                    href={`/cursos/${module.id}`}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-card)',
                      padding: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: 'var(--text-dark)',
                      boxShadow: 'var(--shadow-card-white)',
                      transition: 'all var(--transition-fast)',
                      gap: 'var(--space-lg)',
                      flexWrap: 'wrap'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-black)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-card-white)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flex: '1 1 280px', minWidth: 0 }}>
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: '14px',
                          backgroundColor: isCompleted ? 'var(--accent-black)' : isInProgress ? 'var(--primary)' : 'var(--bg-card-gray)',
                          color: isCompleted || isInProgress ? '#FFFFFF' : 'var(--text-dark)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        {isCompleted ? (
                          <Check size={24} strokeWidth={3} />
                        ) : isInProgress ? (
                          <BookOpen size={24} />
                        ) : (
                          <Lock size={20} />
                        )}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                          <span 
                            style={{ 
                              fontSize: '0.72rem', 
                              fontWeight: '900', 
                              color: 'var(--primary)', 
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em'
                            }}
                          >
                            Módulo {module.number} de 24
                          </span>
                          <span 
                            style={{ 
                              fontSize: '0.75rem', 
                              color: 'var(--text-muted)', 
                              fontWeight: '700',
                              backgroundColor: 'var(--bg-card-gray)',
                              padding: '2px 8px',
                              borderRadius: 'var(--radius-pill)'
                            }}
                          >
                            {module.verse.ref}
                          </span>
                        </div>

                        <h3 style={{ fontSize: '1.35rem', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-dark)' }}>
                          {module.title}
                        </h3>

                        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.55', maxWidth: '780px' }}>
                          {module.objective}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0, marginLeft: 'auto' }}>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--text-dark)' }}>
                          {completedCount} de 6 aulas
                        </div>
                        <div 
                          style={{ 
                            fontSize: '0.75rem', 
                            color: isCompleted ? 'var(--accent-black)' : isInProgress ? 'var(--primary)' : 'var(--text-subtle)', 
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            marginTop: '2px'
                          }}
                        >
                          {isCompleted ? 'Concluído' : isInProgress ? 'Em andamento' : 'Bloqueado'}
                        </div>
                      </div>

                      <div 
                        className={isInProgress ? 'lp-btn-orange' : 'lp-btn-black'}
                        style={{ padding: '10px 18px', fontSize: '0.75rem' }}
                      >
                        <span>Acessar</span>
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

