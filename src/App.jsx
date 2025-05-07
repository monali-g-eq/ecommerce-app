import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Footer from './Component/Footer';
import './App.css'

// Optional Protected Route (if needed later)
const ProtectedRoute = ({ children }) => {
  const user = true; // Replace with actual auth logic
  return user ? children : <Navigate to="/login" />;
};

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      <Navbar />
      <div className="pt-16 p-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-screen-xl mx-auto flex-1 overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <main className="min-w-fit min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Main Layout for all other pages */}
        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </main>
  );
}


export default App;
