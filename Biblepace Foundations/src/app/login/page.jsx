'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BiblePaceLogo from '@/components/ui/BiblePaceLogo';
import { login } from '@/services/auth';
import { useCourse } from '@/context/CourseContext';

export default function LoginPage() {
  const router = useRouter();
  const { setUserSession } = useCourse();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const result = await login(email, password);
      if (setUserSession && result.user) {
        setUserSession(result.user);
      }
      router.push('/');
    } catch (err) {
      setErrorMessage(err.message || 'Erro ao realizar login. Verifique seus dados.');
    } finally {
      setLoading(false);
    }
  };

  const fillTestCredentials = () => {
    setEmail('joao.pedro@biblepace.com');
    setPassword('12345678');
    setErrorMessage('');
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

        <span className="lp-pill lp-pill-black" style={{ marginBottom: '12px' }}>
          Plataforma de Membros
        </span>

        <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--text-dark)', letterSpacing: '-0.04em', marginBottom: '8px' }}>
          Entrar no BiblePace
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.5' }}>
          Acesse sua formação bíblica e continue seu ritmo diário na Palavra.
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
              E-mail do Discípulo
            </label>
            <input
              type="email"
              value={email}
              placeholder="seu.email@exemplo.com"
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Senha
              </label>
            </div>
            <input
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            disabled={loading}
            className="lp-btn-orange"
            style={{ 
              width: '100%', 
              padding: '16px', 
              marginTop: '10px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Entrando na plataforma...' : 'Entrar na Plataforma'}
          </button>
        </form>

        <div style={{ marginTop: '20px', padding: '12px', background: '#F8F9FA', borderRadius: '10px', fontSize: '0.82rem', color: '#6B7280' }}>
          💡 Conta de demonstração disponível:{' '}
          <button 
            type="button" 
            onClick={fillTestCredentials}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--primary)', 
              fontWeight: '700', 
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'underline'
            }}
          >
            Preencher dados de teste
          </button>
        </div>

        <div style={{ marginTop: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Não tem uma conta?{' '}
          <Link href="/cadastro" style={{ color: 'var(--primary)', fontWeight: '800' }}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
