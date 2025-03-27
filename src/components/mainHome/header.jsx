import react from 'react';
import Link from 'next/link';
const Header = () => {  
  return (
    <div className='absolute w-full'>
    <header className="relative bg-transparent  h-[60px] flex justify-between items-center px-4 text-[#000000]">
        <div className='font-[700] text-[42px]'>TravelPro</div>
        <nav className='flex gap-[20px]'>
            <Link className='text-[18px] font-[500] font-[#000000]' href='login'>Home</Link>
            <Link className='text-[18px] font-[500] font-[#000000]' href='login'>About</Link>
            <Link className='text-[18px] font-[500] font-[#000000]' href='login'>Cotext</Link>
            <Link className='text-[18px] font-[500] font-[#000000]' href='login'>Blogs</Link>
        </nav>
        <div className='flex gap-4 justify-center items-center'>
        <div>login button</div>
        <div className='bg-[#f7f7f7] px-[32px] py-[8px] border-[2px] border-[#000000] rounded-2xl'>Sign up</div>
        </div>
    </header>
    </div>
  );
}

export default Header;