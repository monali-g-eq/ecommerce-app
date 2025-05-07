import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section className="header-section">
        <div className="header-section wrapper">
          <div className="container-fluid px-0">
            <div className="header-top bg-dark text-white text-center py-2 align-items-center">
              <div className="detail">
                <p>Sign up and get 20% off to your first order. Sign Up Now</p>
              </div>
            </div>
            <div className="header-bottom">
              <div className="row align-items-center">
                <div className="col-2">
                  <div className="logo">
                    <h1>SHOP.CO</h1>
                  </div>
                </div>
                <div className="col-4 ">
                  <div className="nav">
                    <ul className="nav-list d-flex flex-wrap justify-content-between">
                      <li className="nav-item">Shop</li>
                      <li className="nav-item">On Sale</li>
                      <li className="nav-item">New Arrivals</li>
                      <li className="nav-item">Brands</li>
                    </ul>
                  </div>
                </div>
                <div className="col-5">
                  <div className="search-container position-relative">
                    <i className="fas fa-search search-icon"></i>
                    <input
                      type="text"
                      className="form-control search-input"
                      placeholder="Search for products..."
                    />
                  </div>
                </div>
                <div className="col-1 d-flex" style={{ paddingRight: "15px" }}>
                  <Link
                    to="/cart"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="profile" style={{ margin: 0 }}>
                      <img
                        src="./img/header/cart.png"
                        alt=""
                        style={{ width: "auto", height: "20px",paddingRight:"25px" }}
                      />
                    </div>
                  </Link>
                  <Link
                    to="/login"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="cart" style={{ margin: 0 }}>
                      <img
                        src="./img/header/profile.png"
                        alt=""
                        style={{ width: "auto", height: "20px" }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
 