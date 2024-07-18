import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import short from '../../../src/Image/logo short.png'
// import namelogo from '../../../src/Image/Group 14-2.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-300 shadow-md"> 
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={short} className="h-8 " alt="Hi-tech Logo" />
          <span><img src={namelogo} className="h-8 w-[6rem]" alt="Logo" /></span> */}
          <h1 className='text-2xl font-bold'>Logo</h1>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            <Link to="/contact-us" onClick={closeMenu}>Contact us</Link>
          </button>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" onClick={closeMenu}>About us</Link>
            </li>
            <li>
              <Link to="/our-services" className="block py-2 px-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" onClick={closeMenu}>Services</Link>
            </li>
            <li>
              <Link to="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" onClick={closeMenu}>Blog</Link>
            </li>
            <li>
              <Link to="/career" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" onClick={closeMenu}>Career</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className='h-12 w-full lg:hidden'>
    </div>
    
    </>
  );
}

export default Header;
