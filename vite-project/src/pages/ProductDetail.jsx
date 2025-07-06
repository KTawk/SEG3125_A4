import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(state => state.product.products);
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const found = products.find(p => p.id === +id);
    setProduct(found);
    if (found) {
      const imgs = Array.isArray(found.images) ? found.images : [found.image];
      setSelectedColor(found.colors ? found.colors[0] : "");
      setSelectedImage(imgs[0]);
    }
  }, [id, products]);

  if (!product) return <div>Loading…</div>;

  const handleAddToCart = e => {
    e.preventDefault();
    dispatch(addToCart({
      ...product,
      image: selectedImage,
      selectedColor,
    }));
    alert("Product Added Successfully!");
  };

  // build a list of attributes to show
  const specKeys = Object.keys(product)
    .filter(k => !["id","name","price","colors","images","image"].includes(k));

  // pretty label
  const labelize = str =>
    str
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, s => s.toUpperCase());

  return (
   
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 pt-32">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* left: image */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img
            src={selectedImage}
            alt={product.name}
            className="h-full object-contain"
          />
        </div>

        {/* right: info + specs */}
        <div className="md:w-1/2 py-4 shadow-md md:p-16 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            <p className="text-xl font-semibold text-gray-800">
              ${product.price.toFixed(2)}
            </p>

            <div className="flex items-center gap-x-2">
              <label htmlFor="color" className="font-medium">Color:</label>
              <select
                id="color"
                value={selectedColor}
                onChange={e => {
                  const color = e.target.value;
                  const idx = product.colors.indexOf(color);
                  const imgs = Array.isArray(product.images)
                    ? product.images
                    : [product.image];
                  setSelectedColor(color);
                  setSelectedImage(imgs[idx] || imgs[0]);
                }}
                className="border p-1 rounded"
              >
                {product.colors.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue={1}
                className="border p-1 w-16"
              />
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-primary"
              >
                Add to Cart
              </button>
            </div>        
          </div>

          {/* Specifications */}
          {specKeys.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Specifications</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {specKeys.map(key => (
                  <li key={key}>
                    <span className="font-medium">{labelize(key)}:</span>{" "}
                    {product[key].toString()}
                  </li>
                ))}
              </ul>
              
            </div>
            
          )}
          
        </div>
        
      </div>
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 pt-25"></div>
    </div>
  );
};

export default ProductDetail;
