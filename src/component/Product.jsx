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

  const getPageNumbers = (currentPage, totalPages) => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pageNumbers.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="section product-section">
      <div className="product-section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <button
                className="btn btn-outline-dark w-100 mb-3 d-md-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#filtersCollapse"
                aria-expanded="false"
                aria-controls="filtersCollapse"
              >
                Filters
              </button>
              <div className="collapse d-md-block" id="filtersCollapse">
                <div className="card p-3 shadow-sm rounded-4">
                  <h5 className="mb-3">Filters</h5>

                  <div className="mb-4">
                    <h6 className="text-muted fw-semibold">Category</h6>
                    <div className="d-flex flex-column gap-2 mt-2">
                      {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                        (category, i) => (
                          <label
                            key={i}
                            className="form-check-label d-flex align-items-center gap-2"
                          >
                            <input type="checkbox" className="form-check-input" />
                            {category}
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted fw-semibold">Price</h6>
                    <input
                      type="range"
                      className="form-range mt-2"
                      min="50"
                      max="200"
                    />
                    <div className="d-flex justify-content-between small text-muted">
                      <span>$50</span>
                      <span>$200</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted fw-semibold">Colors</h6>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {[
                        "#000",
                        "#f00",
                        "#ff0",
                        "#0f0",
                        "#00f",
                        "#0ff",
                        "#f0f",
                        "#fff",
                      ].map((color, i) => (
                        <div
                          key={i}
                          className="rounded-circle border"
                          style={{
                            width: 24,
                            height: 24,
                            backgroundColor: color,
                            cursor: "pointer",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted fw-semibold">Size</h6>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map(
                        (size, i) => (
                          <button
                            key={i}
                            className="btn btn-outline-dark btn-sm rounded-pill px-3"
                          >
                            {size}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted fw-semibold">Dress Style</h6>
                    <ul className="list-unstyled mt-2">
                      {["Casual", "Formal", "Party", "Gym"].map((style, i) => (
                        <li
                          key={i}
                          className="mb-2 d-flex align-items-center gap-2"
                        >
                          <span className="text-dark">{style}</span>
                          <span className="ms-auto text-muted">›</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="btn btn-dark w-100 py-2 rounded-3">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Casual</h3>
                <small className="text-muted">
                  Showing {startIdx + 1}–{Math.min(startIdx + itemsPerPage, products.length)} of {products.length} products
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
              <nav className="mt-4">
                <ul className="pagination justify-content-center w-100 px-3">
                  <li
                    className={`page-item me-2 ${currentPage === 1 ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link px-4 py-2"
                      onClick={() => goToPage(currentPage - 1)}
                    >
                      Previous
                    </button>
                  </li>

                  {getPageNumbers(currentPage, totalPages).map((page, index) => (
                    <li
                      key={index}
                      className={`page-item me-2 ${page === currentPage ? "active" : page === "..." ? "disabled" : ""}`}
                    >
                      {page === "..." ? (
                        <span className="page-link px-4 py-2">…</span>
                      ) : (
                        <button
                          className="page-link px-4 py-2"
                          onClick={() => goToPage(page)}
                        >
                          {page}
                        </button>
                      )}
                    </li>
                  ))}

                  <li
                    className={`page-item me-2 ${currentPage === totalPages ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link px-4 py-2"
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
