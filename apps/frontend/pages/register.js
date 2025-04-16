import React from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    router.push('/login');
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;
