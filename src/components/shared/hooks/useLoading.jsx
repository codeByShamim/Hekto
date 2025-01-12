// shared/hooks/useLoading.js
import { useState, useEffect } from 'react';

const useLoading = (duration = 2000) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, duration);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [loading, duration]);

  const startLoading = () => setLoading(true);

  return {
    loading,
    startLoading,
  };
};

export default useLoading;
