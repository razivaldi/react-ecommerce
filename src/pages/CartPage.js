import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="page-100">
        <div className="empty text-center">
          <h1 className="font-semibold mb-10">Your cart is empty</h1>
          <h2>Let's find intersting things</h2>
          <Link to="/products" className="btn mt-10">
            explore
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="empty-cart">
      <PageHero title="cart" />
      <CartContent />
    </div>
  );
};

export default CartPage;
