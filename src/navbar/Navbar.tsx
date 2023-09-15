import menuSVG from '@assets/menu.svg'
import logoSVG from '@assets/logo.svg'
import { useState } from 'react';
export default function Navbar() {
  const [openMenuPopup, setOpenMenuPopup] = useState(false)

  const handleToggleMenuPopop = () => {
    setOpenMenuPopup(!openMenuPopup)
  }

  return <div className="h-[80px] bg-[#FFFFFF] w-full shadow-md flex items-center justify-center">
    <div className="w-full max-w-7xl flex justify-between">
        <span className='flex gap-2'>
          <img
            src={logoSVG}
            height={33}
            width={33}
            alt='logo'
          />
          <h1 className='text-[#364D39] text-[22px] font-bold'>UnivTraze</h1>
        </span>
          <button onClick={handleToggleMenuPopop} className='cursor-pointer hover:bg-slate-100 p-2 rouded'>
            <img
              src={menuSVG}
              height={33}
              width={33}
              alt='menu'
            />
          </button>
          <div className='absolute bg-white max-w-[215px] w-full'>
            <ul>
              <li>Add room</li>
              <li>All rooms</li>
              <li>Log out</li>
            </ul>
          </div>
    </div>
  </div>;
}
