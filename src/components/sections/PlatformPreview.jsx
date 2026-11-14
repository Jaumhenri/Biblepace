import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, PlayCircle } from 'lucide-react';
import { SAMPLE_MODULE_PREVIEW } from '../../utils/constants';
import { Button } from '../common/Button';
import './PlatformPreview.css';

export function PlatformPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="plataforma" className="platform-section section-padding">
      <div className="container">
        <div className="section-header-left">
          <span className="slash-category text-orange">/PLATAFORMA</span>
          <h2 className="section-title-large">Conheça a experiência por dentro</h2>
          <p className="section-subtitle-text">
            Veja como cada módulo é disponibilizado com visão geral, aplicação prática e apostilas.
          </p>
        </div>

        {/* Clean Light Browser Window */}
        <motion.div 
          className="platform-window-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Browser Bar */}
          <div className="window-header-light">
            <div className="window-dots">
              <span className="dot dot-gray" />
              <span className="dot dot-gray" />
              <span className="dot dot-gray" />
            </div>
            <div className="window-url-light">app.biblepace.com/foundations/modulo-01</div>
            <div className="window-badge-light">ACESSO ALUNO</div>
          </div>

          {/* Platform Body Layout */}
          <div className="platform-body-light">
            {/* Sidebar list */}
            <div className="mock-sidebar-light">
              <span className="slash-category text-orange">/CONTEÚDO</span>
              <div className="mock-item-light active">01 · Por que confiar na Bíblia?</div>
              <div className="mock-item-light">02 · O Evangelho</div>
              <div className="mock-item-light">03 · O Plano de Salvação</div>
              <div className="mock-item-light">04 · Quem é Jesus?</div>
              <div className="mock-item-light">05 · Identidade em Cristo</div>
            </div>

            {/* Main Reading View */}
            <div className="mock-content-light">
              <div className="module-banner-light">
                <span className="module-block-tag">{SAMPLE_MODULE_PREVIEW.block}</span>
                <h3 className="module-banner-title">{SAMPLE_MODULE_PREVIEW.code} — {SAMPLE_MODULE_PREVIEW.title}</h3>
                <p className="module-verse-quote">"{SAMPLE_MODULE_PREVIEW.verse}"</p>
              </div>

              {/* Navigation Pill Tabs */}
              <div className="mock-pills-row">
                <button 
                  className={`pill-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Visão Geral & Ideia Central
                </button>
                <button 
                  className={`pill-tab ${activeTab === 'reflections' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reflections')}
                >
                  Perguntas de Reflexão
                </button>
                <button 
                  className={`pill-tab ${activeTab === 'challenge' ? 'active' : ''}`}
                  onClick={() => setActiveTab('challenge')}
                >
                  Desafio da Semana
                </button>
              </div>

              {/* Dynamic Content */}
              <div className="mock-tab-panel">
                {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="light-box gray-box">
                      <h4 className="box-title">OBJETIVO DO MÓDULO</h4>
                      <p>{SAMPLE_MODULE_PREVIEW.objective}</p>
                    </div>

                    <div className="light-box orange-box">
                      <h4 className="box-title text-white">IDEIA CENTRAL</h4>
                      <p className="text-white-bold">"{SAMPLE_MODULE_PREVIEW.centralIdea}"</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'reflections' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="light-box gray-box">
                      <h4 className="box-title">QUESTÕES PARA ESTUDO</h4>
                      <ol className="reflection-numbers">
                        {SAMPLE_MODULE_PREVIEW.reflections.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'challenge' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="light-box black-box">
                      <h4 className="box-title text-white">DESAFIO PRÁTICO</h4>
                      <p className="text-white">{SAMPLE_MODULE_PREVIEW.weeklyChallenge}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Action Toolbar */}
              <div className="mock-action-bar">
                <Button variant="black" size="sm" icon={PlayCircle}>
                  ASSISTIR VIDEOAULA
                </Button>
                <Button variant="orange" size="sm" icon={FileText}>
                  BAIXAR APOSTILA PDF
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
