import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import getProducts from "../services/axios.services";

const ProductState = ({ children }) => {
  const [products, setProducts] = useState([]);

  const gettingProducts = async () => {
    const response = await getProducts();
    return setProducts(response);
  };
  useEffect(() => {
    gettingProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
