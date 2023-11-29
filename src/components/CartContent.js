import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartTotals from "./CartTotals";
import CartItem from "./CartItem";
import "./carcontent.scss";
import { useUserContext } from "../context/user_context";
const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const { userState } = useUserContext();

  return (
    <div className="w-11/12 p-5 mx-auto rounded-lg border border-black">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem {...item} key={item.id} />;
      })}
      <div className="flex justify-between items-center my-5">
        <Link to="/products">
          <span className="bg-orange-100 border font-medium border-black rounded-full p-2 hover:bg-orange-500 hover:text-white">
            Continue shopping
          </span>
        </Link>
        <button
          onClick={clearCart}
          className="bg-red-600 text-white font-medium border border-black rounded-2xl w-fit p-4"
        >
          Clear Cart
        </button>
      </div>
      <CartTotals />
      <div className="flex justify-end">
        {userState.userId ? (
          <button className="border-2 border-black rounded-full bg-orange-500 w-60 m-2 text-white font-semibold">
            <Link to="/checkout" className="w-60 h-fit rounded-full">
              Checkout
            </Link>
          </button>
        ) : (
          <button className="border-2 border-black rounded-full bg-orange-500 w-60 m-2 text-white font-semibold">
            <Link to="/login" className="w-60 h-fit rounded-full">
              Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default CartContent;
