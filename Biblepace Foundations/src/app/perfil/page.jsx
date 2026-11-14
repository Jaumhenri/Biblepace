'use client';

import React from 'react';
import Link from 'next/link';
import { 
  User, 
  Mail, 
  Calendar, 
  Flame, 
  Award, 
  BookOpen, 
  CheckCircle,
  FileText,
  ArrowRight,
  LogOut
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCourse } from '@/context/CourseContext';
import { MODULES_DATA } from '@/data/curriculumData';

export default function PerfilPage() {
  const router = useRouter();
  const { 
    user, 
    logoutUser,
    totalLessons, 
    totalCompletedLessons, 
    overallPercentage,
    completedChallenges,
    notebookNotes
  } = useCourse();

  const handleLogout = () => {
    logoutUser();
    router.push('/login');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* LP Header Section */}
      <div className="lp-header-section">
        <div className="lp-pill lp-pill-black">
          <User size={13} />
          <span>Perfil do Discípulo • BiblePace Foundations</span>
        </div>
        <h1 className="lp-title">
          Meu Perfil e Estatísticas de Ritmo
        </h1>
        <p className="lp-subtitle">
          Informações da sua matrícula, constância bíblica diária, desafios práticos concluídos e histórico de anotações pessoais.
        </p>
      </div>

      {/* Profile Header Card */}
      <div
        className="lp-card-white"
        style={{
          padding: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--space-lg)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--accent-black)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: '900',
              flexShrink: 0
            }}
          >
            {user.initials}
          </div>

          <div>
            <span className="lp-pill lp-pill-orange" style={{ marginBottom: '8px', padding: '3px 10px', fontSize: '0.68rem' }}>
              Membro Ativo
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.03em' }}>
              {user.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '8px', fontSize: '0.88rem', color: 'var(--text-muted)', flexWrap: 'wrap', fontWeight: '600' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--primary)" />
                {user.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="var(--primary)" />
                Início: {user.enrolledDate}
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <Link
            href="/certificados"
            className="lp-btn-black"
            style={{ padding: '14px 28px', fontSize: '0.82rem' }}
          >
            <Award size={16} />
            <span>Ver Certificados</span>
          </Link>
          <button
            onClick={handleLogout}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 24px',
              fontSize: '0.82rem',
              fontWeight: '800',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid #FCA5A5',
              backgroundColor: '#FEF2F2',
              color: '#DC2626',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <LogOut size={16} />
            <span>Sair da Conta</span>
          </button>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', width: '100%', minWidth: 0 }}>
        <div className="lp-card-white" style={{ padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '-0.04em' }}>
            🔥 {user.streakDays}
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-dark)', marginTop: '6px' }}>
            Dias Consecutivos
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '600' }}>
            Ritmo contínuo na Palavra
          </div>
        </div>

        <div className="lp-card-white" style={{ padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.04em' }}>
            {totalCompletedLessons} / {totalLessons}
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-dark)', marginTop: '6px' }}>
            Aulas Concluídas ({overallPercentage}%)
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '600' }}>
            Em 24 módulos formativos
          </div>
        </div>

        <div className="lp-card-white" style={{ padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '-0.04em' }}>
            {completedChallenges.length}
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-dark)', marginTop: '6px' }}>
            Desafios Práticos
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '600' }}>
            Compromissos semanais cumpridos
          </div>
        </div>
      </div>

      {/* Caderno do Aluno / Anotações Salvas */}
      <div 
        style={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid var(--color-border)', 
          borderRadius: 'var(--radius-card)', 
          padding: '44px 40px',
          boxShadow: 'var(--shadow-card-white)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--space-xl)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-md)' }}>
          <div>
            <span className="lp-pill lp-pill-orange" style={{ marginBottom: '8px' }}>
              Memória de Estudo
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={22} color="var(--primary)" />
              <span>Suas Anotações no Caderno do Discípulo</span>
            </h2>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>
            {Object.keys(notebookNotes).length} notas salvas
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {Object.entries(notebookNotes).length === 0 ? (
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Você ainda não fez nenhuma anotação. Abra qualquer aula para fazer anotações no seu caderno!
            </p>
          ) : (
            Object.entries(notebookNotes).map(([modId, noteText]) => {
              const mod = MODULES_DATA.find(m => m.id === Number(modId));
              return (
                <div 
                  key={modId} 
                  className="notebook-paper"
                  style={{ 
                    padding: '24px 28px',
                    borderRadius: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '900', 
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}
                    >
                      Módulo {mod?.number}: {mod?.title}
                    </span>
                    <Link 
                      href={`/cursos/${modId}`} 
                      style={{ 
                        fontSize: '0.8rem', 
                        color: 'var(--text-dark)', 
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>Abrir Módulo</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
                    {noteText}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

