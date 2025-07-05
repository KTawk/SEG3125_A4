import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import HeroImage from '../assets/Images/hero-page.png'
import InfoSection from '../components/InfoSection.jsx';
import CategorySection from '../components/CategorySection.jsx';
import { setProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux"; 
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

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
      <div className="absolute top-16 left-8 text-white">
        <p className="text-gray-200 mb-4">Kairly & Suhas</p>
        <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
        <p className="text-xl mt-2.5 font-bold">MILLIONS+ PRODUCTS</p>
        <button className="bg-red-600 px-8 py-1.5 mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
          SHOP NOW
        </button>
      </div>
    </div>


      {/* REST OF THE PAGE */}
      <div className="bg-white mt-8 px-4 md:px-16 lg:px-24">
        <InfoSection />
        <CategorySection />

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.products.slice(0, 5).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Shop />
    </div>
  )
}

export default Home