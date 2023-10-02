export default function Review({ reviews }) {
  return (
    <>
      <div>
        <h5 className="font-medium">REVIEWS</h5>
        {reviews.map((review) => (
          <div className="bg-sky-200 rounded-md px-2 my-2" key={review.id}>
            <div>{new Date(review.createdAt).toLocaleDateString()}</div>
            <p className="font-semibold">{review.username}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      <div>
        <h5 className="font-medium">WRITE A CUSTOMER REVIEW</h5>
        <form>
          <label className="font-medium">Rating</label>
          <br />
          <select className="w-full">
            <option>Select...</option>
          </select>
          <br />
          <label className="font-medium">Comment</label>
          <br />
          <textarea className="w-full"></textarea>
          <button className="w-full bg-orange-300">SUBMIT</button>
        </form>
      </div>
    </>
  );
}
