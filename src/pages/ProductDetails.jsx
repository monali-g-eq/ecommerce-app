import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('Product Details');

  const dummyReviews = [
    {
      name: 'Samantha D.',
      rating: 5,
      comment: 'The design is unique and the fabric feels premium. Highly recommend!',
      date: 'August 18, 2023',
    },
    {
      name: 'Ethan R.',
      rating: 4,
      comment: 'Great shirt, fits well. Would buy again.',
      date: 'August 17, 2023',
    },
    {
      name: 'Olivia P.',
      rating: 5,
      comment: 'Impressed with the quality and fit.',
      date: 'August 20, 2023',
    },
  ];


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setMainImage(data.images?.[0]);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity, selectedColor, selectedSize }));
    alert(`Added ${product.title} to cart`);
  };

  const colorMap = {
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-400',
    blue: 'bg-blue-600',
    black: 'bg-black',
    white: 'bg-white border',
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-center">Product not found</div>;



  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Images */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Main Image */}
        <div className="w-full md:w-auto">
          <img
            src={mainImage}
            className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            alt="main"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 mt-4 md:mt-0 overflow-x-auto">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className="w-20 h-20 object-cover rounded border cursor-pointer hover:border-black"
              alt={`thumb-${i}`}
            />
          ))}
        </div>

      </div>


      {/* Right Info Panel */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg">{'⭐'.repeat(Math.floor(product.rating))}</span>
          <span className="text-gray-600">({product.rating})</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <span className="line-through text-gray-400">${(product.price * 1.2).toFixed(2)}</span>
        </div>
        <p className="text-gray-700">{product.description}</p>

        {/* Colors */}
        <div>
          <h4 className="font-semibold text-sm mb-1">Choose Color</h4>
          <div className="flex gap-2">
            {Object.keys(colorMap).map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'} ${colorMap[color]}`}
                aria-label={color}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="font-semibold text-sm mb-1 mt-4">Choose Size</h4>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm border rounded-full ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-300  '}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex gap-4 items-center mt-6">
          <div className="flex items-center border rounded">
            <button
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              className="px-3 py-1 text-lg"
            >−</button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="px-3 py-1 text-lg"
            >＋</button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="col-span-2 mt-16">
        <div className="flex gap-6 border-b text-sm font-medium text-gray-600">
          {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 border-b-2 ${activeTab === tab ? 'border-black text-black' : 'border-transparent'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-5">
          {activeTab === 'Product Details' && (
            <div className="p-6 border rounded-md bg-white">
              <h2 className="text-lg font-semibold mb-2">Product Description</h2>
              <p className="text-gray-700">{product.description}</p>
              <ul className="mt-4 list-disc  text-gray-600 space-y-1">
                <li>High-quality material</li>
                <li>Unique graphic design</li>
                <li>Available in multiple colors and sizes</li>
                <li>Easy to wash and durable</li>
              </ul>
            </div>
          )}

          {activeTab === 'Rating & Reviews' && (
            <div className="space-y-6">
              {dummyReviews.map((review, idx) => (
                <div key={idx} className="p-4 border rounded-md bg-white">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">Posted on {review.date}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'FAQs' && (
            <div className="p-5 border rounded-md bg-white space-y-4">
              <div>
                <h4 className="font-semibold">Q: Is this t-shirt true to size?</h4>
                <p className="text-gray-600">A: Yes, it's designed with standard fit in mind.</p>
              </div>
              <div>
                <h4 className="font-semibold">Q: Can I return or exchange it?</h4>
                <p className="text-gray-600">A: Yes, returns are accepted within 30 days of purchase.</p>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
