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

  const discount = subtotal * 0.2;
  const delivery = 3;
  const total = subtotal - discount + delivery;

  return (
    <div className="cart-section">
      <div className="cart-section-wrapper">
        <div className="container py-5">
          <h2 className="fw-bold mb-4">Your Cart</h2>
          <div className="row">
            <div className="col-md-8">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center border rounded p-3 mb-3 bg-light"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="img-fluid rounded me-3"
                        width="80"
                      />
                      <div>
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="mb-0 text-muted">Size: {item.size}</p>
                        <p className="mb-0 text-muted">Color: {item.color}</p>
                        <h5 className="mt-2">
                          {formatCurrency(parseFloat(item.price) || 0)}
                        </h5>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => dispatch(decreaseQuantity(item))}
                      >
                        −
                      </button>
                      <span>{parseInt(item.quantity) || 1}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => dispatch(increaseQuantity(item))}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-link text-danger ms-3"
                        onClick={() => dispatch(removeCartProduct(item))}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="col-md-4">
              <div className="border rounded p-4 bg-white">
                <h5 className="fw-bold mb-3">Order Summary</h5>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between text-danger">
                  <span>Discount (-20%)</span>
                  <span>-{formatCurrency(discount)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Delivery Fee</span>
                  <span>{formatCurrency(delivery)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>

                <div className="input-group my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add promo code"
                  />
                  <button className="btn btn-dark">Apply</button>
                </div>

                <button className="btn btn-dark w-100 d-flex justify-content-between align-items-center">
                  Go to Checkout <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
