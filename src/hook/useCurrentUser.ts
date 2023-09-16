import { useEffect } from 'react';

export function useCurrentUser() {
  useEffect(() => {
    const getUserFromClient = () => {};
    getUserFromClient();
    return () => {};
  }, []);

  return { user: null };
}
