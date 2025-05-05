import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Product from "./component/Product";
import Layout from "./component/Layout";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import Login from "./component/Login";
import ProtectedRoute from "./component/protectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          {/* Protected Pages */}
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

          {/* 404 Page */}
          <Route path="*" element={<h2>404 - Page Not Found!</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
