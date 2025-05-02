import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Header from './pages/Header';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import './index.css'; 
function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />  
        <Route path="/cart" element={<CartPage />} />
             </Routes>
    </Router>
  );
}

export default App;
