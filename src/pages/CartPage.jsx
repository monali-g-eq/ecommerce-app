import React from 'react';
import { useCart } from '../context/CartContext';
import { FiTrash2 } from 'react-icons/fi'; 
import { FiPlus, FiMinus } from 'react-icons/fi'; 

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
                    onClick={() => decreaseQuantity(item.id)} 
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
                    onClick={() => increaseQuantity(item.id)} 
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div style={priceStyle}>${item.price * item.quantity}</div>
              <button
                onClick={() => removeItem(item.id)} 
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

