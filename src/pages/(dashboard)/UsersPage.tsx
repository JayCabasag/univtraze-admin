import Header from '@/components/header/Header';

export default function UsersPage() {
  return (
    <main>
      <Header title="Dashboard" sub={'Users'} />
      <div className="py-[60px] flex flex-col md:flex-row gap-[33px]">All rooms</div>
    </main>
  );
}
