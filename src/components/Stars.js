import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./stars.css";

const Stars = ({ reviews }) => {
  const rating = reviews?.map((review) => review.rating);
  const stars = rating?.reduce((a, b) => a + b, 0) / rating?.length || 0
  console.log(stars)
  const tempStars = [...Array(5)].map((_, index) => {
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
      <p className="reviews">({reviews?.length} customer reviews)</p>
    </div>
  );
};

export default Stars;
