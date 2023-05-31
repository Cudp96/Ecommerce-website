import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductState from "./context/ProductState.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <SidebarProvider>
        <ProductState>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductState>
      </SidebarProvider>
    </CartProvider>
  </React.StrictMode>
);
