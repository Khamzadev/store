import React, { useCallback, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CartMenu from "../Cart-menu";
import ItemInCart from "../itemInCart";
import { calcTotalPrice } from "../utils";
import "./style.css";

const CartBlock = () => {
  
  


  return (
    <div className="cart-block">
      <ItemInCart />
      <AiOutlineShoppingCart
        size={25}
        className="cart-block__icon"
     
      />
      {/* {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartVisible && (
        <CartMenu setIsCartVisible={setIsCartVisible} items={items} />
      )} */}
    </div>
  );
};

export default CartBlock;
