'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MODULES_DATA, BLOCKS_DATA } from '@/data/curriculumData';
import { getStoredUser, getMe, logout as authLogout } from '@/services/auth';

const CourseContext = createContext(null);

function formatUserData(rawUser) {
  if (!rawUser) {
    return {
      name: 'Visitante',
      firstName: 'Visitante',
      email: '',
      initials: 'VI',
      streakDays: 0,
      enrolledDate: 'Não inscrito',
      avatar: null,
      isAuthenticated: false
    };
  }

  const parts = (rawUser.name || 'Usuário').trim().split(' ');
  const firstName = parts[0];
  const initials = parts.length > 1 
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();

  return {
    ...rawUser,
    firstName,
    initials,
    streakDays: rawUser.streakDays || 1,
    enrolledDate: rawUser.createdAt 
      ? new Date(rawUser.createdAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
      : '15 de setembro de 2026',
    avatar: rawUser.avatarUrl || null,
    isAuthenticated: true
  };
}

export function CourseProvider({ children }) {
  // Current user state
  const [user, setUser] = useState(() => {
    const stored = getStoredUser();
    if (stored) return formatUserData(stored);
    return {
      name: 'João Pedro',
      firstName: 'João',
      email: 'joao.pedro@biblepace.com',
      initials: 'JP',
      streakDays: 5,
      enrolledDate: '15 de setembro de 2026',
      avatar: null,
      isAuthenticated: true
    };
  });

  // Default completed lessons: Module 1 (all 6), Module 2 (all 6), Module 3 (lesson 1 & 2 done, 3 in progress)
  const initialCompletedLessons = [
    '1-1', '1-2', '1-3', '1-4', '1-5', '1-6',
    '2-1', '2-2', '2-3', '2-4', '2-5', '2-6',
    '3-1', '3-2'
  ];

  const [completedLessons, setCompletedLessons] = useState(initialCompletedLessons);
  const [notebookNotes, setNotebookNotes] = useState({
    3: 'Anotações sobre oração e disciplinas: Jesus orava de madrugada. A oração como oxigênio diário e não resgate de emergência.'
  });
  const [reflectionAnswers, setReflectionAnswers] = useState({
    '1-0': 'Minha maior dúvida era sobre a transmissão dos manuscritos antigos, mas os achados do Mar Morto me deram muita segurança.',
    '2-0': 'O Evangelho não é apenas como eu entro na fé, mas a própria realidade diária da graça.'
  });
  const [completedChallenges, setCompletedChallenges] = useState([1, 2]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage safely on client mount
  useEffect(() => {
    try {
      const savedLessons = localStorage.getItem('biblepace_completed_lessons');
      if (savedLessons) setCompletedLessons(JSON.parse(savedLessons));

      const savedNotes = localStorage.getItem('biblepace_notebook_notes');
      if (savedNotes) setNotebookNotes(JSON.parse(savedNotes));

      const savedReflections = localStorage.getItem('biblepace_reflections');
      if (savedReflections) setReflectionAnswers(JSON.parse(savedReflections));

      const savedChallenges = localStorage.getItem('biblepace_challenges');
      if (savedChallenges) setCompletedChallenges(JSON.parse(savedChallenges));
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync back to localStorage only after initial client load
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('biblepace_completed_lessons', JSON.stringify(completedLessons));
    } catch (e) { /* ignore */ }
  }, [completedLessons, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('biblepace_notebook_notes', JSON.stringify(notebookNotes));
    } catch (e) { /* ignore */ }
  }, [notebookNotes, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('biblepace_reflections', JSON.stringify(reflectionAnswers));
    } catch (e) { /* ignore */ }
  }, [reflectionAnswers, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('biblepace_challenges', JSON.stringify(completedChallenges));
    } catch (e) { /* ignore */ }
  }, [completedChallenges, isLoaded]);

  // Actions
  const toggleLessonCompleted = (lessonId) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

  const saveNotebookNote = (moduleId, note) => {
    setNotebookNotes(prev => ({
      ...prev,
      [moduleId]: note
    }));
  };

  const saveReflectionAnswer = (moduleId, questionIdx, answer) => {
    setReflectionAnswers(prev => ({
      ...prev,
      [`${moduleId}-${questionIdx}`]: answer
    }));
  };

  const toggleChallengeCompleted = (moduleId) => {
    setCompletedChallenges(prev => {
      if (prev.includes(moduleId)) {
        return prev.filter(id => id !== moduleId);
      } else {
        return [...prev, moduleId];
      }
    });
  };

  // Helper status for a module: "completed" | "in_progress" | "locked"
  const getModuleStatus = (module) => {
    const totalLessons = module.lessons.length;
    const completedCount = module.lessons.filter(l => completedLessons.includes(l.id)).length;

    if (completedCount === totalLessons) {
      return 'completed';
    }

    // A module is unlocked if it's module 1 or the previous module is completed
    const prevModule = MODULES_DATA.find(m => m.id === module.id - 1);
    const isUnlocked = !prevModule || prevModule.lessons.every(l => completedLessons.includes(l.id));

    if (isUnlocked) {
      return 'in_progress';
    }
    return 'locked';
  };

  const getModuleCompletedCount = (module) => {
    return module.lessons.filter(l => completedLessons.includes(l.id)).length;
  };

  // Overall Statistics
  const totalLessons = MODULES_DATA.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalCompletedLessons = completedLessons.length;
  const overallPercentage = Math.round((totalCompletedLessons / totalLessons) * 100);

  // Active Lesson to "Continue de onde parou"
  // Let's find first incomplete lesson or default to Module 3 Lesson 3 ("Aula 3 — Disciplinas Espirituais")
  const currentIncompleteLesson = () => {
    for (const mod of MODULES_DATA) {
      for (const les of mod.lessons) {
        if (!completedLessons.includes(les.id)) {
          return { module: mod, lesson: les };
        }
      }
    }
    return { module: MODULES_DATA[0], lesson: MODULES_DATA[0].lessons[0] };
  };

  // Check auth on load
  useEffect(() => {
    async function verifyAuth() {
      try {
        const freshUser = await getMe();
        if (freshUser) {
          setUser(formatUserData(freshUser));
        }
      } catch (err) {
        console.warn('Erro ao atualizar dados do usuário autenticado', err);
      }
    }
    verifyAuth();
  }, []);

  const logoutUser = () => {
    authLogout();
    setUser(formatUserData(null));
  };

  const setUserSession = (userData) => {
    setUser(formatUserData(userData));
  };

  return (
    <CourseContext.Provider
      value={{
        user,
        setUserSession,
        logoutUser,
        completedLessons,
        toggleLessonCompleted,
        isLessonCompleted,
        notebookNotes,
        saveNotebookNote,
        reflectionAnswers,
        saveReflectionAnswer,
        completedChallenges,
        toggleChallengeCompleted,
        getModuleStatus,
        getModuleCompletedCount,
        totalLessons,
        totalCompletedLessons,
        overallPercentage,
        currentIncompleteLesson,
        isSearchOpen,
        setIsSearchOpen
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
}
