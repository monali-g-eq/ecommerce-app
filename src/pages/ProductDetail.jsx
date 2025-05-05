import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    'https://storage.googleapis.com/a1aa/image/2b871be0-b65c-4df0-4c66-2868562ecbc2.jpg'
  );
  const [selectedColor, setSelectedColor] = useState('#6b6b47'); 
  const [selectedSize, setSelectedSize] = useState('Large'); 

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const productDetails = {
      image: selectedImage,
      quantity,
      color: selectedColor,
      size: selectedSize,
      price: 260, 
      name: 'ONE LIFE GRAPHIC T-SHIRT',
    };

    addToCart(productDetails);  
    navigate('/cart'); 
  };

  return (
    <div className="bg-white text-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-10">
          <div className="flex space-x-4 md:w-1/5">
            <img
              alt="Front view of army green t-shirt with black text graphic"
              className="rounded-lg border border-gray-200 object-contain cursor-pointer"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/4c737f6c-c6eb-4acc-284f-cb97e3e0285a.jpg"
              width="80"
              onClick={() => handleImageClick('https://storage.googleapis.com/a1aa/image/4c737f6c-c6eb-4acc-284f-cb97e3e0285a.jpg')}
            />
            <img
              alt="Back view of army green t-shirt with small text graphic"
              className="rounded-lg border border-gray-200 object-contain cursor-pointer"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/d921b957-fd4f-4ab0-259a-332786711819.jpg"
              width="80"
              onClick={() => handleImageClick('https://storage.googleapis.com/a1aa/image/d921b957-fd4f-4ab0-259a-332786711819.jpg')}
            />
            <img
              alt="Model wearing army green t-shirt with black text graphic"
              className="rounded-lg border border-gray-200 object-contain cursor-pointer"
              height="80"
              src="https://storage.googleapis.com/a1aa/image/99724fb3-cc7c-4d31-78e9-1d40683de0fe.jpg"
              width="80"
              onClick={() => handleImageClick('https://storage.googleapis.com/a1aa/image/99724fb3-cc7c-4d31-78e9-1d40683de0fe.jpg')}
            />
          </div>

          <div className="md:w-2/5 rounded-lg bg-gray-100 flex items-center p-6">
            <img
              alt="Large front view of army green t-shirt with black text graphic"
              className="rounded-lg object-contain"
              height="320"
              src={selectedImage}
              width="320"
            />
          </div>

          <section className="md:w-2/5 flex flex-col space-y-6 bg-white shadow-lg p-6 rounded-lg">
            <h1 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>

            <div className="flex items-center space-x-2 text-yellow-400 text-sm md:text-base">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span className="text-gray-600 font-normal">(456)</span>
            </div>

            <div className="flex items-center space-x-3 text-lg md:text-xl font-semibold">
              <span className="text-black">$260</span>
              <span className="text-red-600 line-through text-base md:text-lg">$300</span>
              <span className="text-red-600 text-base md:text-lg">-40%</span>
            </div>

            <p className="text-gray-600 text-sm md:text-base max-w-md">
              This graphic T-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            <div>
              <p className="text-sm font-semibold mb-1">Select Colors</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleColorSelect('#6b6b47')}
                  className="w-5 h-5 rounded-full bg-[#6b6b47] border border-gray-300 focus:ring-2 focus:ring-black"
                ></button>
                <button
                  onClick={() => handleColorSelect('black')}
                  className="w-5 h-5 rounded-full bg-black border border-gray-300 focus:ring-2 focus:ring-black"
                ></button>
                <button
                  onClick={() => handleColorSelect('#2a2a4a')}
                  className="w-5 h-5 rounded-full bg-[#2a2a4a] border border-gray-300 focus:ring-2 focus:ring-black"
                ></button>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-1">Choose Size</p>
              <div className="flex space-x-3 text-xs md:text-sm font-semibold">
                <button onClick={() => handleSizeSelect('Small')} className="border border-gray-300 rounded-full py-1 px-3 text-gray-600 hover:border-black focus:outline-none focus:ring-2 focus:ring-black">Small</button>
                <button onClick={() => handleSizeSelect('Medium')} className="border border-gray-300 rounded-full py-1 px-3 text-gray-600 hover:border-black focus:outline-none focus:ring-2 focus:ring-black">Medium</button>
                <button onClick={() => handleSizeSelect('Large')} className="bg-black text-white rounded-full py-1 px-3 focus:outline-none focus:ring-2 focus:ring-black">Large</button>
                <button onClick={() => handleSizeSelect('X-Large')} className="border border-gray-300 rounded-full py-1 px-3 text-gray-600 hover:border-black focus:outline-none focus:ring-2 focus:ring-black">X-Large</button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-full w-28 md:w-32">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="w-10 h-10 flex justify-center items-center text-lg font-bold text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded-l-full"
                >
                  -
                </button>
                <input
                  className="w-full text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  type="number"
                  value={quantity}
                  readOnly
                />
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="w-10 h-10 flex justify-center items-center text-lg font-bold text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded-r-full"
                >
                  +
                </button>
              </div>
              <button onClick={handleAddToCart} className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black">
                <i className="fas fa-cart-plus"></i>
                <span>Add to Cart</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-black text-white py-6">
      </footer>
    </div>
  );
};

export default ProductDetail;
