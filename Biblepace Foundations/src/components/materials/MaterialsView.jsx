'use client';

import React, { useState } from 'react';
import { FileText, Download, Search, BookOpen, Sparkles } from 'lucide-react';
import { MODULES_DATA, BLOCKS_DATA } from '@/data/curriculumData';

export default function MaterialsView({ 
  title = "Biblioteca de Discipulado", 
  subtitle = "Acesse e baixe todas as 24 apostilas teológicas oficiais, a apostila mestre e os cadernos práticos de autoexame." 
}) {
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Master Apostila
  const masterMaterial = {
    id: 'apostila-master',
    title: 'Apostila Completa — BiblePace Foundations',
    description: 'Documento completo de 52 páginas com todos os 24 módulos, 6 blocos pedagógicos, perguntas de autoexame, versículos para memorização e desafios semanais de discipulado.',
    size: '8,7 MB',
    pages: 52
  };

  // The 24 module apostilas
  const moduleMaterials = MODULES_DATA.map(m => ({
    id: `mod-${m.id}`,
    title: m.material.title,
    description: `Material de estudo sistemático e aplicação prática para o Módulo ${m.number}: ${m.title}. Versículo-chave: ${m.verse.ref}.`,
    blockId: m.blockId,
    size: m.material.size,
    pages: m.material.pages,
    moduleNumber: m.number,
    verseRef: m.verse.ref
  }));

  const filteredModules = moduleMaterials.filter(item => {
    const matchesBlock = selectedBlock === 'all' || item.blockId === Number(selectedBlock);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.verseRef.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBlock && matchesSearch;
  });

  const showMaster = (selectedBlock === 'all' || selectedBlock === 'master') && 
                     (masterMaterial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      masterMaterial.description.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* LP Header Section */}
      <div className="lp-header-section">
        <div className="lp-pill lp-pill-black">
          <BookOpen size={13} />
          <span>Biblioteca de Materiais Oficiais</span>
        </div>
        <h1 className="lp-title">
          {title}
        </h1>
        <p className="lp-subtitle">
          {subtitle}
        </p>
      </div>

      {/* Featured Master Apostila Card (Solid Flat Black matching LP) */}
      {showMaster && (
        <div
          style={{
            backgroundColor: 'var(--accent-black)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '40px',
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
                width: 60,
                height: 60,
                borderRadius: '16px',
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '4px'
              }}
            >
              <FileText size={30} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="lp-pill lp-pill-orange">
                  <Sparkles size={12} />
                  <span>Material Mestre Oficial</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: '800' }}>
                  {masterMaterial.pages} páginas • {masterMaterial.size}
                </span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: '900', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
                {masterMaterial.title}
              </h2>

              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', maxWidth: '780px' }}>
                {masterMaterial.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => alert(`Iniciando download da Apostila Completa (PDF • 52 páginas)`)}
            className="lp-btn-orange"
            style={{ padding: '16px 32px', fontSize: '0.85rem' }}
          >
            <Download size={17} />
            <span>Baixar Apostila Completa</span>
          </button>
        </div>
      )}

      {/* Search and Filters Bar with LP styling */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
          <button
            onClick={() => setSelectedBlock('all')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: '800',
              border: selectedBlock === 'all' ? '1.5px solid var(--accent-black)' : '1px solid var(--color-border)',
              backgroundColor: selectedBlock === 'all' ? 'var(--accent-black)' : '#FFFFFF',
              color: selectedBlock === 'all' ? '#FFFFFF' : 'var(--text-dark)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all var(--transition-fast)'
            }}
          >
            Todos os Materiais ({moduleMaterials.length + 1})
          </button>

          {BLOCKS_DATA.map(b => {
            const isSelected = selectedBlock === String(b.id);
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBlock(String(b.id))}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  whiteSpace: 'nowrap',
                  border: isSelected ? '1.5px solid var(--accent-black)' : '1px solid var(--color-border)',
                  backgroundColor: isSelected ? 'var(--accent-black)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-dark)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                Bloco {b.id}: {b.shortTitle}
              </button>
            );
          })}
        </div>

        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            backgroundColor: '#FFFFFF', 
            border: '1px solid var(--color-border)', 
            borderRadius: 'var(--radius-pill)', 
            padding: '10px 20px', 
            width: '320px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Search size={16} color="var(--primary)" />
          <input
            type="text"
            placeholder="Buscar por módulo ou tema..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem', color: 'var(--text-dark)' }}
          />
        </div>
      </div>

      {/* Module Materials Grid with Generous Spacing */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', width: '100%', minWidth: 0 }}>
        {filteredModules.map(item => (
          <div
            key={item.id}
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span 
                  style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: '900', 
                    color: 'var(--primary)', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  Módulo {item.moduleNumber} • Bloco {item.blockId}
                </span>

                <span 
                  style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: '800', 
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-card-gray)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-pill)'
                  }}
                >
                  {item.verseRef}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    backgroundColor: 'var(--accent-black)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <FileText size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '16px' }}>
                {item.description}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '700', marginBottom: '16px', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                <span>PDF Oficial • {item.pages} páginas</span>
                <span>{item.size}</span>
              </div>

              <button
                onClick={() => alert(`Iniciando download: ${item.title}`)}
                className="lp-btn-black"
                style={{ width: '100%', padding: '12px 20px', fontSize: '0.78rem' }}
              >
                <Download size={15} />
                <span>Baixar Apostila</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

