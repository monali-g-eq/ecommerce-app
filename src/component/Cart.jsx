import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/productSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return sum + price * quantity;
  }, 0);

  const discountRate = 0.2; 
  const discount = subtotal * discountRate;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="cart-section py-4">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-muted">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </nav>

        <h2 className="fw-bold mb-4">YOUR CART</h2>

        <div className="row">
          <div
            className="col-12 col-md-8"
            style={{ border: "1px solid #ddd", padding: "15px" }}
          >
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="d-flex flex-column flex-sm-row justify-content-between align-items-center bg-white rounded p-3 mb-3 position-relative"
                  style={{
                    borderBottom:
                      index === cartItems.length - 1
                        ? "none"
                        : "1px solid #ddd",
                  }}
                >
                  <div className="d-flex align-items-center w-100">
                    <div className="me-3">
                      <img
                        src={item.thumbnail || item.image}
                        alt={item.title || item.name}
                        className="img-fluid rounded"
                        style={{
                          width: "100%",
                          maxWidth: "80px", 
                          height: "auto",   
                          objectFit: "cover", 
                        }}
                      />
                    </div>
                    <div className="w-100">
                      <h5 className="mb-1">{item.title || item.name}</h5>
                      <p className="mb-0 text-muted">
                        Size: {item.size || "Large"}
                      </p>
                      <p className="mb-0 text-muted">
                        Color: {item.color || "Default"}
                      </p>
                      <h5 className="mt-2 text-dark fw-bold">
                        ${parseFloat(item.price).toFixed(2) || "0.00"}
                      </h5>
                    </div>
                  </div>

                  <button
                    className="btn btn-link text-danger position-absolute"
                    style={{ top: "10px", right: "10px" }}
                    onClick={() => dispatch(removeCartProduct(item))}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>

                  <div
                    className="position-absolute"
                    style={{
                      bottom: "10px",
                      right: "10px",
                      backgroundColor: "#0000001A",
                      borderRadius: "5px",
                      padding: "5px 10px",
                    }}
                  >
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => dispatch(decreaseQuantity(item))}
                      style={{ padding: "0 5px" }}
                    >
                      −
                    </button>
                    <span className="mx-3">{parseInt(item.quantity) || 1}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => dispatch(increaseQuantity(item))}
                      style={{ padding: "0 5px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-12 col-md-4">
            <div className="border rounded p-4 bg-white">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span className="fw-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between text-danger mb-2">
                <span>Discount (-{discountRate * 100}%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add promo code"
                />
                <button className="btn btn-dark">Apply</button>
              </div>

              <button
                className="btn btn-dark w-100 d-flex justify-content-center items-center py-2"
                style={{ borderRadius: "15px" }} 
              >
                <span className="mr-2">Go to Checkout</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
