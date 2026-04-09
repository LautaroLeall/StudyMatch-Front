import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'studymatch_user';

const DEFAULT_USER = null;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    const mockUser = {
      id: 'user-1',
      name: 'Lautaro Leal',
      email: email || 'lautaro@unsta.edu.ar',
      avatar: null,
      career: 'Ingeniería en Sistemas',
      year: 3,
      bio: 'Estudiante de Ing. en Sistemas — UNSTA Yerba Buena',
      intention: 'both',
      onboardingComplete: true,
    };
    setUser(mockUser);
    setLoading(false);
    return mockUser;
  };

  const register = async (name, email, password) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    const newUser = {
      id: 'user-' + Date.now(),
      name,
      email,
      avatar: null,
      career: null,
      year: null,
      bio: '',
      intention: null,
      onboardingComplete: false,
    };
    setUser(newUser);
    setLoading(false);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updates) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const completeOnboarding = (data) => {
    setUser(prev => prev ? { ...prev, ...data, onboardingComplete: true } : null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUser,
    completeOnboarding,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
