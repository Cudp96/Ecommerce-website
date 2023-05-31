import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  const singleProduct = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!singleProduct) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { price, image, description, title } = singleProduct;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div
            className="flex flex-1 justify-center ic
           mb-8 lg:mb-0"
          >
            <img
              src={image}
              alt="Product's image"
              className="max-w-[200px] lg:mx-w-sm"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text=[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">{price}</div>
            <p className="mb-8">{description}</p>
            <button
              className="bg-black py-4 px-4 text-white rounded hover:shadow-lg"
              onClick={() => addToCart(singleProduct, singleProduct.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
