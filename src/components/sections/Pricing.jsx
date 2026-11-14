import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PRICING_DATA, COURSE_TITLE, COURSE_SUBTITLE } from '../../utils/constants';
import { Button } from '../common/Button';
import './Pricing.css';

export function Pricing() {
  return (
    <section id="oferta" className="pricing-section section-padding">
      <div className="container">
        <div className="section-header-left">
          <span className="slash-category text-orange">/INSCRIÇÃO & GARANTIA</span>
          <h2 className="section-title-large">Garanta sua vaga hoje</h2>
        </div>

        {/* Solid Pitch Black Offer Block Card */}
        <motion.div
          className="card-solid-black pricing-block-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="slash-category text-orange">/OFERTA ESPECIAL DE LANÇAMENTO</span>

          <div className="pricing-top-info">
            <h3 className="pricing-title-large">{COURSE_TITLE}</h3>
            <p className="pricing-subtitle-text">{COURSE_SUBTITLE}</p>
          </div>

          <div className="pricing-middle-content">
            <div className="pricing-amount-group">
              <span className="pricing-old-price">De {PRICING_DATA.originalPrice} por apenas</span>
              <div className="pricing-main-price">
                <span className="currency">R$</span>
                <span className="amount">39</span>
                <span className="cents">,90</span>
              </div>
              <span className="pricing-installment-tag">ou em até <strong>{PRICING_DATA.installments}</strong></span>
            </div>

            <div className="pricing-benefits-list">
              {PRICING_DATA.benefits.map((benefit) => (
                <div key={benefit} className="benefit-row">
                  <span className="check-bullet">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pricing-bottom-actions">
            <a href="#contagem" style={{ width: '100%', textDecoration: 'none' }}>
              <Button variant="orange" size="lg" icon={ArrowUpRight} className="w-full">
                ENTRAR NA LISTA VIP PARA O DIA 01/DEZ
              </Button>
            </a>
            <div className="guarantee-note">
              <ShieldCheck size={16} /> <strong>Condição especial garantida</strong> para quem estiver inscrito na lista de espera.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
