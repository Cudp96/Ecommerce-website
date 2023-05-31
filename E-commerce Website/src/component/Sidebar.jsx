import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";

import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[25vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div>Shopping Cart({cart.length})</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[450px] lg:h-[500px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((items) => {
          return <CartItem key={items.id} items={items} />;
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4 ">
        <div className="  flex w-full justify-between ">
          <div className="flex items-center mx-auto uppercase font-semibold">
            <span>Total:</span>
            {total}
          </div>
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
      <button className="bg-gray-800 rounded py-4 font-semibold w-full text-white hover:shadow-2xl">CheckOut</button>
    </div>
  );
};

export default Sidebar;
