import menuSVG from '@assets/menu.svg';
import logoSVG from '@assets/logo.svg';
import notificationBellSVG from '@assets/notification-bell.svg';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shared/popover/Popover';
import { Link } from 'react-router-dom';

const menuList = [
  { name: 'Add room', link: 'add-room' },
  { name: 'All rooms', link: 'all-rooms' },
  { name: 'Log out', link: 'logout' },
];

const ICON_SIZE = 33;

export default function Navbar() {

  const totalNotifications = 2

  return (
    <div className="top-0 sticky h-[80px] p-[15px] md:p-0 bg-[#FFFFFF] w-full shadow-md flex items-center justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Link to={'/dashboard'}>
          <span className="flex gap-2 items-center">
            <img src={logoSVG} height={ICON_SIZE} width={ICON_SIZE} alt="logo" />
            <h1 className="text-[#364D39] text-[22px] font-bold">UnivTraze</h1>
          </span>
        </Link>
        <div className="flex gap-[82px]">
          <button className="relative">
            {totalNotifications > 0 && (
               <span className="w-[20px] h-[20px] flex items-center justify-center bg-[#EA1B1B] absolute -left-[10px] top-0 text-white font-normal text-[12px] border-2 rounded-full border-white px-1">
                {totalNotifications}
              </span>
            )}
            <img src={notificationBellSVG} height={ICON_SIZE - 10} width={ICON_SIZE - 10} alt="bell" />
          </button>
          <Popover>
            <PopoverTrigger className="cursor-pointer hover:bg-slate-100 p-3 rounded">
              <img src={menuSVG} height={33} width={33} alt="menu" />
            </PopoverTrigger>
            <PopoverContent className="rounded-[20px] bg-white p-0 mt-[20px]">
              <ul>
                {menuList.map((menuList) => {
                  return (
                    <Link
                      to={menuList.link}
                      className="cursor-pointer last:rounded-b-[20px] first:rounded-t-[20px] hover:bg-gray-100 h-[50px] border-b text-[16px] flex items-center px-[15px]"
                      key={menuList.link}
                    >
                      {menuList.name}
                    </Link>
                  );
                })}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
