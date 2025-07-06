// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
    {/* main three-column row */}
    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Brand */}
      <div>
        <h3 className="text-xl font-semibold">e-Shop</h3>
        <p className="mt-4">
          Your one-stop for all your needs. Shop with ease <br/>
          and experience the best online shopping.
        </p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              to="/"
              className="hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:underline"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social + subscribe */}
      <div className="flex flex-col items-center md:items-end">
        <h4 className="text-lg font-semibold">Follow us</h4>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaGithub /></a>
          <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
        </div>
        <form className="mt-8 flex w-full max-w-xs">
          <input
            type="email"
            placeholder="Enter Email"
            className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
          />
          
          <button
            type="submit"
            className="btn-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* bottom copyright row */}
    <div className="mt-8 border-t border-gray-700 pt-4 w-full">
      <div className="w-full max-w-screen-xl mx-auto text-center">
        <p className="text-sm">&copy; TECHIFY - 2025 All rights reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
