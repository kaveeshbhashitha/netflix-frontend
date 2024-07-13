import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuthCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);
}

export default useAuthCheck;

