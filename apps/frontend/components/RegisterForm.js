import React, { useState } from 'react';
import { register } from '../services/auth.service';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await register(email, password);
      onRegisterSuccess();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
