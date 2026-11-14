import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../../utils/constants';
import './FAQ.css';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="section-header-left">
          <span className="slash-category text-orange">/DÚVIDAS FREQUENTES</span>
          <h2 className="section-title-large">Perguntas Frequentes</h2>
          <p className="section-subtitle-text">
            Tudo o que você precisa saber antes de iniciar sua jornada.
          </p>
        </div>

        <div className="faq-list-light">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={item.question}
                className={`faq-card-light ${isOpen ? 'is-open' : ''}`}
              >
                <button 
                  className="faq-question-button"
                  onClick={() => toggleIndex(index)}
                >
                  <span className="faq-question-label">{item.question}</span>
                  <div className="faq-chevron">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="faq-answer-content">{item.answer}</p>
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
