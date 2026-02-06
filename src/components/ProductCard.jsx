import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();
    // console.log(product);

    return (
        <div className="border border-gray-100 rounded-2xl cursor-pointer 
                hover:scale-105 hover:shadow-2xl transition-all 
                p-3 h-full flex flex-col">

            {/* Image */}
            <img
                onClick={() => navigate(`/products/${product._id}`)}
                src={product.image}
                alt={product.title}
                className="bg-gray-100 aspect-square object-contain rounded-xl p-2"
            />

            {/* Title */}
            <h1 className="line-clamp-2 mt-2 font-semibold text-sm flex-grow">
                {product.title}
            </h1>

            {/* Price */}
            <p className="text-lg font-bold mt-2">
                ${product.price}
            </p>

            {/* Button always at bottom */}
            <button className="mt-3 bg-red-500 px-3 py-2 text-lg rounded-md 
                            text-white w-full flex gap-2 items-center 
                            justify-center font-semibold cursor-pointer hover:bg-red-700">
                <IoCartOutline className="w-6 h-6" />
                Add to Cart
            </button>
        </div>

    )
}

export default ProductCard