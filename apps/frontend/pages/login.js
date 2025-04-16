import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
