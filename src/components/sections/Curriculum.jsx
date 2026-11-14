import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CURRICULUM_BLOCKS } from '../../utils/constants';
import './Curriculum.css';

export function Curriculum() {
  const [openBlockId, setOpenBlockId] = useState(1);

  const toggleBlock = (id) => {
    setOpenBlockId(openBlockId === id ? null : id);
  };

  return (
    <section id="grade" className="curriculum-section section-padding">
      <div className="container">
        <div className="section-header-left">
          <span className="slash-category text-orange">/GRADE CURRICULAR</span>
          <h2 className="section-title-large">24 Módulos em 6 Blocos Estruturados</h2>
          <p className="section-subtitle-text">
            Clique em cada bloco para explorar o plano de ensino completo do BiblePace Foundations.
          </p>
        </div>

        <div className="curriculum-list-light">
          {CURRICULUM_BLOCKS.map((block) => {
            const isOpen = openBlockId === block.id;

            return (
              <div 
                key={block.id}
                className={`block-accordion-card ${isOpen ? 'is-open' : ''}`}
              >
                <button 
                  className="block-accordion-header"
                  onClick={() => toggleBlock(block.id)}
                >
                  <div className="block-header-info">
                    <span className="block-pill-badge">{block.badge}</span>
                    <div>
                      <h3 className="block-title-text">{block.title}</h3>
                      <p className="block-sub-text">{block.description}</p>
                    </div>
                  </div>

                  <div className="block-header-meta">
                    <span className="modules-pill-tag">{block.modules.length} MÓDULOS</span>
                    <div className="chevron-box">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="block-accordion-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="modules-grid-light">
                        {block.modules.map((m) => (
                          <div key={m.code} className="module-item-box">
                            <div className="module-top-row">
                              <span className="module-code-tag">{m.code}</span>
                              <span className="module-verse-quote">{m.keyText}</span>
                            </div>
                            <h4 className="module-name">{m.title}</h4>
                            <p className="module-desc-text">{m.topic}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
