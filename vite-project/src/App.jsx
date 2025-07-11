import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order"
import ProductDetail from "./pages/ProductDetail"
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
      <Navbar />

      <main className="pt-32 px-4"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder}/>} />
          <Route path="/order-confirmation" element={<Order order={order}/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;