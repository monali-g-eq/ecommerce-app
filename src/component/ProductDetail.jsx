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
  console.log(id);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const fetchProductDetail = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      dispatch(selectedProducts(res.data));
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };
  useEffect(() => {
    if (id) fetchProductDetail();
    return () => dispatch(removeSelectedProducts());
  }, [id]);
  const handleSizeClick = (size) => setSelectedSize(size);
  const changeQuantity = (delta) =>
    setQuantity((prev) => Math.max(1, prev + delta));
  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-secondary" role="status" />
      </div>
    );
  }
  const handleAddToCart = (product) => {
    dispatch(addCartProduct(product));
  };

  const originalPrice = (product.price * 1.3).toFixed(2);
  const rating = product.rating?.rate || 0;

  return (
    <section className="productdetail-section py-5">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-left g-3">
          <div className="col-12 d-flex">
            <div className="card w-100" key={product.id}>
              <div className="container my-4">
                <div className="row">
                  <div className="col-md-2 d-flex flex-column gap-2 product-image">
                    {product.images?.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        className="img-fluid rounded"
                        alt={`Thumbnail ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="col-md-4 product-image">
                    <img
                      src={product.thumbnail}
                      className="img-fluid rounded w-100"
                      alt={product.title}
                    />
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

                    <div className="mb-2">
                      <h4 className="d-inline me-2 text-danger">
                        ${product.price}
                      </h4>
                      <span className="text-muted text-decoration-line-through">
                        ${originalPrice}
                      </span>
                      <span className="ms-2 text-danger">-30%</span>
                    </div>

                    <p className="text-muted">{product.description}</p>

                    <div className="mb-3">
                      <p className="mb-1">Choose Size</p>
                      {["Small", "Medium", "Large", "X-Large"].map((size) => (
                        <button
                          key={size}
                          className={`btn btn-sm me-2 ${
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
                    <div className="d-flex align-items-center mb-3">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => changeQuantity(-1)}
                      >
                        -
                      </button>
                      <span className="px-3">{quantity}</span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => changeQuantity(1)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-dark ms-3"
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
