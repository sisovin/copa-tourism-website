import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken, setToken, removeToken } from '../utils/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      setToken(data.accessToken);
      setUser({ token: data.accessToken });
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
    router.push('/login');
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
