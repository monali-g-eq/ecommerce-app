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
    <div className="flex flex-col justify-end items-start">
      <img loading="lazy" src={product.images['0']} alt="" className="w-full h-full m-2 bg-[#F0EEED] rounded-3xl" />
      <h3 className="font-semibold text-2xl mt-2">
        {product.title}
      </h3>
      {/* <div className="flex items-start"> */}
        <span className="m-2 ml-0">
          {" "}
          <StarRating rating={product.rating} />{" "}
        <span className="text-2xl">({product.rating})</span>
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
