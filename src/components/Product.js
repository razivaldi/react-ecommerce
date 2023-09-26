import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Product = ({ image, name, price, id, stars }) => {
  return (
    <>
      <Link to={`/products/${id}`}
        className="flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:border-gray-700 dark:shadow-slate-700"
      >
        <img
          className="h-56 w-full object-cover"
          src={image}
          alt="Image Description"
        />
        <div className="p-2 md:px-4 h-28 relative">
          <h3 className="text-lg leading-4 font-bold text-gray-800 ">
            {name}
          </h3>
          <p className="my-1 text-gray-800 dark:text-gray-400">
            {formatPrice(price)}
          </p>
          {stars !== "" ? (
            <div className="place-items-center inline-flex">
              <AiFillStar className="text-lg text-amber-500" />
              {stars}/5
            </div>
          ) : null}
            <button
              type="button"
              className="absolute inline-flex right-4 w-28 rounded-md font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              More Detail
            </button>
        </div>
      </Link>
      {/* <Wrapper>
        <div className="container">
          <img src={image} alt={name} />
          
        </div>
        <footer>
          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </footer>
      </Wrapper> */}
    </>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
