import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <>
      <div className="flex justify-end">
        <div>
          <div className="border w-fit border-black p-6 gap-x-5 grid grid-cols-2 rounded-lg">
            <h5 className="font-semibold">subtotal:</h5> <span className="font-semibold">{formatPrice(total_amount)}</span>
            <p>shipping fee:</p> <span>{formatPrice(shipping_fee)}</span>
            <h4 className="mt-4 border-t-2 pt-4 col-span-2 font-bold text-black">
              TOTAL: <span>{formatPrice(total_amount + shipping_fee)}</span>
            </h4>
          </div>
          <button className="border-2 border-black rounded-full bg-orange-500 w-full mt-2 text-white font-semibold">Login</button>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
