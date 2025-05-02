// src/pages/CartPage.jsx
// import React from 'react';
// import { useCart } from '../context/CartContext';

// const CartPage = () => {
//   const { cartItems } = useCart();

//   return (
//     <div className="max-w-5xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cartItems.map((item, index) => (
//             <div key={index} className="flex items-center border rounded-lg p-4 shadow">
//               <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-lg" />
//               <div className="ml-6 flex-1">
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-sm text-gray-500">
//                   Size: {item.size} | Color: <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
//                 </p>
//                 <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//               </div>
//               <div className="text-lg font-bold">${item.price * item.quantity}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
import React from 'react';
import { useCart } from '../context/CartContext';
import { FiTrash2 } from 'react-icons/fi'; // Trash icon for delete
import { FiPlus, FiMinus } from 'react-icons/fi'; // Plus and Minus icons for quantity change

const CartPage = () => {
  const { cartItems, removeItem, increaseQuantity, decreaseQuantity } = useCart();

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2.5rem 1rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const emptyCartStyle = {
    color: '#6b7280',
  };

  const cartItemWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    padding: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  };

  const imageStyle = {
    width: '7rem',
    height: '7rem',
    objectFit: 'cover',
    borderRadius: '0.375rem',
  };

  const itemDetailsStyle = {
    marginLeft: '1.5rem',
    flex: 1,
  };

  const itemTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
  };

  const itemTextStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
  };

  const quantityStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const priceStyle = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={emptyCartStyle}>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={cartItemWrapperStyle}>
              <img src={item.image} alt={item.name} style={imageStyle} />
              <div style={itemDetailsStyle}>
                <h2 style={itemTitleStyle}>{item.name}</h2>
                <p style={itemTextStyle}>
                  Size: {item.size} | Color: <span style={{ ...itemTextStyle, backgroundColor: item.color, display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%' }}></span>
                </p>
                <div style={quantityStyle}>
                  <button
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: '4px 8px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => decreaseQuantity(item.id)} // Decrease quantity
                  >
                    <FiMinus />
                  </button>
                  <p style={quantityStyle}>Qty: {item.quantity}</p>
                  <button
                    style={{
                      backgroundColor: '#f3f4f6',
                      padding: '4px 8px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => increaseQuantity(item.id)} // Increase quantity
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div style={priceStyle}>${item.price * item.quantity}</div>
              {/* Delete button */}
              <button
                onClick={() => removeItem(item.id)} // Remove item from cart
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ff4747',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                }}
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

