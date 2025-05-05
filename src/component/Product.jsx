import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/productSlice";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      const data = res.data.products;
      const sortedProducts = data.sort((a, b) => a.price - b.price);
      dispatch(setProducts(sortedProducts));
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIdx, startIdx + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="section product-section">
      <div className="product-section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="filter-section d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Filters</h5>
                <img src="./img/product/Frame.svg" alt="filter" />
              </div>
              <div className="category text-muted"> </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Casual</h3>
                <small className="text-muted">
                  Showing {startIdx + 1}–
                  {Math.min(startIdx + itemsPerPage, products.length)} of{" "}
                  {products.length} products
                </small>
              </div>
              <div className="row">
                {currentProducts.map((item) => (
                  <div className="col-md-4 mb-4" key={item.id}>
                    <div className="card h-100 border-0 shadow-sm">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.thumbnail}
                          className="card-img-top"
                          alt={item.title}
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <div className="d-flex align-items-center mb-2">
                          <ReactStars
                            count={5}
                            size={20}
                            value={item.rating}
                            edit={false}
                            isHalf={true}
                            activeColor="#ffd700"
                          />
                          <p className="ms-2">{item.rating}/5</p>
                        </div>
                        <h6 className="text-dark">${item.price}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <nav>
                <ul className="pagination justify-content-center mt-4">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => goToPage(currentPage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => goToPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => goToPage(currentPage + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
