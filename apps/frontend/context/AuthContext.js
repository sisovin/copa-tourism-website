import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken, setToken, removeToken } from '../utils/auth';
import { login as authLogin, logout as authLogout } from '../services/auth.service';

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
      const data = await authLogin(email, password);
      setToken(data.accessToken);
      setUser({ token: data.accessToken });
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await authLogout();
      removeToken();
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
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
