import React, { useState } from 'react';
import Hlogo from '../assets/EMLogo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center text-white py-4 px-8 md:px-32 bg-black drop-shadow-md font-poppins z-50">
        <img src={Hlogo} alt="Logo" className="h-14" />
        
        {/* Desktop Menu */}
        <ul className='hidden xl:flex items-center gap-12 text-xl'>
          <li className='hover:text-blue-400 cursor-pointer'>Home</li>
          <li className='hover:text-blue-400 cursor-pointer'>Projects</li>
          <li className='hover:text-blue-400 cursor-pointer'>About</li>
        </ul>

        {/* Mobile Menu Icon */}
        <i
          className='bx bx-menu xl:hidden block text-5xl cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        {/* Mobile Menu */}
        <div
          className={`absolute xl:hidden top-20 left-0 w-full bg-black flex flex-col items-center text-lg transform transition-all ease-in-out duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <li className='w-full list-none text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer'>
            Home
          </li>
          <li className='w-full list-none text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer'>
            Projects
          </li>
          <li className='w-full list-none text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer'>
            About
          </li>
          <li className='w-full list-none text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer'>
            Entertainment
          </li>
        </div>
      </header>

      {/* Content Padding */}
      <div className="pt-20"> {/* Adjust padding to prevent content from being hidden under the fixed header */}
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default Header;
