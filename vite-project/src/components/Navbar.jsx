import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">


        <div className="text-2xl font-semibold">
          <Link to="/">
            e-<span className="font-bold">SHOP</span>
          </Link>
        </div>


        <div className="relative w-full max-w-md mx-4">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border border-gray-300 py-2 px-4 rounded-md"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        <div className="flex items-center space-x-4 text-gray-700">
          <Link to="/cart">
            <FaShoppingCart className="text-xl text-purple-500" />
          </Link>
          <button className="hidden md:block bg-gray-100 px-3 py-1 rounded-md shadow-sm">
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

  <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold text-gray-700">
  <Link
    to="/"
    className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-700 hover:after:w-full after:transition-all after:duration-300"
  >
    Home
  </Link>
  <Link
    to="/shop"
    className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-700  hover:after:w-full after:transition-all after:duration-300"
  >
    Shop
  </Link>
  <Link
    to="/contact"
    className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-700  hover:after:w-full after:transition-all after:duration-300"
  >
    Contact
  </Link>
  <Link
    to="/about"
    className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-700  hover:after:w-full after:transition-all after:duration-300"
  >
    About
  </Link>
</div>


     
    </nav>
  );
};

export default Navbar;