import AllUsers from '@/components/all-users/AllUsers';
import Header from '@/components/header/Header';

export default function UsersPage() {
  return (
    <main className='px-[15px]'>
      <Header title="Dashboard" sub={'Users'} />
      <AllUsers />
    </main>
  );
}
