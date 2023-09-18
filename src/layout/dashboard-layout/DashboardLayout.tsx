import Navbar from '@/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <main className="h-screen w-full">
      <Navbar />
      <section className="h-[calc(100vh-80px)] overflow-auto flex justify-center">
        <div className="w-full max-w-7xl h-screen">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
