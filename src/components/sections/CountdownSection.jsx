import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Bell, CheckCircle2, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import './CountdownSection.css';

export function CountdownSection() {
  // Target date: December 1st
  const getTargetDate = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), 11, 1, 0, 0, 0); // Month 11 is December
    if (now > target) {
      target = new Date(now.getFullYear() + 1, 11, 1, 0, 0, 0);
    }
    return target;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const target = getTargetDate();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('biblepace_waitlist') || '[]');
      existing.push({ name, email, date: new Date().toISOString() });
      localStorage.setItem('biblepace_waitlist', JSON.stringify(existing));
    } catch (e) {
      // ignore
    }

    setSubmitted(true);
  };

  return (
    <section id="contagem" className="countdown-section section-padding">
      <div className="container">
        <div className="countdown-banner-card">
          <div className="countdown-header-block">
            <div className="pill-tag-launch">
              <Clock size={15} />
              <span>LANÇAMENTO OFICIAL • 1º DE DEZEMBRO</span>
            </div>

            <h2 className="countdown-main-title">
              A contagem regressiva para a plataforma começou
            </h2>

            <p className="countdown-desc">
              Estamos finalizando a experiência completa do <strong>BiblePace Foundations</strong>. 
              No dia <strong>1 de Dezembro</strong>, o portal será oficialmente liberado para os membros.
            </p>
          </div>

          {/* Numbers Grid */}
          <div className="countdown-clock-grid">
            <div className="clock-tile">
              <span className="clock-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="clock-label">DIAS</span>
            </div>
            <div className="clock-separator">:</div>
            <div className="clock-tile">
              <span className="clock-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="clock-label">HORAS</span>
            </div>
            <div className="clock-separator">:</div>
            <div className="clock-tile">
              <span className="clock-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="clock-label">MINUTOS</span>
            </div>
            <div className="clock-separator">:</div>
            <div className="clock-tile highlight">
              <span className="clock-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="clock-label">SEGUNDOS</span>
            </div>
          </div>

          {/* VIP Waitlist Box */}
          <div className="waitlist-card">
            {submitted ? (
              <motion.div 
                className="waitlist-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon-wrap">
                  <CheckCircle2 size={36} color="#10B981" />
                </div>
                <h3>Você está na Lista VIP de Lançamento!</h3>
                <p>
                  Assim que o relógio zerar no dia <strong>1º de Dezembro</strong>, 
                  enviaremos seu link de acesso com condição exclusiva para <strong>{email}</strong>.
                </p>
              </motion.div>
            ) : (
              <div>
                <div className="waitlist-prompt">
                  <div className="waitlist-badge">
                    <Sparkles size={14} />
                    <span>ACESSO ANTECIPADO EXCLUSIVO</span>
                  </div>
                  <h3>Seja o primeiro a entrar na plataforma</h3>
                  <p>
                    Cadastre-se na lista de espera para receber o aviso de abertura e garantir 
                    bônus exclusivos no dia 1 de Dezembro.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="waitlist-form">
                  <input
                    type="text"
                    placeholder="Seu primeiro nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="waitlist-input"
                  />
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="waitlist-input"
                  />
                  <button type="submit" className="waitlist-submit-btn">
                    <Bell size={18} />
                    <span>AVISE-ME NO LANÇAMENTO</span>
                  </button>
                </form>

                <div className="waitlist-guarantee">
                  <Shield size={14} />
                  <span>Sem spam. Seus dados estão 100% seguros. Apenas o convite oficial de abertura.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

