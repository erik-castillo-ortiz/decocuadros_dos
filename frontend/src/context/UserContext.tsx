'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  login as serviceLogin,
  logout as serviceLogout,
} from '@/app/auth/login/services/authService';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

interface UserContextProps {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  revalidateSession: () => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/auth/user', {
        method: 'GET',
        credentials: 'include', // Enviar cookies automáticamente
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(); // Llamar al endpoint al cargar el contexto
  }, []);

  const login = async (email: string, password: string) => {
    const response = await serviceLogin({ email, password });
    if (response.error) {
      throw new Error(response.error);
    }
    setUser(response);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await serviceLogout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const revalidateSession = async () => {
    setLoading(true);
    await fetchUserData(); // Forzar una nueva llamada al endpoint del usuario
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        revalidateSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
