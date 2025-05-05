import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi'; 
import { useCart } from '../context/CartContext'; 

const Header = () => {
  const { cartItems } = useCart(); 

  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header
      style={{
        padding: '16px',
        backgroundColor: '#3B82F6', 
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
        }}
      >
        <h1
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            whiteSpace: 'nowrap',
          }}
        >
          Product Shop
        </h1>

        <nav>
          <ul
            style={{
              display: 'flex',
              gap: '24px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link
                to="/"
                style={{ color: 'white', textDecoration: 'none' }}
                onMouseOver={(e) => (e.target.style.color = '#E5E7EB')}
                onMouseOut={(e) => (e.target.style.color = 'white')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                style={{ color: 'white', textDecoration: 'none' }}
                onMouseOver={(e) => (e.target.style.color = '#E5E7EB')}
                onMouseOut={(e) => (e.target.style.color = 'white')}
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ flex: 1, maxWidth: '400px' }}>
          <input
            type="text"
            placeholder="Search products..."
            style={{
              width: '100%',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              outline: 'none',
              color: 'black',
            }}
          />
        </div>

        <Link
          to="/cart"
          style={{ position: 'relative', color: 'white', fontSize: '24px' }}
          onMouseOver={(e) => (e.target.style.color = '#E5E7EB')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          <FiShoppingCart />
          {totalItemsInCart > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#FF4747',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              {totalItemsInCart}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
