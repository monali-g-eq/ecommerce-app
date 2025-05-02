import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [cart, setCart] = useState({});
  const [showFilter, setShowFilter] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    } else {
      fetchProducts();
    }
  }, [selectedCategory]);

  const fetchProducts = async () => {
    const res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data.products);
  };

  const fetchCategories = async () => {
    const res = await axios.get('https://dummyjson.com/products/categories');
    setCategories(res.data);
  };

  const fetchProductsByCategory = async (category) => {
    const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
    setProducts(res.data.products);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    let sorted = [...products];
    if (value === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (value === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    setProducts(sorted);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const qty = prevCart[product.id] || 0;
      return { ...prevCart, [product.id]: qty + 1 };
    });
  };

  return (
    
    <div className="p-6">
      <button
        onClick={() => setShowFilter((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {showFilter ? 'Hide Filters' : 'Show Filters'}
      </button>

      {showFilter && (
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">All Categories</option>
            {Array.isArray(categories) &&
              categories.map((cat) => (
                <option key={cat} value={cat}>
                  {typeof cat === 'string'
                    ? cat.charAt(0).toUpperCase() + cat.slice(1)
                    : JSON.stringify(cat)}
                </option>
              ))}
          </select>

          <select
            onChange={handleSortChange}
            className="border p-2 rounded-md"
          >
            <option value="">Sort</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-2 shadow hover:shadow-md transition cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-24 h-24 object-cover rounded mx-auto mb-2"
            />
            <h2 className="font-semibold text-sm text-center">{product.title}</h2>
            <p className="text-gray-600 text-center text-sm">${product.price}</p>
            <p className="text-sm text-yellow-500 text-center">⭐ {product.rating}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="mt-2 w-full px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Add to Cart ({cart[product.id] || 0})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
