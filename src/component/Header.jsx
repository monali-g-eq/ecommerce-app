import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-bottom">
      {showBanner && (
        <div className="bg-black text-white text-center px-3 py-2 position-relative">
          <p className="mb-0" style={{ fontSize: "14px" }}>
            Sign up and get 20% off to your first order.{" "}
            <Link to="/signup" className="text-white text-decoration-underline">
              Sign Up Now
            </Link>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="position-absolute top-50 end-0 translate-middle-y me-2 btn btn-sm btn-link text-white"
            style={{ fontSize: "14px" }}
          >
            <FaTimes />
          </button>
        </div>
      )}

      <div className="container-fluid py-3 px-3 d-flex align-items-center justify-content-between position-relative">
        <div className="d-flex align-items-center">
          <button
            className="btn d-lg-none me-3"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={22} />
          </button>
          <h2 className="fw-bold m-0">SHOP.CO</h2>
        </div>

        <nav className="d-none d-lg-flex gap-4 mx-4">
          <span className="nav-link">Shop</span>
          <span className="nav-link">On Sale</span>
          <span className="nav-link">New Arrivals</span>
          <span className="nav-link">Brands</span>
        </nav>

        <div className="flex-grow-1 mx-4 d-none d-lg-block">
          <div className="input-group rounded bg-light">
            <span className="input-group-text bg-transparent border-0">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control border-0 bg-light"
              placeholder="Search for products..."
            />
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn d-lg-none p-0">
            <FaSearch size={18} />
          </button>

          <Link to="/cart" className="text-dark">
            <FaShoppingCart size={18} />
          </Link>
          <Link to="/login" className="text-dark">
            <FaUser size={18} />
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-white position-fixed top-0 start-0 w-75 h-100 p-4 z-3">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold m-0">Menu</h4>
            <button
              className="btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={22} />
            </button>
          </div>

          <nav className="d-flex flex-column gap-3">
            <span className="nav-link">Shop</span>
            <span className="nav-link">On Sale</span>
            <span className="nav-link">New Arrivals</span>
            <span className="nav-link">Brands</span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
