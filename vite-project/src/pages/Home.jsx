import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import HeroImage from '../assets/Images/hero-page.png'
import InfoSection from '../components/InfoSection.jsx';
import CategorySection from '../components/CategorySection.jsx';
import { setProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux"; 
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])
  return (
    <div>
     
      <div className="relative w-screen h-[50vh] flex items-center justify-center">          
        <img
          src={HeroImage}
          alt="Hero showcasing devices"
          className="w-full h-auto object-contain block"  
        />

      <div className="absolute top-50 left-50 text-white text-center">
        
        <h2 className="text-4xl font-bold">WELCOME TO TECHIFY</h2>
        <p className="text-3xl mt-2.5 font-bold">Just In - Discover Our Latest Tech Essentials !</p> <br/>
         <Link to="/shop" className="hero-btn">
            SHOP NOW
          </Link>
      </div>
    </div>


      {/* REST OF THE PAGE */}
<div className="bg-white mt-8 px-4 md:px-16 lg:px-24">
  <InfoSection />
  <CategorySection />

  <div className="container mx-auto pt-16 md:pt-20 lg:pt-24">  {/* ← add top padding */}
    <h2 className="text-4xl font-bold mb-8 text-center">EXPLORE TOP PRODUCTS</h2> <br/> <br/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {products.products.slice(0, 5).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</div>

<br/>  <br/>
      <Shop />
    </div>
  )
}

export default Home