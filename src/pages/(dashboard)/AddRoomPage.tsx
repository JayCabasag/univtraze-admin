import Header from '@/components/header/Header';

export default function AddRoomPage() {
  return (
    <main>
      <Header title="Dashboard" sub={'user'} />
      <div className="py-[60px] flex flex-col md:flex-row gap-[33px]">
        <div className="p-[40px] bg-white shadow-xl w-full rounded-[20px] h-[450px] max-w-[420px]">Add room</div>
        <div className="p-[40px] bg-white w-full shadow-xl rounded-[20px] h-[450px] ">Room Preview</div>
      </div>
    </main>
  );
}
