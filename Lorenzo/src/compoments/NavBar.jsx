import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-8 bg-black p-4">
      <Link to="/" className="text-4xl font-bold text-white">MASON LING</Link>
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="text-red-500 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:underline">About</Link>
        </li>

        <li>
          <Link to="/media" className="text-white hover:underline">Media</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
        </li>
        <li>
          <Link to="/prices" className="text-white hover:underline">Prices</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
