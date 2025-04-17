import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row">
        <div className="logo">
          <h1 className="text-2xl font-bold">Copa Tourism</h1>
        </div>
        <ul className="flex space-x-4">
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
