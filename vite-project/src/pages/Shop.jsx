// src/pages/Shop.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  // pull the array of products out of Redux (default to empty array)
  const products = useSelector(state => state.product?.products ?? []);

  // read out ?search=foo
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search')?.toLowerCase().trim() || '';

  // filter if we have a query (use name instead of title)
  const filtered = query
    ? products.filter(p =>
        p.name?.toLowerCase().includes(query)
      )
    : products;

  return (
    <div className="mx-auto py-12 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

      {query && (
        <p className="mb-4 text-center">
          Showing results for <span className="font-semibold">“{query}”</span>
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
