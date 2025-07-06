import React from 'react';
import { Link } from 'react-router-dom';

import SamsungCategory from '../assets/Images/samsung.png';
import AppleCategory from '../assets/Images/apple.png';
import LenovoCategory from '../assets/Images/Lenovo.png';
import GoogleCategory from '../assets/Images/google.png';
import DellCategory from '../assets/Images/Dell-Logo.png';

const categories = [
  { title: 'Samsung', imageUrl: SamsungCategory },
  { title: 'Apple',   imageUrl: AppleCategory   },
  { title: 'Lenovo',  imageUrl: LenovoCategory  },
  { title: 'Google',  imageUrl: GoogleCategory  },
  { title: 'Dell',    imageUrl: DellCategory    },
];

const CategorySection = () => (
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-5 gap-6 py-12">
    {categories.map(cat => (
      <Link
        key={cat.title}
        to={`/shop?brand=${encodeURIComponent(cat.title.toLowerCase())}`}
        className="
          block 
          relative 
          h-64 
          rounded-lg 
          border border-gray-200 
          bg-white 
          shadow-md 
          hover:shadow-xl 
          transform hover:scale-105 
          transition 
          overflow-hidden
        "
      >
        {/* logo */}
        <img
          src={cat.imageUrl}
          alt={cat.title}
          className="w-full h-full object-contain p-6"
        />

        {/* overlay text */}
        <div className="absolute bottom-4 left-4">
          <p className="text-xl font-semibold text-blue-800">{cat.title}</p>
          <p className="text-sm text-blue-600">View All</p>
        </div>
      </Link>
    ))}
  </div>
);
export default CategorySection;
