// src/pages/Order.jsx
import React from "react";
import { useNavigate } from "react-router-dom";


const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="order-container">
      <h2>Thank you for your order</h2>
      <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>

        <div className="shipping-info">
          <h4>Shipping Information</h4>
          <p>{order.shippingInformation.name}</p>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>

        <div className="items-ordered">
          <h4>Items Ordered</h4>
          {order.products.map(product => (
            <div key={`${product.id}-${product.selectedColor}`} className="item-row">
              <span>{product.name} (x{product.quantity})</span>
              <span>${(product.price * product.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="total-row">
          <span>Total Price:</span>
          <strong>${order.totalPrice.toFixed(2)}</strong>
        </div>
      </div>

      <div className="order-actions">
  <button
    className="btn-blue"
    onClick={() => {
      window.location.href = 'https://www.surveymonkey.com/r/ZTCG688';
    }}
  >
    Help us with the Survey
  </button>

  <button
    className="btn-blue"
    onClick={() => navigate('/')}
  >
    Continue Shopping
  </button>
</div>

    </div>
  );
};

export default Order;
