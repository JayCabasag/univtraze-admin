import menuSVG from '@assets/menu.svg';
import logoSVG from '@assets/logo.svg';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shared/popover/Popover';
import { Link } from 'react-router-dom';

const menuList = [
  { name: 'Add room', link: 'add-room' },
  { name: 'All rooms', link: 'all-rooms' },
  { name: 'Log out', link: 'logout' },
];

export default function Navbar() {
  return (
    <div className="h-[80px] bg-[#FFFFFF] w-full shadow-md flex items-center justify-center">
      <div className="w-full max-w-7xl flex justify-between">
        <span className="flex gap-2 items-center">
          <img src={logoSVG} height={33} width={33} alt="logo" />
          <h1 className="text-[#364D39] text-[22px] font-bold">UnivTraze</h1>
        </span>
        <Popover>
          <PopoverTrigger>
            <button className="cursor-pointer hover:bg-slate-100 p-3 rounded">
              <img src={menuSVG} height={33} width={33} alt="menu" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="bg-white p-0 mt-[20px]">
            <ul>
              {menuList.map((menuList) => {
                return (
                  <Link
                    to={menuList.link}
                    className="cursor-pointer hover:bg-gray-100 h-[50px] border-b text-[16px] flex items-center px-[15px]"
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
  );
}
