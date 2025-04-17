import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="copyright text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <p>&copy; 2023 Copa Tourism. All rights reserved.</p>
        </div>
        <div className="social-media mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
            <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
