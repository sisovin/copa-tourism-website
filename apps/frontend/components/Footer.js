import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="copyright">
          <p>&copy; 2023 Copa Tourism. All rights reserved.</p>
        </div>
        <div className="social-media">
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
