import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Large Clean Header */}
        <div className="hero-text-block">
          <motion.h1 
            className="hero-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Bem-vindo ao <br className="hidden-mobile" />
            <span className="hero-brand-orange">BiblePace Foundations</span>
          </motion.h1>

          <motion.p 
            className="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Aprenda a fundamentar sua fé com clareza, viver o Evangelho no cotidiano e otimizar seu ritmo devocional em 24 módulos práticos.
          </motion.p>
        </div>

        {/* Dual Featured Block Cards */}
        <div className="hero-featured-grid">
          {/* Card 1: Pitch Black Block Card */}
          <motion.div 
            className="card-solid-black hero-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="slash-category text-orange">/CURSO COMPLETO</span>
            <div className="hero-card-content">
              <h2 className="hero-card-title text-white">Grade de 24 Módulos</h2>
              <p className="hero-card-desc text-gray">
                Uma formação bíblica completa em 6 blocos: Fundamentos, Identidade, Disciplinas Espirituais, Desafios da Juventude, Cosmovisão e Missões.
              </p>
              <a href="#grade">
                <Button variant="white" size="md" icon={ArrowUpRight}>
                  VER GRADE CURRICULAR
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Solid Orange Block Card */}
          <motion.div 
            className="card-solid-orange hero-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="slash-category text-white">/LANÇAMENTO OFICIAL</span>
            <div className="hero-card-content">
              <h2 className="hero-card-title text-white">Abertura em 01 de Dezembro</h2>
              <p className="hero-card-desc text-gray">
                A plataforma está em contagem regressiva final. Inscreva-se na lista VIP para receber o acesso em primeira mão assim que o portal for ao ar.
              </p>
              <a href="#contagem">
                <Button variant="black" size="md" icon={ArrowUpRight}>
                  ENTRAR NA LISTA VIP
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
