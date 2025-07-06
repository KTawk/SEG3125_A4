// src/components/InfoSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLaptop,
  FaTabletAlt,
  FaMobileAlt,
  FaTv,
  FaHeadphones
} from 'react-icons/fa';

const infoItems = [
  {
    icon: <FaLaptop className="text-5xl text-blue-900" />,
    title: 'Laptops',
    description: 'High-performance laptops for work, gaming, and creative flow.',
  },
  {
    icon: <FaTabletAlt className="text-5xl text-blue-900" />,
    title: 'Tablets',
    description: 'Sleek tablets for on-the-go browsing, reading, and streaming.',
  },
  {
    icon: <FaMobileAlt className="text-5xl text-blue-900" />,
    title: 'Phones',
    description: 'Cutting-edge smartphones with stellar cameras and battery life.',
  },
  {
    icon: <FaTv className="text-5xl text-blue-900" />,
    title: 'TVs',
    description: 'Cinematic 4K & OLED TVs for your ultimate home theater.',
  },
  {
    icon: <FaHeadphones className="text-5xl text-blue-900" />,
    title: 'Accessories',
    description: 'Must-have accessories: chargers, headsets, cases, and more.',
  },
];

const InfoSection = () => (
  <div className="bg-white pt-40 pb-20 px-12">
    <h2 className="text-4xl font-bold text-center">Shop by Category</h2> <br/> <br/><br/>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
      {infoItems.map((item, idx) => (
        <Link
          key={idx}
          to={`/shop?category=${encodeURIComponent(item.title.toLowerCase())}`}
          className="
            flex flex-col items-center 
            p-8 
            border-2 border-gray-300 
            rounded-2xl 
            shadow-xl 
            transform transition-transform duration-300 hover:scale-105 
            cursor-pointer
          "
        >
          {item.icon}
          <h3 className="mt-6 text-3xl font-semibold">{item.title}</h3>
          <p className="mt-4 text-lg text-gray-600">{item.description}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default InfoSection;
