import React from 'react';
import { motion } from 'framer-motion';
import { DELIVERABLES } from '../../utils/constants';
import './WhatYouGet.css';

export function WhatYouGet() {
  return (
    <section id="entregaveis" className="what-section section-padding">
      <div className="container">
        <div className="section-header-left">
          <span className="slash-category text-orange">/RECURSOS & ENTREGÁVEIS</span>
          <h2 className="section-title-large">Tudo o que você vai receber</h2>
          <p className="section-subtitle-text">
            Um ecossistema de aprendizado projetado para oferecer profundidade e autonomia.
          </p>
        </div>

        {/* Deliverables Grid - High Contrast Alternating Cards */}
        <div className="deliverables-grid-light">
          {DELIVERABLES.map((item, index) => {
            const isBlack = index % 2 === 0;
            return (
              <motion.div 
                key={item.title}
                className={isBlack ? 'card-solid-black deliverable-item-card' : 'card-solid-orange deliverable-item-card'}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <span className="slash-category text-white">
                  /ENTREGÁVEL 0{index + 1}
                </span>
                <div className="deliverable-content-body">
                  <h3 className="deliverable-card-title text-white">
                    {item.title}
                  </h3>
                  <p className="deliverable-card-desc text-gray">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
