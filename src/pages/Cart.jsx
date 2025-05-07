import React from "react";
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

  const getSubtotal = () =>
    cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const discount = 0.2; // 20%
  const deliveryFee = 15;
  const subtotal = getSubtotal();
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                <div className="flex gap-4 items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-md cursor-pointer"
                    onClick={() => handleGoToProductDetail(product.id)}
                  />
                  <div>
                    <h3
                      className="text-lg font-semibold cursor-pointer hover:underline"
                      onClick={() => handleGoToProductDetail(product.id)}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-600">${product.price}</p>
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
                  <p className="font-semibold ml-4">${product.price * quantity}</p>
                  <button
                    onClick={() => handleRemoveItem(product.id)}
                    className="text-red-600 ml-4"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Summary */}
          <div className="bg-white p-6 rounded-lg border shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (20%)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-3 py-2 border rounded mb-2"
              />
              <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
                Apply
              </button>
            </div>

            <button
              onClick={() => alert('Going to checkout...')}
              className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:opacity-90"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
