import Navbar from '@/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <main>
      <Navbar />
      <section className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
