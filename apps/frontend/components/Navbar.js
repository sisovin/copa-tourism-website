import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row">
        <div className="logo">
          <h1 className="text-2xl font-bold">Copa Tourism</h1>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col sm:flex-row sm:flex space-x-4 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/destinations" className="hover:underline">Destinations</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
