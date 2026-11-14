import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PILLARS } from '../../utils/constants';
import { Button } from '../common/Button';
import './Pillars.css';

export function Pillars() {
  return (
    <section id="pilares" className="pillars-section section-padding">
      <div className="container">
        <div className="section-header-left">
          <span className="slash-category text-orange">/METODOLOGIA</span>
          <h2 className="section-title-large">Os 3 Pilares do BiblePace</h2>
          <p className="section-subtitle-text">
            Como a nossa estrutura garante aprendizado profundo e transformação real.
          </p>
        </div>

        <div className="pillars-grid-light">
          {PILLARS.map((pillar, index) => {
            const isBlackCard = index === 1; // Middle card is solid black for contrast!
            
            return (
              <motion.div 
                key={pillar.title}
                className={isBlackCard ? 'card-solid-black pillar-item-card' : 'card-solid-orange pillar-item-card'}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
              >
                <span className="slash-category text-white">
                  /PILAR 0{index + 1}
                </span>

                <div className="pillar-card-content">
                  <h3 className="pillar-title text-white">
                    {pillar.title}
                  </h3>
                  <h4 className={isBlackCard ? 'pillar-subtitle text-orange-light' : 'pillar-subtitle text-dark'}>
                    {pillar.subtitle}
                  </h4>
                  <p className="pillar-desc text-gray">
                    {pillar.description}
                  </p>
                </div>

                <div className="pillar-card-footer">
                  <a href="#grade">
                    <Button variant={isBlackCard ? 'white' : 'black'} size="sm" icon={ArrowUpRight}>
                      SAIBA MAIS
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
