import React from "react";
import StarRating from "../components/StarRating"

export default function ProductCard({ product }) {


  const addToCart = () => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      return existingItem
        ? prev.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="shadow-lg p-3 flex flex-col justify-end items-start rounded-2xl">
      <img loading="lazy" src={product.thumbnail} alt="" className="w-full h-60 object-contain" />
      <h3 className="font-semibold">
        {product.title}
      </h3>
      {/* <div className="flex items-start"> */}
        <span>
          {" "}
          <StarRating rating={product.rating} />{" "}
        <span>({product.rating})</span>
        </span>
      {/* </div> */}

      <span className="font-extrabold text-2xl">
        ${Math.ceil(product.price)}&nbsp;
      <span className="text-gray-500 line-through font-bold pl-1">
        ${Math.ceil(product.discountPercentage)}
      </span>
      </span>
 
    </div>


  )
}

// 00FF00
