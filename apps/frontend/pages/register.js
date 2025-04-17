import React from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    router.push('/login');
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Register</h1>
      <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;
