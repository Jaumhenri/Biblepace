'use client';

import React from 'react';
import { Award, Download, CheckCircle, Lock, ShieldCheck } from 'lucide-react';
import BiblePaceLogo from '@/components/ui/BiblePaceLogo';
import { BLOCKS_DATA, MODULES_DATA } from '@/data/curriculumData';
import { useCourse } from '@/context/CourseContext';

export default function CertificadosPage() {
  const { user, getModuleCompletedCount } = useCourse();

  // Check which blocks are completed
  const blocksWithStatus = BLOCKS_DATA.map(block => {
    const blockModules = MODULES_DATA.filter(m => m.blockId === block.id);
    const totalLessons = blockModules.reduce((acc, m) => acc + m.lessons.length, 0);
    const completedLessons = blockModules.reduce((acc, m) => acc + getModuleCompletedCount(m), 0);
    const isCompleted = completedLessons === totalLessons;

    return {
      ...block,
      totalLessons,
      completedLessons,
      isCompleted
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* LP Header Section */}
      <div className="lp-header-section">
        <div className="lp-pill lp-pill-black">
          <Award size={13} />
          <span>Certificação Oficial de Discipulado</span>
        </div>
        <h1 className="lp-title">
          Certificados de Conclusão e Formação
        </h1>
        <p className="lp-subtitle">
          Diplomas oficiais emitidos pelo BiblePace Foundations atestando a conclusão integral dos blocos temáticos e a maturidade bíblica prática.
        </p>
      </div>

      {/* Master Certificate Banner (Solid Flat Black matching LP) */}
      <div
        style={{
          backgroundColor: 'var(--accent-black)',
          borderRadius: 'var(--radius-card)',
          padding: '44px 40px',
          color: '#FFFFFF',
          boxShadow: 'var(--shadow-card-black)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--space-lg)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flex: '1 1 280px', minWidth: 0 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: '16px',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '4px'
            }}
          >
            <ShieldCheck size={36} color="#FFFFFF" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span 
              className="lp-pill lp-pill-orange"
            >
              Diploma Master de Formação
            </span>

            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              BiblePace Foundations — 24 Módulos
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', maxWidth: '640px' }}>
              Diploma completo emitido em nome de <strong>{user.name}</strong> após o cumprimento dos 6 blocos pedagógicos, 144 aulas e comprovação prática no discipulado.
            </p>
          </div>
        </div>

        <button
          onClick={() => alert(`Certificado Master em andamento. Conclua os módulos restantes para emissão do diploma oficial de ${user.name}!`)}
          style={{
            padding: '14px 28px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: '#222222',
            color: '#FFFFFF',
            fontSize: '0.82rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'not-allowed',
            border: '1px solid #333333'
          }}
        >
          <Lock size={16} />
          <span>Em Andamento (14/144 Aulas)</span>
        </button>
      </div>

      {/* Block Certificates Grid */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--space-lg)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-md)' }}>
          <div>
            <span className="lp-pill lp-pill-orange" style={{ marginBottom: '8px' }}>
              Por Etapa Cumprida
            </span>
            <h2 style={{ fontSize: '1.65rem', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-dark)' }}>
              Certificados dos 6 Blocos Temáticos
            </h2>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>
            Emissão individual por bloco
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', width: '100%', minWidth: 0 }}>
          {blocksWithStatus.map((block) => (
            <div
              key={block.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-card)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card-white)',
                transition: 'all var(--transition-fast)',
                gap: '20px'
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
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: '14px',
                      backgroundColor: block.isCompleted ? 'var(--primary)' : 'var(--accent-black)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Award size={26} />
                  </div>

                  {block.isCompleted ? (
                    <span 
                      className="lp-pill lp-pill-orange"
                      style={{ padding: '4px 12px' }}
                    >
                      Disponível
                    </span>
                  ) : (
                    <span 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '800', 
                        color: 'var(--text-muted)', 
                        backgroundColor: 'var(--bg-card-gray)',
                        padding: '4px 12px', 
                        borderRadius: 'var(--radius-pill)' 
                      }}
                    >
                      {block.completedLessons} de {block.totalLessons} aulas
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '0.72rem', fontWeight: '900', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Bloco {block.id}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  {block.shortTitle}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '16px' }}>
                  {block.description}
                </p>
              </div>

              <div>
                <button
                  disabled={!block.isCompleted}
                  onClick={() => {
                    if (block.isCompleted) {
                      alert(`Baixando certificado oficial de ${user.name} para o Bloco ${block.id}: ${block.shortTitle}!`);
                    }
                  }}
                  className={block.isCompleted ? 'lp-btn-orange' : 'lp-btn-black'}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    fontSize: '0.78rem',
                    cursor: block.isCompleted ? 'pointer' : 'not-allowed',
                    opacity: block.isCompleted ? 1 : 0.4
                  }}
                >
                  {block.isCompleted ? (
                    <>
                      <Download size={16} />
                      <span>Baixar Certificado Oficial (PDF)</span>
                    </>
                  ) : (
                    <>
                      <Lock size={15} />
                      <span>Complete o Bloco {block.id} ({block.completedLessons}/{block.totalLessons})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

