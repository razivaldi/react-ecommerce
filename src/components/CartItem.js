import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <>
      <div className="grid grid-cols-[450px_1fr_1fr_1fr_50px] my-2 rounded-lg items-center text-center bg-neutral-200">
        <div className="flex items-center p-2">
          <img
            src={`http://localhost:8000/${image}`}
            alt={name}
            className="border border-black rounded-xl w-2/5 h-auto"
          />
          <span className="text-left ml-3">
            <Link to={`/products/${id}`}>
            <h4>{name}</h4>
            </Link>
            <p>
              Color :
              <span
                className="h-4 w-4 rounded-full ml-2 inline-block"
                style={{ backgroundColor: color }}
              ></span>
            </p>
          </span>
        </div>
        <div>{formatPrice(price)}</div>
        <div className="mx-auto">
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        </div>
        <div>{formatPrice(price * amount)}</div>
        <div className="w-[100px]">
          <button
            type="button"
            className="remove-btn rounded hover:bg-red-600 hover:text-white"
            onClick={() => removeItem(id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
