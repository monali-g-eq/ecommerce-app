import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./component/Product";
import Layout from "./component/Layout";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import Login from "./component/Login";
import ProtectedRoute from "./component/protectedRoutes";
import PaymentPage from "./component/PaymentPage"; 
import OrderSuccess from "./component/OrderSuccess"; 
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartFromStorage } from "./redux/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch(setCartFromStorage(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="product/:id"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="order-success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 - Page Not Found!</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
