import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/userSlice";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const GetData = async () => {
    let res = await axios.get("https://dummyjson.com/products");
    
    const sorted = res.data.products.sort((a , b) => a.price-b.price);
    dispatch(setProduct(sorted));
  };
  

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <div className="productlist-section">
        <div className="container">
          <div className="row">
            {products &&
              products.map((item) => {
                return (
                  <div className="col-4">
                    <div className="card-list">
                      <Link to={`/product/${item.id}`}>
                        <div
                          className="card"
                          style={{ width: "18rem" }}
                          key={item.id}
                        >
                          <img
                            src={item.thumbnail}
                            className="card-img-top img-fluid"
                            alt="..."
                          />
                          <div>
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                              <ReactStars
                                count={5}
                                size={20}
                                value={item.rating}
                                edit={false}
                                isHalf={true}
                                activeColor="#ffd700"
                              />
                              <li className="list-group-item">${item.price}</li>
                            </ul>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
