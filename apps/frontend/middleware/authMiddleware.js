import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

const authMiddleware = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push('/login');
      }
    }, [isAuthenticated, router]);

    return isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default authMiddleware;
