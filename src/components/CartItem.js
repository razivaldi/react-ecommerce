import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  
  return (
    <div>
      <div className="grid grid-cols-[500px_1fr_1fr_1fr_50px]">
        <div className="flex-wrap flex">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{color}</p>
          </div>
        </div>
        <div>{formatPrice(price)}</div>
        <div>
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        </div>
        <div>
          {formatPrice(price * amount)}
        </div>
        <div className="w-[100px]">
          <button
            type="button"
            className="remove-btn"
            onClick={() => removeItem(id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
