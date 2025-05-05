import React from "react";

export default function StarRating({ rating }) {
    // console.log("rating", rating);
    
    return (
      <>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl ${star <= rating ? "text-yellow-400" : "hidden"} pr-0.5`}
          >
            ★
          </span>
        ))}
      </>
    );
  }
