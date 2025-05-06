import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from "../redux/cartSlice"; 
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.product.id === productId);
    if (item) {
      dispatch(updateQuantity({ productId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.product.id === productId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ productId, quantity: item.quantity - 1 }));
    }
  };

  const handleGoToProductDetail = (productId) => {
    navigate(`/products/${productId}`);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg cursor-pointer"
                    onClick={() => handleGoToProductDetail(product.id)}
                  />
                  <div>
                    <h3
                      className="text-lg font-bold cursor-pointer"
                      onClick={() => handleGoToProductDetail(product.id)}
                    >
                      {product.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">${product.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecreaseQuantity(product.id)}
                    className="px-3 py-1 bg-gray-200 rounded-full"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className="px-3 py-1 bg-gray-200 rounded-full"
                  >
                    +
                  </button>
                  <p className="font-semibold text-gray-700 ml-4">Total: ${product.price * quantity}</p>
                  <button
                    onClick={() => handleRemoveItem(product.id)}
                    className="text-red-500 font-semibold ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: ${getTotalPrice()}</h2>
            <button
              onClick={() => alert('Proceeding to checkout...')} // Replace with actual checkout logic
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
