import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row">
        <div className="logo">
          <h1 className="text-2xl font-bold">Copa Tourism</h1>
        </div>
        <nav className="navigation mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/destinations" className="hover:underline">Destinations</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
