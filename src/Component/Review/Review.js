import React from "react";
import useReview from "../../Hooks/useReview";
import ShowReview from "../ShowReview/ShowReview";
import "./Review.css";

const Review = (props) => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <h1 className="para">Customer Review</h1>
      <div className="girda">
        {reviews.map((review) => (
          <ShowReview key={review._id} review={review}></ShowReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
