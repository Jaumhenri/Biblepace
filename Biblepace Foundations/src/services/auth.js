const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export const TOKEN_STORAGE_KEY = 'biblepace_auth_token';
export const USER_STORAGE_KEY = 'biblepace_auth_user';

export function getStoredToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function getStoredUser() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Falha ao decodificar usuário do localStorage', e);
    return null;
  }
}

export function setAuthSession(token, user) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export function clearAuthSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Falha ao autenticar.');
  }

  setAuthSession(data.token, data.user);
  return data;
}

export async function register(name, email, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Falha ao criar conta.');
  }

  setAuthSession(data.token, data.user);
  return data;
}

export async function getMe() {
  const token = getStoredToken();
  if (!token) return null;

  const response = await fetch(`${API_URL}/auth/me`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    clearAuthSession();
    return null;
  }

  const data = await response.json();
  if (data?.user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
    return data.user;
  }
  return null;
}

export function logout() {
  clearAuthSession();
}

