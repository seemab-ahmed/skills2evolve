"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '@/Images/logo.png';


const Header = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Practice', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Blogs', path: '/blog' }
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header className="py-4  border-b border-[#D6D6D6] bg-[#F7F7F7] ${sticky fixed w-full top-0 z-[99]">
      <div className='max-w-[1300px] m-auto px-5 flex justify-between items-center'>
      <Link href="/" className="flex items-center">
        <div className="flex items-center max-w-[221px]">
          <Image 
            src={Logo}
            alt="Skills2Evolve Logo" 
             className="w-full h-auto" 
              priority
          />
        </div>
      </Link>                               
          <nav className={`
              fixed top-14 right-0 h-full max-w-[400px] w-full bg-secondry p-6
              transform duration-300 ease-in-out z-50
              lg:static lg:transform-none lg:flex lg:flex-row bg-[#1B5795] lg:bg-transparent lg:p-0
              flex flex-col gap-[30px] lg:max-w-fit md:space-x-6 transition-all
              ${menuOpen ? "translate-x-0 opacity-100 visible h-full" : "translate-x-full opacity-0 invisible h-0"}
              lg:translate-x-0 lg:opacity-100 lg:visible
            `}>

            <ul className=" gap-4 flex space-x-8 flex-col   lg:flex-row">
              {navItems.map((item) => (
                <li key={item.name} className='text-center m-0'>
                  <Link 
                    href={item.path}
                    className={` px-4 w-ful lg:w-fit text-center text-[14px] leading-5 font-[Inter] font-medium text-[#fff]  lg:text-[#1E1E1E] pb-[24px] border-b-2 border-transparent transition-all ease-in-out duration-300 hover:border-[#1B5795] `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col lg:hidden items-center gap-4">
              <Link 
                href="/login" 
                className=" w-full text-center text-[14px] leading-5 font-[Inter] font-medium  px-4 py-2 text-white bg-[rgb(2,22,42)] rounded-[8px] hover:bg-blue-800 transition-colors"
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className=" w-full text-center text-[14px] leading-5 font-[Inter] font-medium  px-4 py-2 text-white bg-[#FB971B] rounded-[8px] hover:bg-orange-600 transition-colors"
              >
                Join now
              </Link>
            </div>
          </nav>
         
  
      <div className='flex gap-5 items-center'>

        {/* Hamburger */}
        <div className="flex items-end flex-col lg:hidden cursor-pointer" onClick={toggleMenu}>
        <div className="w-7 h-1 bg-black mb-1"></div>
        <div className="w-9 h-1 bg-black mb-1"></div>
        <div className="w-7 h-1 bg-black"></div>
        </div>

        <div className=" hidden lg:flex  items-center gap-4">
          <Link 
            href="/login" 
            className=" text-[14px] leading-5 font-[Inter] font-medium  px-4 py-2 text-white bg-[#1B5795] rounded-[8px] hover:bg-blue-800 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="text-[14px] leading-5 font-[Inter] font-medium  px-4 py-2 text-white bg-[#FB971B] rounded-[8px] hover:bg-orange-600 transition-colors"
          >
            Join now
          </Link>
        </div>
      </div>

      </div>
    </header>
  );
};

export default Header;