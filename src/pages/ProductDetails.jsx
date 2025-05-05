import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addToCart, increaseQty, decreaseQty } from "../redux/cartSlice"
import StarRating from '../components/StarRating';
import ImageGallery from '../components/ImageGallery';


function ProductDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProducts] = useState(null)
    const [itemCount, setItemCount] = useState(0)
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            console.log("responce", res);
            setProducts(res.data)
            console.log("product after fetch", res.data);
        })
    }, [id])



    console.log("product.images", product?.images);
    console.log("product", product);


    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row p-4 space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Left Column: Image */}
                <div className="lg:w-1/2 flex justify-center items-center min-h-[400px]">
                    <ImageGallery images={product?.images || []} />
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 flex flex-col justify-between space-y-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <div className="flex items-center space-x-2">
                        <StarRating rating={product.rating} />
                        <span className="text-gray-500">({product.rating})</span>
                    </div>
                    <div className="text-2xl font-bold">
                        ${Math.ceil(product.price)}
                        <span className="text-gray-500 line-through font-medium pl-2">
                            ${Math.ceil(product.discountPercentage)}
                        </span>
                    </div>
                    <p className="text-gray-600">{product.description}</p>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="bg-gray-300 px-4 py-2 rounded"
                            onClick={() => setItemCount((prev) => (prev > 0 ? prev - 1 : 0))}
                        >
                            -
                        </button>
                        <span className="text-lg">{itemCount}</span>
                        <button
                            className="bg-gray-300 px-4 py-2 rounded"
                            onClick={() => setItemCount((prev) => prev + 1)}
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded w-full lg:w-auto"
                        onClick={() => dispatch(addToCart({ product, quantity: itemCount }))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails