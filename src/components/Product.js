import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, title, price, _id, reviews }) => {
  const rating = reviews?.map((review) => review.rating);
  const stars = rating?.reduce((a, b) => a + b, 0) / rating?.length || 0
  return (
    <>
      <div className="flex flex-col bg-white border border-black shadow-sm rounded-xl justify-between">
        <img
          className="w-full px-2 h-60 object-contain rounded-t-xl mt-1"
          src={`http://localhost:8000/${imageUrl[0]}`}
          alt={title}
        />
        <div className="p-2 md:p-3">
          <h3 className="text-lg font-semibold leading-none text-gray-800">
            {title}
          </h3>
          <p className="text-gray-500 ">{formatPrice(price)}</p>
          <div className="flex justify-between">
            {stars !== "" ? (
              <div className="place-items-center inline-flex">
                <AiFillStar className="text-lg text-amber-500" />
                {stars}/5
              </div>
            ) : null}
            <Link
              to={`/products/${_id}`}
              className="font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              More Detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
