import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./stars.css";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="star-container">
      <div className="flex">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
