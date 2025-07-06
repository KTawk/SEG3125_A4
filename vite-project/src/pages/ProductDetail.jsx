import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(state => state.product.products);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const found = products.find(p => p.id === +id);
    setProduct(found);
  }, [id, products]);

  if (!product) return <div>Loading…</div>;

  const imageList = product.images
    ? Object.values(product.images)
    : [product.image];
  const mainImage = imageList[0];

  const handleAddToCart = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert("Product Added Successfully!");
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img
            src={mainImage}
            alt={product.name}
            className="h-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 py-4 shadow-md md:p-16 flex flex-col justify-center gap-y-4">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            <input
              id="quantity"
              type="number"
              min="1"
              defaultValue={1}
              className="border p-1 w-16"
            />
            <button
              type="button"
              onClick={handleAddToCart}
              className="btn-primary"
            >
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product description goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
