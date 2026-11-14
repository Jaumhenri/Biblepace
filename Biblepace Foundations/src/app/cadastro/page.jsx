'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BiblePaceLogo from '@/components/ui/BiblePaceLogo';
import { register } from '@/services/auth';
import { useCourse } from '@/context/CourseContext';

export default function CadastroPage() {
  const router = useRouter();
  const { setUserSession } = useCourse();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const result = await register(name, email, password);
      if (setUserSession && result.user) {
        setUserSession(result.user);
      }
      router.push('/');
    } catch (err) {
      setErrorMessage(err.message || 'Erro ao realizar cadastro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '480px', margin: '40px auto', padding: '16px' }}>
      <div 
        style={{ 
          backgroundColor: '#FFFFFF', 
          border: '1px solid var(--color-border)', 
          borderRadius: 'var(--radius-card)', 
          padding: '48px 40px', 
          boxShadow: 'var(--shadow-card-white)', 
          textAlign: 'center' 
        }}
      >
        <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
          <BiblePaceLogo size={48} />
        </div>

        <span className="lp-pill lp-pill-orange" style={{ marginBottom: '12px' }}>
          Nova Inscrição
        </span>

        <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.04em', marginBottom: '8px' }}>
          Criar sua Conta
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.5' }}>
          Inicie sua jornada no BiblePace Foundations e construa fundamentos sólidos.
        </p>

        {errorMessage && (
          <div 
            style={{ 
              backgroundColor: '#FEF2F2', 
              border: '1px solid #FCA5A5', 
              color: '#991B1B', 
              padding: '12px 16px', 
              borderRadius: '10px', 
              fontSize: '0.88rem', 
              marginBottom: '20px',
              textAlign: 'left'
            }}
          >
            ⚠️ {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Ex: Pedro Lucas"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                border: '1px solid var(--color-border)', 
                borderRadius: '12px', 
                fontSize: '0.95rem', 
                outline: 'none', 
                color: 'var(--text-dark)',
                backgroundColor: 'var(--bg-card-gray)'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu.email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                border: '1px solid var(--color-border)', 
                borderRadius: '12px', 
                fontSize: '0.95rem', 
                outline: 'none', 
                color: 'var(--text-dark)',
                backgroundColor: 'var(--bg-card-gray)'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
              Senha (mínimo 6 caracteres)
            </label>
            <input
              type="password"
              placeholder="Crie uma senha segura"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={loading}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                border: '1px solid var(--color-border)', 
                borderRadius: '12px', 
                fontSize: '0.95rem', 
                outline: 'none', 
                color: 'var(--text-dark)',
                backgroundColor: 'var(--bg-card-gray)'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="lp-btn-black"
            style={{ 
              width: '100%', 
              padding: '16px', 
              marginTop: '10px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Cadastrando discípulo...' : 'Cadastrar e Iniciar Formação'}
          </button>
        </form>

        <div style={{ marginTop: '28px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Já possui conta?{' '}
          <Link href="/login" style={{ color: 'var(--primary)', fontWeight: '800' }}>
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
}
