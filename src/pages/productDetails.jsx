import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/userSlice";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { addToCart, decrement, increment } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.selectProduct);
   const cart = useSelector((state) => state.cart.cart);
  const GetData = async () => {
    let res = await axios.get(`https://dummyjson.com/products/${id}`);
    
    dispatch(selectProduct(res.data));
  };

  
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="productdetails-section">
      <div className="container">
        <div className="row">
          {products ? (
            <div className="col-12">
              <div
                className="card mb-3 card-details"
                style={{ "max-width": "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={products.thumbnail}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <Link to="/product">
                        {" "}
                        <h5 className="card-title">{products.title}</h5>
                      </Link>
                      <p className="card-text">{products.description}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Rating : {products.rating}
                        </small>
                        <small className="text-muted">
                          {" "}
                          &nbsp; Price : {products.price}
                        </small>
                      </p>
                    </div>
                    
                    <div className="btn">
                      <button
                        onClick={() => dispatch(addToCart(products))}
                        type="button"
                        className="btn btn-dark"
                      >
                        Add To cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>...Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
