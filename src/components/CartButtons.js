import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";

import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
const CartButton = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, userState, logout } = useUserContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="hidden lg:block ">
      <li className="inline-flex" onClick={closeSidebar}>
        {userState.userId && (
          <Link
            to="/"
            onClick={handleLogout}
            className="text-xl"
          >
            <FaUserMinus />
          </Link>
        )}
        {!userState.userId && (
          <Link
            to="/login"
            className="text-xl"
          >
            <FaUserPlus />
          </Link>
        )}
        <span className="text-xl ml-3">
          <Link to="/cart">
          <FaShoppingCart />
          </Link>
        </span>
      </li>
    </div>
  );
};

export default CartButton;
