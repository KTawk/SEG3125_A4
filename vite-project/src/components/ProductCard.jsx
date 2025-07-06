// src/components/ProductCard.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, selectedColor }) => {
  const dispatch = useDispatch();

  // 1️⃣ Turn your images‐object into an array:
  //     Object.values keeps the insertion order you defined in mockData
  const imagesArray = product.images
    ? Object.values(product.images)
    : [product.image];

  // 2️⃣ Find the first matching color index (if any)
  let mainImage = imagesArray[0];
  if (selectedColor) {
    const idx = product.colors.findIndex(
      c => c.toLowerCase() === selectedColor.toLowerCase()
    );
    if (idx >= 0 && idx < imagesArray.length) {
      mainImage = imagesArray[idx];
    }
  }

  const handleAddToCart = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert('Product Added Successfully!');
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="
          product-card relative p-4
        "
      >
        {/* use the color‐matched image */}
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>

        <div className="flex items-center mt-2 space-x-1">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-2bsolute bottom-4 right-2 flex items-center justify-center 
             rounded-full w-8 h-8 group add-to-cart-btn hover:w-32"

        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add to cart</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
