import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


export default function ProductDetailsPage() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert(`Added ${product.title} to cart with quantity: ${quantity}`);
  };
  

  const renderVariants = () => {
    if (product && (product.colors || product.sizes)) {
      return (
        <div className="mb-6">
          {product.colors && (
            <div className="mb-4">
              <h4 className="font-semibold">Select Color</h4>
              <select className="border rounded px-4 py-2 mt-2">
                {product.colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}
          {product.sizes && (
            <div>
              <h4 className="font-semibold">Select Size</h4>
              <select className="border rounded px-4 py-2 mt-2">
                {product.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Product Details */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {/* Left Side - Product Images */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <div className="flex gap-2">
            {product.images &&
              product.images.slice(1, 5).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-16 object-cover rounded-lg cursor-pointer"
                />
              ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-blue-600 font-semibold text-lg mb-4">${product.price}</p>

          {/* Variants */}
          {renderVariants()}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 rounded px-4 py-2 w-16"
            />
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white ml-4 py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Rating/Reviews (Dummy Data) */}
          <div>
            <h4 className="font-semibold">Ratings & Reviews</h4>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">
                {'⭐'.repeat(Math.floor(product.rating))}
              </span>
              <p className="text-gray-700">({product.rating} ratings)</p>
            </div>
            <p className="text-gray-600 mt-2">"This is a dummy review text."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
