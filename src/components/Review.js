import { useRef, useState } from "react";
import { BsStarFill } from "react-icons/bs";

export default function Review({ reviews }) {
  const [rating, setRating] = useState(null);
  const userReview = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const product = reviews;
  const prodReview = product.reviews;
  console.log(prodReview);

  return (
    <>
      <div>
        <h5 className="font-medium">REVIEWS</h5>
        {prodReview &&
          prodReview.map((review) => (
            <div className="bg-sky-200 rounded-md px-2 my-2" key={review._id}>
              {/* <div>{new Date(review.createdAt).toLocaleDateString()}</div> */}
              <p className="font-semibold">{review.userId.name}</p>
              <p>{review.message}</p>
            </div>
          ))}
      </div>
      <div>
        <h5 className="font-medium">WRITE A CUSTOMER REVIEW</h5>
        <form onSubmit={handleSubmit}>
          <label className="font-medium">Rating</label>
          <br />
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index} className="inline-flex mx-0.5">
                <input
                  type="radio"
                  className="hidden"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <BsStarFill
                  size={20}
                  color={ratingValue <= rating ? "#ffd700" : "#d3d3d3"}
                />
              </label>
            );
          })}
          <br />
          <label className="font-medium">Comment</label>
          <br />
          <textarea
            className="w-full border rounded-lg resize-none border-black"
            ref={userReview}
          ></textarea>
          <button className="w-full bg-orange-300 rounded-lg font-semibold">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
