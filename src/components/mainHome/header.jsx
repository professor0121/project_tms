import react from 'react';
import Link from 'next/link';
const Header = () => {  
  return (
    <header className="bg-[#f7d8bb] h-[100px] flex justify-between items-center px-4 text-[#000000]">
        <div>logo</div>
        <nav>
            <Link href='login'>Home</Link>
            <Link href='login'>About</Link>
            <Link href='login'>Cotext</Link>
            <Link href='login'>Blogs</Link>
        </nav>
        <div className='flex'>
        <div>login button</div>
        <div>signup button</div>
        </div>
    </header>
  );
}

export default Header;