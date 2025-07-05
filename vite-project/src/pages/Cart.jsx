import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../assets/Images/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';
import ChangeAddress from '../components/ChangeAddress';
import Modal from '../components/Modal';
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState('main street, 0012');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>

          <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 mt-8">
            <div className="md:w-2/3 w-full">
              <div className="grid grid-cols-5 gap-4 border-b pb-2 mb-4 text-xs font-bold text-gray-700">
                <p className="col-span-2">PRODUCTS</p>
                <p className="text-center">PRICE</p>
                <p className="text-center">QUANTITY</p>
                <p className="text-center">SUBTOTAL</p>
              </div>

              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-5 gap-4 items-center border-b py-4"
                  >
                    <div className="col-span-2 flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <h3 className="text-md font-semibold">{product.name}</h3>
                    </div>

                    <p className="text-center">${product.price}</p>

                    <div className="flex items-center justify-center border rounded">
                      <button
                        className="text-xl font-bold px-2 border-r"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                      >
                        -
                      </button>
                      <p className="text-md px-2">{product.quantity}</p>
                      <button
                        className="text-xl px-2 border-l"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center justify-between space-x-4">
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 md:mt-0">
              <h3 className="text-sm font-semibold mb-5">CART TOTALS</h3>

              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">TOTAL ITEMS:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to: <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-700 hover:after:w-full mt-1 ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change address
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              onClick={() => navigate('/checkout')}>
                Proceed to checkout
              </button>
            </div>
          </div>

          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
