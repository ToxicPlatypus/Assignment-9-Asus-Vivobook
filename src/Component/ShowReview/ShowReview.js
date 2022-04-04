import React from "react";

const ShowReview = (props) => {
  const { name, review, rating } = props.review;
  return (
    <div>
      <div>
        <h3>Name: {name}</h3>
        <p>Review: {review}</p>
        <h3>Rating: {rating}</h3>
      </div>
    </div>
  );
};

export default ShowReview;
