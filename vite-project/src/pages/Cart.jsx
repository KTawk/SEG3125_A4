// src/pages/Cart.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../assets/Images/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';
import ChangeAddress from '../components/ChangeAddress';
import Modal from '../components/Modal';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState('main street, 0012');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cart.products.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 pt-32">
      <h3 className="text-2xl font-semibold mb-6">SHOPPING CART</h3>

      <div className="flex flex-col md:flex-row md:space-x-10">

        {/* PRODUCTS + HEADERS */}
        <div className="flex-1">
          {/* 6-column header grid */}
          <div className="grid grid-cols-6 gap-4 mb-2 text-xs font-bold text-gray-700">
            <div className="col-span-2">PRODUCTS</div>
            <div className="text-center">PRICE</div>
            <div className="text-center">QUANTITY</div>
            <div className="text-center">SUBTOTAL</div>
            <div className="text-center">REMOVE</div>
          </div>
          <hr className="border-gray-300 mb-6" />

          {cart.products.map((product) => (
            <div
              key={`${product.id}-${product.selectedColor}`}
              className="grid grid-cols-6 items-center gap-4 mb-6"
            >
              {/* PRODUCTS */}
              <div className="col-span-2 flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-contain rounded"
                />
                <span className="font-medium">{product.name}</span>
              </div>

              {/* PRICE */}
              <div className="text-center">
                ${product.price.toFixed(2)}
              </div>

              {/* QUANTITY */}
              <div className="quantity-control mx-auto">
                <button
                  onClick={() =>
                    dispatch(
                      decreaseQuantity({
                        id: product.id,
                        selectedColor: product.selectedColor,
                      })
                    )
                  }
                >
                  –
                </button>
                <input
                  type="text"
                  value={product.quantity}
                  readOnly
                  className="w-6 text-center border-none"
                />
                <button
                  onClick={() =>
                    dispatch(
                      increaseQuantity({
                        id: product.id,
                        selectedColor: product.selectedColor,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              {/* SUBTOTAL */}
              <div className="text-center">
                ${(product.price * product.quantity).toFixed(2)}
              </div>

              {/* REMOVE */}
              <div className="text-center">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        id: product.id,
                        selectedColor: product.selectedColor,
                      })
                    )
                  }
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CART TOTALS */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 md:mt-0 self-start">
          <h4 className="text-sm font-semibold mb-4">CART TOTALS</h4>
          <div className="flex justify-between border-b pb-2 mb-4">
            <span className="text-sm">TOTAL ITEMS:</span>
            <span>{cart.totalQuantity}</span>
          </div>
          <div className="border-b pb-4 mb-4">
            <p className="font-medium">Shipping:</p>
            <p className="ml-2">
              to: <span className="font-semibold">{address}</span>
            </p>
            <button
              className="mt-2 text-blue-500 underline"
              onClick={() => setIsModelOpen(true)}
            >
              Change address
            </button>
          </div>
          <div className="flex justify-between mb-6">
            <span>Total Price:</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="checkout-button"
            onClick={() => navigate('/checkout')}
          >
            Proceed to checkout
          </button>
        </div>
      </div>

      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        <ChangeAddress
          setAddress={setAddress}
          setIsModelOpen={setIsModelOpen}
        />
      </Modal>
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 pt-32"></div>
    </div>
  );
};

export default Cart;
