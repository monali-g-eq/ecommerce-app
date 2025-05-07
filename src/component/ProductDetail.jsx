import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
  addCartProduct,
} from "../redux/productSlice";
import ReactStars from "react-stars";

const ProductDetail = () => {
  const product = useSelector((state) => state.products.selectedProducts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      verified: true,
      rating: 5,
      date: "August 14, 2023",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!",
    },
    {
      id: 2,
      name: "Alex M.",
      verified: true,
      rating: 4,
      date: "August 15, 2023",
      comment:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I'm quite picky about aesthetics, and this definitely gets a thumbs up from me!",
    },
    {
      id: 3,
      name: "Ethan R.",
      verified: true,
      rating: 3,
      date: "August 16, 2023",
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      id: 4,
      name: "Olivia P.",
      verified: true,
      rating: 4,
      date: "August 17, 2023",
      comment:
        "As a UX/UI enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
  ];

  const fetchProductDetail = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      dispatch(selectedProducts(res.data));
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
    const fetchRecommended = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=100");
        const otherProducts = res.data.products.filter(
          (item) => item.id !== parseInt(id)
        );
        setRecommendedProducts(otherProducts.slice(0, 4));
      } catch (error) {
        console.log("Error fetching recommended products:", error);
      }
    };
    fetchRecommended();

    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [id, dispatch]);

  const originalPrice = product?.price
    ? (product.price * 1.3).toFixed(2)
    : "0.00";
  const rating = product?.rating || 4.5;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <i key={i} className="fas fa-star-half-alt text-warning"></i>
        );
      } else {
        stars.push(<i key={i} className="far fa-star text-warning"></i>);
      }
    }
    return stars;
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const changeQuantity = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
    };

    dispatch(addCartProduct(productToAdd));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-secondary" role="status" />
      </div>
    );
  }

  return (
    <section className="productdetail-section py-5">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-muted">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/shop" className="text-decoration-none text-muted">
                Shop
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        {addedToCart && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Success!</strong> Item added to your cart.
            <button
              type="button"
              className="btn-close"
              onClick={() => setAddedToCart(false)}
            ></button>
          </div>
        )}

        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2 d-flex flex-column gap-2 product-image">
                <div className="thumbnails">
                  {product.images && product.images[0] && (
                    <img
                      key={0}
                      src={product.images[0]}
                      className="img-fluid rounded thumbnail-img"
                      alt="Thumbnail 1"
                    />
                  )}
                  {product.images && product.images[0] && (
                    <img
                      key={0}
                      src={product.images[0]}
                      className="img-fluid rounded thumbnail-img"
                      alt="Thumbnail 2"
                    />
                  )}
                  {product.images && product.images[0] && (
                    <img
                      key={0}
                      src={product.images[0]}
                      className="img-fluid rounded thumbnail-img"
                      alt="Thumbnail 3"
                    />
                  )}
                  {product.images && product.images.length === 0 && (
                    <img
                      src="/path/to/default-image.jpg"
                      className="img-fluid rounded thumbnail-img"
                      alt="Default Thumbnail"
                    />
                  )}
                </div>
              </div>
              <div className="col-md-10">
                <img
                  src={product.thumbnail}
                  className="img-fluid rounded"
                  alt={product.title}
                  style={{
                    height: "320px",
                    width: "80%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold text-uppercase">{product.title}</h3>
            <div className="d-flex align-items-center mb-2">
              <ReactStars
                count={5}
                size={24}
                value={rating}
                isHalf={true}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ms-2">{rating.toFixed(1)}</span>
            </div>

            <div className="mb-3">
              <h4 className="d-inline me-2 text-dark fw-bold">
                ${product.price || 0}
              </h4>
              <span className="text-muted text-decoration-line-through">
                ${originalPrice}
              </span>
              <span className="ms-2 text-danger">-30%</span>
            </div>

            <p className="text-muted">{product.description}</p>

            <div className="mb-3">
              <p className="mb-1 fw-bold">Choose Color</p>
              <div className="d-flex gap-2">
                {["red", "blue", "black"].map((color) => (
                  <button
                    key={color}
                    className={`btn rounded-circle`}
                    style={{
                      height: "30px",
                      width: "30px",
                      padding: 0,
                      backgroundColor: color,
                      border:
                        selectedColor === color ? "3px solid black" : "none",
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-1 fw-bold">Choose Size</p>
              <div className="d-flex gap-2">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    className={`btn ${
                      selectedSize === size
                        ? "btn-dark"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="d-flex align-items-center border rounded">
                <button className="btn" onClick={() => changeQuantity(-1)}>
                  −
                </button>
                <span className="px-3">{quantity}</span>
                <button className="btn" onClick={() => changeQuantity(1)}>
                  +
                </button>
              </div>
              <button
                className="btn btn-dark px-4 ms-3 flex-grow-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <ul className="nav nav-tabs justify-content-center border-0 mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "details" ? "active" : ""
                  } px-4`}
                  onClick={() => setActiveTab("details")}
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom:
                      activeTab === "details" ? "2px solid black" : "none",
                  }}
                >
                  Product Details
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "reviews" ? "active" : ""
                  } px-4`}
                  onClick={() => setActiveTab("reviews")}
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom:
                      activeTab === "reviews" ? "2px solid black" : "none",
                  }}
                >
                  Rating & Reviews
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "faqs" ? "active" : ""
                  } px-4`}
                  onClick={() => setActiveTab("faqs")}
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom:
                      activeTab === "faqs" ? "2px solid black" : "none",
                  }}
                >
                  FAQs
                </button>
              </li>
            </ul>

            <div className="tab-content p-4 border rounded">
              {activeTab === "details" && (
                <div>
                  <h5 className="fw-bold mb-3">Product Description</h5>
                  <p>{product.description}</p>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h6 className="fw-bold">Features</h6>
                      <ul>
                        <li>Premium quality material</li>
                        <li>Comfort fit design</li>
                        <li>Durable construction</li>
                        <li>Machine washable</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold">Specifications</h6>
                      <table className="table table-sm">
                        <tbody>
                          <tr>
                            <td>Brand</td>
                            <td>{product.brand || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>{product.category || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>Stock</td>
                            <td>{product.stock || "N/A"}</td>
                          </tr>
                          <tr>
                            <td>Rating</td>
                            <td>{rating.toFixed(1)} / 5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold mb-0">
                      Customer Reviews{" "}
                      <span className="text-muted">({reviews.length})</span>
                    </h5>
                    <button className="btn btn-sm btn-dark">
                      Write a Review
                    </button>
                  </div>

                  <div className="row g-4">
                    {reviews.map((review) => (
                      <div className="col-md-6" key={review.id}>
                        <div className="border rounded p-3 h-100">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-muted small">
                              {review.date}
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <h6 className="mb-0 me-2">{review.name}</h6>
                            {review.verified && (
                              <span className="badge bg-success rounded-pill text-white">
                                Verified
                              </span>
                            )}
                          </div>
                          <p className="mb-0">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-4">
                    <button className="btn btn-outline-dark px-4">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "faqs" && (
                <div>
                  <h5 className="fw-bold mb-3">Frequently Asked Questions</h5>
                  <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                        >
                          What sizes are available?
                        </button>
                      </h2>
                      <div
                        id="faq1"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          This product is available in Small, Medium, Large, and
                          X-Large sizes.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq2"
                        >
                          What is the return policy?
                        </button>
                      </h2>
                      <div
                        id="faq2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          We offer a 30-day return policy for all our products.
                          Items must be in their original condition.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq3"
                        >
                          How do I care for this product?
                        </button>
                      </h2>
                      <div
                        id="faq3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Machine wash cold with like colors. Tumble dry low. Do
                          not bleach.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h4 className="fw-bold mb-4">You Might Also Like</h4>
            <div className="row g-4">
              {recommendedProducts.map((prod) => (
                <div key={prod.id} className="col-md-3">
                  <div className="card h-100">
                    <img
                      src={prod.thumbnail}
                      className="card-img-top"
                      alt={prod.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{prod.title}</h5>
                      <p className="card-text text-muted">${prod.price}</p>
                      <a
                        href={`/product/${prod.id}`}
                        className="btn btn-outline-dark"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
