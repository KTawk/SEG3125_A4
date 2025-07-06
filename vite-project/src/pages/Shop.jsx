import React, { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const allProducts = useSelector(state => state.product?.products ?? []);
  const [searchParams] = useSearchParams();

  // 1st-level filters from URL
  const query    = searchParams.get('search')?.toLowerCase().trim()   || '';
  const brandURL = searchParams.get('brand')?.toLowerCase().trim()    || '';
  const catURL   = searchParams.get('category')?.toLowerCase().trim() || '';


  // First-level filter by search/brand/category
  const firstLevel = useMemo(() => {
    return allProducts.filter(p => {
      const mQ  = query    ? p.name.toLowerCase().includes(query)       : true;
      const mB  = brandURL ? p.brand.toLowerCase() === brandURL        : true;
      const mC  = catURL   ? p.category.toLowerCase() === catURL       : true;
      return mQ && mB && mC;
    });
  }, [allProducts, query, brandURL, catURL]);

  // DERIVE available filter options *from* firstLevel results:
  const { brands, colors, categories, minPrice, maxPrice } = useMemo(() => {
    const b = new Set(), c = new Set(), cat = new Set();
    let min = Infinity, max = -Infinity;
    firstLevel.forEach(p => {
      b.add(p.brand);
      p.colors.forEach(col => c.add(col));
      cat.add(p.category);
      min = Math.min(min, p.price);
      max = Math.max(max, p.price);
    });
    return {
      brands: Array.from(b).sort(),
      colors: Array.from(c).sort(),
      categories: Array.from(cat).sort(),
      minPrice: Number.isFinite(min) ? min : 0,
      maxPrice: Number.isFinite(max) ? max : 0,
    };
  }, [firstLevel]);

  // Local UI state as strings so inputs can be cleared
  const [lowInput, setLowInput]   = useState(minPrice.toString());
  const [highInput, setHighInput] = useState(maxPrice.toString());
  const [selectedBrand, setSelectedBrand]   = useState('');
  const [selectedColor, setSelectedColor]   = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Reset when first-level changes
  useEffect(() => {
    setLowInput(minPrice.toString());
    setHighInput(maxPrice.toString());
    setSelectedBrand('');
    setSelectedColor('');
    setSelectedCategory('');
  }, [minPrice, maxPrice]);

  // Second-level filtering with parsed values
  const finalList = useMemo(() => {
    const lowVal  = parseFloat(lowInput);
    const highVal = parseFloat(highInput);
    const lo = isNaN(lowVal)  ? minPrice : lowVal;
    const hi = isNaN(highVal) ? maxPrice : highVal;
    return firstLevel.filter(p => {
      const inPrice  = p.price >= lo && p.price <= hi;
      const inBrand  = selectedBrand ? p.brand === selectedBrand   : true;
      const inColor  = selectedColor ? p.colors.includes(selectedColor) : true;
      const inCat = selectedCategory ? p.category === selectedCategory : true;
      return inPrice && inBrand && inColor && inCat;
    });
  }, [firstLevel, lowInput, highInput, selectedBrand, selectedColor, selectedCategory, minPrice, maxPrice]);

  return (
    <div className="mx-auto py-12 md:px-16 lg:px-24 space-y-8">

      <h2 className="text-4xl font-bold text-center">Shop Now</h2> 

      {/* breadcrumbs */}
      {(query || brandURL || catURL) && (
        <p className="text-center text-gray-700">
          {catURL   && <>Category: <strong>{catURL}</strong>. </>}
          {brandURL && <>Brand:    <strong>{brandURL}</strong>. </>}
          {query    && <>Search:   <strong>“{query}”</strong>. </>}
        </p>
      )}

      {/* ─────── 2nd-level FILTER BAR ─────── */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow">
        {/* Price Range */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price: ${isNaN(parseFloat(lowInput)) ? minPrice : parseFloat(lowInput)} – ${isNaN(parseFloat(highInput)) ? maxPrice : parseFloat(highInput)}
          </label>
          <div className="flex space-x-2">
           <input
                type="number"
                min="0"
                max="9999"
                value={lowInput}
                onChange={e => setLowInput(e.target.value)}
                onBlur={() => {
                    let low = parseFloat(lowInput);
                    let high = parseFloat(highInput);
                    if (isNaN(low) || low < 0) low = 0;
                    else if (low > 9999) low = 9999;
                    if (!isNaN(high) && low > high) low = high;
                    setLowInput(low.toString());
                }}
                className="w-20 border rounded px-2 py-1"
                />
            <span className="self-center">to</span>

            <input
                type="number"
                min="0"
                max="9999"
                value={highInput}
                onChange={e => setHighInput(e.target.value)}
                onBlur={() => {
                    let low = parseFloat(lowInput);
                    let high = parseFloat(highInput);
                    if (isNaN(high) || high > 9999) high = 9999;
                    else if (high < 0) high = 0;
                    if (!isNaN(low) && high < low) high = low;
                    setHighInput(high.toString());
                }}
                className="w-20 border rounded px-2 py-1"
                />
                
          </div>
        </div>

        {/* Brand Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
          <select
            value={selectedBrand}
            onChange={e => setSelectedBrand(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">All brands</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        {/* Category Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">All categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Color Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
          <select
            value={selectedColor}
            onChange={e => setSelectedColor(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">All colors</option>
            {colors.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* ─────── DISPLAY GRID ─────── */}
      { finalList.length === 0 ? (
    <p className="text-center text-red-600">
      No products match your criteria.
    </p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      { finalList.map(product => (
          <ProductCard 
            key={`${product.id}-${product.colors[0]}`} 
            product={product} 
            selectedColor={selectedColor} 
          />
      )) }
    </div>
  )
}

    </div>
  );
};

export default Shop;
