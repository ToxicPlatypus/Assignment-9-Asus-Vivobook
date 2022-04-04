import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import Review from "../Review/Review";
import ShowReview from "../ShowReview/ShowReview";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();
  // console.log(reviews);

  return (
    <div>
      <section className="flex">
        <div className="home-writing">
          <p className="para">The best Laptop in the Town</p>
          <p className="para">For Gaming & Productivity</p>
          <p>
            The colorful, bold and youthful Vivobook series shows who you really
            are. These fast laptops make tasks easier, with innovative and
            thoughtful design.
          </p>
          <button>Live Demo</button>
        </div>
        <div className="home-img">
          <img src={require("../../../src/asus.jpg")} alt="" />
        </div>
      </section>

      <div className="section-2">
        <h1 className="para">Customer Review</h1>
        <div className="grid">
          {reviews.slice(0, 3).map((review) => (
            <ShowReview key={review._id} review={review}></ShowReview>
          ))}
        </div>

        <Link to="reviews" className="button-link">
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Home;
