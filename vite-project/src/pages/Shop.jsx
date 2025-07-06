// src/pages/Shop.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const products = useSelector(state => state.product?.products ?? []);
  const [searchParams] = useSearchParams();

  const query    = searchParams.get('search')?.toLowerCase().trim()  || '';
  const brand    = searchParams.get('brand')?.toLowerCase().trim()   || '';
  const category = searchParams.get('category')?.toLowerCase().trim()|| '';

  const filtered = products.filter(p => {
    const matchesQuery    = query    ? p.name.toLowerCase().includes(query)         : true;
    const matchesBrand    = brand    ? p.brand.toLowerCase() === brand             : true;
    const matchesCategory = category ? p.category.toLowerCase() === category       : true;
    return matchesQuery && matchesBrand && matchesCategory;
  });

  return (
    <div className="mx-auto py-12 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

      {(query || brand || category) && (
        <p className="mb-4 text-center">
          {category && <>Category: <span className="font-semibold">{category}</span>. </>}
          {brand    && <>Brand: <span className="font-semibold">{brand}</span>. </>}
          {query    && <>Search: <span className="font-semibold">“{query}”</span>.</>}
          {filtered.length === 0 && ' — no matches found.'}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
