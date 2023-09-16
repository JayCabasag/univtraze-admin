import Error from '@/components/errors/Error';
import CommonSpinner from '@/components/shared/spinners/CommonSpinner';
import { ReactNode, useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const initializeStore = () => {
      setTimeout(() => {
        setLoading(false);
        setError('');
      }, 1000);
    };

    initializeStore();
  }, []);

  if (loading || error) {
    return <div className="flex items-center justify-center h-screen">{loading ? <CommonSpinner /> : <Error />}</div>;
  }

  return (
    <div className="h-full w-screen bg-[#E1F5E4]">
      {children}
    </div>
  );
}

export default MainLayout;
