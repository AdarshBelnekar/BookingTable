"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const Menu = [
    {
      id: 1,
      path: "/",
      name: "Home"
    },
    {
      id: 2,
      path: "#about",
      name: "About"
    },
    {
      id: 3,
      path: "#con",
      name: "Contact"
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-10'>
        <Image src='./logoipsum-332.svg' alt='image' width={100} height={80} />
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8'>
          {Menu.map((item) => (
            <li key={item.id} className='text-black font-bold hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className='flex gap-2'>
        <button type='button'
          onClick={() => router.push('/login')}
          className='bg-black text-white min-w-fit px-4 py-2 rounded-md hover:bg-indigo-900 transition-all ease-in-out shadow-lg'>
          Login/SignUp
        </button>
        <button type='button'
          onClick={() => router.push('/admin')}
          className='bg-black text-white min-w-fit px-4 py-2 rounded-md hover:bg-indigo-900 transition-all ease-in-out shadow-lg'>
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
      

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className='flex flex-col gap-4 p-4'>
            {Menu.map((item) => (
              <li key={item.id} className='text-black font-bold hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
