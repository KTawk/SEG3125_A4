// src/pages/Checkout.jsx
import React, { useState }    from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";    

export default function Checkout({ setOrder }) {
  const cart     = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // accordions
  const [billingOpen, setBillingOpen]   = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentOpen, setPaymentOpen]   = useState(false);

  // form state + errors
  const [form, setForm] = useState({
    name:   "", email:   "", phone: "",
    address:"", city:    "", zip:   "",
    paymentMethod: "cod",
    cardNumber:    "", cardName: "", expiry:"", cvv:"",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim())   errs.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!/^\d{7,15}$/.test(form.phone))     errs.phone = "Valid phone #";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.city.trim())    errs.city = "City is required";
    if (!/^\d{4,10}$/.test(form.zip))       errs.zip = "Invalid zip code";

    if (form.paymentMethod === "dc") {
      if (!/^\d{12,19}$/.test(form.cardNumber)) errs.cardNumber = "Card # invalid";
      if (!form.cardName.trim())               errs.cardName   = "Name on card";
      if (!/^\d\d\/\d\d$/.test(form.expiry))   errs.expiry     = "MM/YY";
      if (!/^\d{3,4}$/.test(form.cvv))         errs.cvv        = "3-4 digit CVV";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    const newOrder = {
      orderNumber: "12344",
      totalPrice:  cart.totalPrice,
      shippingInformation: {
        address: form.address,
        city:    form.city,
        zip:     form.zip
      },
      products: cart.products
    };
    setOrder(newOrder);
    dispatch(clearCart());

    navigate("/order-confirmation");
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3 space-y-6">
          {/* Billing ▶ */}
          <section className="border p-4">
            <header 
              className="flex justify-between cursor-pointer"
              onClick={()=>setBillingOpen(!billingOpen)}
            >
              <h4 className="font-semibold">Billing Information</h4>
              { billingOpen ? <FaAngleDown/> : <FaAngleUp/> }
            </header>
            { billingOpen && (
              <div className="mt-4 space-y-4">
                {/** Name **/}
                <div>
                  <label className="block">Name</label>
                  <input
                    type="text" name="name"
                    value={form.name}
                    onChange={e=>setForm({...form,name:e.target.value})}
                    className="w-full border px-3 py-2"
                  />
                  {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                </div>
                {/** Email **/}
                <div>
                  <label className="block">Email</label>
                  <input
                    type="email" name="email"
                    value={form.email}
                    onChange={e=>setForm({...form,email:e.target.value})}
                    className="w-full border px-3 py-2"
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                {/** Phone **/}
                <div>
                  <label className="block">Phone</label>
                  <input
                    type="tel" name="phone"
                    value={form.phone}
                    onChange={e=>setForm({...form,phone:e.target.value})}
                    className="w-full border px-3 py-2"
                  />
                  {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                </div>
              </div>
            )}
          </section>

          {/* Shipping ▶ */}
          <section className="border p-4">
            <header 
              className="flex justify-between cursor-pointer"
              onClick={()=>setShippingOpen(!shippingOpen)}
            >
              <h4 className="font-semibold">Shipping Information</h4>
              { shippingOpen ? <FaAngleDown/> : <FaAngleUp/> }
            </header>
            { shippingOpen && (
              <div className="mt-4 space-y-4">
                {/** Address **/}
                <div>
                  <label className="block">Address</label>
                  <input
                    type="text" name="address"
                    value={form.address}
                    onChange={e=>setForm({...form,address:e.target.value})}
                    className="w-full border px-3 py-2"
                  />
                  {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
                </div>
                {/** City **/}
                <div>
                  <label className="block">City</label>
                  <input
                    type="text" name="city"
                    value={form.city}
                    onChange={e=>setForm({...form,city:e.target.value})}
                    className="w-full border px-3 py-2"
                  />
                  {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
                </div>
                {/** Zip **/}
                <div>
                  <label className="block">Zip Code</label>
                  <input
                    type="text" name="zip"
                    value={form.zip}
                    onChange={e=>setForm({...form,zip:e.target.value})}
                    className="w-full border px-3 py-2"
                  />
                  {errors.zip && <p className="text-red-600 text-sm">{errors.zip}</p>}
                </div>
              </div>
            )}
          </section>

          {/* Payment ▶ */}
          <section className="border p-4">
            <header 
              className="flex justify-between cursor-pointer"
              onClick={()=>setPaymentOpen(!paymentOpen)}
            >
              <h4 className="font-semibold">Payment Method</h4>
              { paymentOpen ? <FaAngleDown/> : <FaAngleUp/> }
            </header>
            { paymentOpen && (
              <div className="mt-4 space-y-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio" name="payment"
                    checked={form.paymentMethod==="cod"}
                    onChange={()=>setForm({...form,paymentMethod:"cod"})}
                  />
                  <span className="ml-2">Cash on Delivery</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio" name="payment"
                    checked={form.paymentMethod==="dc"}
                    onChange={()=>setForm({...form,paymentMethod:"dc"})}
                  />
                  <span className="ml-2">Debit Card</span>
                </label>

                {form.paymentMethod==="dc" && (
                  <div className="bg-gray-50 p-4 rounded">
                    {/** Card # **/}
                    <div className="mb-4">
                      <label className="block">Card Number</label>
                      <input
                        type="text" name="cardNumber"
                        value={form.cardNumber}
                        onChange={e=>setForm({...form,cardNumber:e.target.value})}
                        className="w-full border px-3 py-2"
                      />
                      {errors.cardNumber && <p className="text-red-600 text-sm">{errors.cardNumber}</p>}
                    </div>
                    {/** Card Name **/}
                    <div className="mb-4">
                      <label className="block">Card Holder Name</label>
                      <input
                        type="text" name="cardName"
                        value={form.cardName}
                        onChange={e=>setForm({...form,cardName:e.target.value})}
                        className="w-full border px-3 py-2"
                      />
                      {errors.cardName && <p className="text-red-600 text-sm">{errors.cardName}</p>}
                    </div>
                    <div className="flex gap-4">
                      {/** Expiry **/}
                      <div className="flex-1">
                        <label className="block">Expiry (MM/YY)</label>
                        <input
                          type="text" name="expiry"
                          value={form.expiry}
                          onChange={e=>setForm({...form,expiry:e.target.value})}
                          className="w-full border px-3 py-2"
                        />
                        {errors.expiry && <p className="text-red-600 text-sm">{errors.expiry}</p>}
                      </div>
                      {/** CVV **/}
                      <div className="flex-1">
                        <label className="block">CVV</label>
                        <input
                          type="text" name="cvv"
                          value={form.cvv}
                          onChange={e=>setForm({...form,cvv:e.target.value})}
                          className="w-full border px-3 py-2"
                        />
                        {errors.cvv && <p className="text-red-600 text-sm">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>

        {/* Order summary */}
        <aside className="md:w-1/3 bg-white p-6 rounded shadow border">
          <h4 className="font-semibold mb-4">Order Summary</h4>
          <div className="space-y-4">
            {cart.products.map(item => (
              <div key={item.id+item.selectedColor} className="flex justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name}
                       className="w-16 h-16 object-contain rounded"/>
                  <div className="ml-3">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4 flex justify-between">
            <span>Total Price:</span>
            <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
          </div>

          {/* dark-blue “Place Order” */}
        <button type="submit" className="place-order-btn">
            Place Order
        </button>

        </aside>
      </div>
    </form>
  );
}
