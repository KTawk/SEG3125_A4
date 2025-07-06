import React from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Grab first image from your images object (or fallback to a single image prop)
  const imagesArray = product.images
    ? Object.values(product.images)
    : [product.image];
  const firstImage = imagesArray[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert('Product Added Successfully!');
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="product-card p-4 relative"
      >
        <img
          src={firstImage}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>

        <div className="flex items-center mt-2">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          className="
            absolute bottom-4 right-2 flex items-center justify-center \
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
