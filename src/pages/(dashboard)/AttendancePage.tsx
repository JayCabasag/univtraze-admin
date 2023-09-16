import Header from '@/components/header/Header';

export default function AttendancePage() {
  return (
    <main>
      <Header title="Dashboard" sub={'Attendance'} />
      <div className="py-[60px] flex flex-col md:flex-row gap-[33px]">All rooms</div>
    </main>
  );
}
