import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { user, login, logout, isAuthenticated } = useContext(AuthContext);

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
