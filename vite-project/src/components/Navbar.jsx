import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const products = useSelector(state => state.cart.products);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const q = searchTerm.trim();
    navigate(q ? `/shop?search=${encodeURIComponent(q)}` : '/shop');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link to="/">e-<span className="font-bold">SHOP</span></Link>
        </div>

        <div className="mx-4 w-full max-w-md">
  <form onSubmit={handleSubmit} className="relative">
    <input
      type="text"
      placeholder="Search Product"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="
        w-full h-12
        bg-white
        border border-gray-300
        rounded-full
        px-4
        pr-12          /* space for the icon */
        text-gray-600  /* placeholder/text color */
        focus:outline-none focus:ring-2 focus:ring-blue-300
      "
    />
    <button
      type="submit"
      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0"
    >
      <FaSearch className="text-blue-900 w-5 h-5" />
    </button>
  </form>
</div>
        {/* Cart & Auth */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-purple-500" />
            {products.length > 0 && (
              <span className="absolute top-0 left-3 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-xs text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      {/* Secondary nav */}
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold text-gray-700">
        {['/', '/shop', '/contact', '/about'].map((path, i) => {
          const label = ['Home', 'Shop', 'Contact', 'About'][i];
          return (
            <Link
              key={label}
              to={path}
              className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-700 hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
