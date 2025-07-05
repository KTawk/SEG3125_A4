import React from 'react';
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

const CategorySection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="
              relative 
              h-80                  /* taller card */
              bg-white 
              rounded-lg 
              overflow-hidden 
              shadow-md 
              transform transition-transform duration-300 hover:scale-105 
              cursor-pointer
              flex items-center justify-center  /* center the logo */
              p-4                  /* padding around image */
            "
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-xl font-bold text-blue-900">{category.title}</p>
              <p className="text-sm text-blue-900">View All</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
