import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`Added ${product.title} to cart.`);
  };



  useEffect(() => {
    const url =
      selectedCategory === 'all'
        ? 'https://dummyjson.com/products'
        : `https://dummyjson.com/products/category/${selectedCategory}`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [selectedCategory]);


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);


  const sortProducts = (items) => {
    switch (sortOption) {
      case 'price-asc':
        return [...items].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...items].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...items].sort((a, b) => b.rating - a.rating);
      default:
        return items;
    }
  };


  const displayedProducts = sortProducts(products);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Category Filter */}
        <select
          className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {Array.isArray(categories) &&
            categories.map((cat, index) => (
              <option key={index} value={cat}>
                {typeof cat === 'string' ? cat.charAt(0).toUpperCase() + cat.slice(1) : ''}
              </option>
            ))}
        </select>

        {/* Sort Options */}
        <select
          className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Products */}
      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading products...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold mb-1 line-clamp-1">{product.title}</h3>
              <p className="text-blue-600 font-semibold mb-1">${product.price}</p>
              <p className="text-yellow-500 text-sm mb-3">Rating: {product.rating}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-gray-200 text-black w-full py-2 rounded-md hover:bg-gray-400 transition"
              >
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

