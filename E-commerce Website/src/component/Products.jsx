import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const Products = ({ product }) => {
  const { id, image, category, title, price, descrption } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4  relative overflow-hidden group transition">
        {/* Image Section */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt="Product's Image"
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        {/* End of Image Section */}

        {/* Start of Button-section */}
        <div className="absolute top-6 right-11 group-hover:right-5 bg-white  flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          <button onClick={() => addToCart(product,id)}>
            <div className="flex justify-center items-center w-12 h-12 text-white bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
        {/* End of Button-section */}
      </div>

      {/* Start of Category Section */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-extrabold">रु: {price}</div>
      </div>
      {/* End of Category Section */}
    </div>
  );
};

export default Products;
