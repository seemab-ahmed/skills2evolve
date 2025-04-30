"use client"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Practice', path: '/practice' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' }
  ];

  return (
    <header className="py-4 px-6 flex justify-between items-center border-b border-gray-200 bg-white">
      <Link href="/" className="flex items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Skills2Evolve Logo" 
            width={150} 
            height={40} 
            priority
          />
        </div>
      </Link>
      
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path}
                className={`text-base font-medium ${
                  pathname === item.path 
                    ? 'text-blue-700 border-b-2 border-blue-700 pb-1' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="flex items-center space-x-4">
        <Link 
          href="/login" 
          className="px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 transition-colors"
        >
          Log in
        </Link>
        <Link 
          href="/signup" 
          className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
        >
          Join now
        </Link>
      </div>
    </header>
  );
};

export default Header;