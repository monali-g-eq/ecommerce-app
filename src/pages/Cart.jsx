import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart-section">
      <div className="container">
        <div className="row">
          {cart.map((item, index) => {
            return (
              <div className="col-12" key={item.id}>
                <div className="card card-details" style={{ "max-width": "540px" }}>
                  <div className="card-body">
                    <Link to={`/product/${item.id}`}>
                      {" "}
                      <h5 className="card-title">{item.title}</h5>
                    </Link>
                    <p className="card-link">
                      Price : {item.price}
                    </p>
                    <p className="card-link">
                    Total Price : ${item.price * item.quantity}
                    </p>

                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={() => dispatch(increment(item.id))}
                          >
                            +
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            {item.quantity}
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={() => dispatch(decrement(item.id))}
                          >
                            -
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div className="btn">
                      <button
                        onClick={() => dispatch(removeCart(index))}
                        type="button"
                        className="btn btn-dark"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
