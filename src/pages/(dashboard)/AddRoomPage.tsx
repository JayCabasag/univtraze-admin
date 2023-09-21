import AddRoomForm from '@/components/add-room/AddRoomForm';
import AddRoomPreview from '@/components/add-room/AddRoomPreview';
import { QrContextProvider } from '@/components/add-room/context/qrContext';
import Header from '@/components/header/Header';

export default function AddRoomPage() {
  return (
    <main className="px-[15px]">
      <Header title="Dashboard" sub={'user'} />
      <QrContextProvider>
        <div className="py-[60px] flex flex-col md:flex-row gap-[33px]">
          <div className="p-[40px] bg-white shadow-xl w-full rounded-[20px] min-h-[450px] max-w-[420px]">
            <AddRoomForm />
          </div>
          <div className="p-[40px] bg-white w-full shadow-xl rounded-[20px] h-full ">
            <AddRoomPreview />
          </div>
        </div>
      </QrContextProvider>
    </main>
  );
}
