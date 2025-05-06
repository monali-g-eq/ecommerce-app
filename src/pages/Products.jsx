import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts, setLoading, setError } from '../redux/cartSlice';
import Filters from '../components/Filters';
import ProductCard from "../components/ProductCard"
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading());
      // loading set karyu ahiya
      try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch(setProducts(response.data.products));
        console.log(response);
        console.log(response.data.products);
        // console.log("Products", products);
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch(setError());
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (status === 'loading') return <p style={{ height: '100vh', textAlign: 'center', width: '100%' }}>Loading...</p>;
  if (status === 'failed') return <p>Failed to load products.</p>;
  console.log("Products", products);

  return (
    <div className='flex container mx-auto px-4 sm:px-6 lg:px-8'>

      {/* // filter ahiya aavse */}
      <div className='w-1/4 p-4'>
        <Filters />
      </div>

      {/* // rproduct card ahiya aavse */}
      <div className="w-3/4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}/`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products