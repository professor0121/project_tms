import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='absolute w-full z-2 bg-red-900'>
      <header className="relative bg-transparent h-[60px] flex justify-between items-center px-4 md:px-8 text-[#000000]">
        <div className='font-[700] text-[28px] md:text-[42px]'>TravelPro</div>
        
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className={`flex-col md:flex-row md:flex gap-[20px] absolute md:static top-[60px] left-0 w-full bg-white md:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <Link className='text-[18px] font-[500] text-[#000000] py-2 md:py-0 px-4 md:px-0' href='/'>Home</Link>
          <Link className='text-[18px] font-[500] text-[#000000] py-2 md:py-0 px-4 md:px-0' href='/about'>About</Link>
          <Link className='text-[18px] font-[500] text-[#000000] py-2 md:py-0 px-4 md:px-0' href='/contact'>Contact</Link>
          <Link className='text-[18px] font-[500] text-[#000000] py-2 md:py-0 px-4 md:px-0' href='/blogs'>Blogs</Link>
        </nav>

        <div className='hidden md:flex gap-4 justify-center items-center'>
          <div className='cursor-pointer'>Login</div>
          <div className='bg-[#f7f7f7] px-[32px] py-[8px] border-[2px] border-[#000000] rounded-2xl cursor-pointer'>Sign up</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
