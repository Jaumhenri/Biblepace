import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { TARGET_AUDIENCE } from '../../utils/constants';
import { Button } from '../common/Button';
import './TargetAudience.css';

export function TargetAudience() {
  return (
    <section id="sobre" className="target-section section-padding">
      <div className="container">
        <div className="section-header-left">
          <span className="slash-category text-orange">/PÚBLICO-ALVO</span>
          <h2 className="section-title-large">Para quem foi feito este curso?</h2>
          <p className="section-subtitle-text">
            O BiblePace Foundations atende com precisão quem busca construir fundamentos bíblicos sólidos.
          </p>
        </div>

        {/* 4 Cards Grid - High Contrast Alternating Cards */}
        <div className="target-grid-light">
          {TARGET_AUDIENCE.map((item, index) => {
            const isBlack = index % 2 === 0;
            return (
              <motion.div 
                key={item.number}
                className={isBlack ? 'card-solid-black target-item-card' : 'card-solid-orange target-item-card'}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="slash-category text-white">
                  /PERFIL {item.number}
                </span>
                <div className="target-card-body">
                  <h3 className="target-card-title text-white">
                    {item.title}
                  </h3>
                  <p className="target-card-desc text-gray">
                    {item.description}
                  </p>
                </div>
                <div className="target-card-footer">
                  <a href="#oferta">
                    <Button variant={isBlack ? 'white' : 'black'} size="sm" icon={ArrowUpRight}>
                      ACESSAR CONTEÚDO
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
