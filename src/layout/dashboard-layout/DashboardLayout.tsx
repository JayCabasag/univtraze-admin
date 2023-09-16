import Navbar from '@/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <main className='h-auto'>
      <Navbar />
      <section className="h-auto w-full flex justify-center">
        <div className="w-full max-w-7xl h-auto">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
