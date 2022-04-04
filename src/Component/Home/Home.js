import React from "react";
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

      <section className="section-2">
        <h1 className="para">Customer Review</h1>
        {/* <div className="grid">
          <div className="review-paragraph">
            <h3>Name: Reviewer 1</h3>
            <p>
              The display is where the quality is a bit of a letdown. The
              resolution is full HD (1,920 by 1,080 pixels), which is good, but
              the screen is a bit washed out, particularly at full brightness.
              The whites and light colors are too bright, while dark colors are
              not dark enough, and theres a bit of light bleed, too. It never
              looks quite right, but lowering the brightness helps matters a
              little. The panel doesn't seem particularly sharp, either; perhaps
              it's a result of the brightness, but the text lacks a bit of
              clarity. It's hard to see any of this in the photo below (and at
              least the bezels are slim!) but it's evident in use.
            </p>
            <h5>Rating: 5.0</h5>
          </div>
          <div className="review-paragraph">
            <h3>Name: Reviewer 2</h3>
            <p>
              The viewing angles, additionally, are not great—the picture
              darkens and discolors quickly as you move to the side. Between the
              whitish sheen and poor viewing angles, the picture quality looks
              like it does when a built-in laptop privacy filter is active on a
              business laptop, if youve ever used that kind of feature. If not,
              just know that its still usable, but definitely not a good
              display, probably the biggest concession in the whole build.
            </p>
            <h5>Rating: 4.5</h5>
          </div>
          <div className="review-paragraph">
            <h3>Name: Reviewer 3</h3>
            <p>
              One important thing to note: The laptop ships in Windows S mode, a
              setting for less-powerful laptops thats more friendly for running
              Windows Store apps. If you want to install other applications (as
              you would on any full Windows PC, and likely desire to do on this
              system), youll have to grab the free upgrade to normal Windows 10
              from the Windows Store.
            </p>
            <h5>Rating: 4.8</h5>
          </div>
        </div> */}

        <div>
          {reviews.map((review) => (
            <ShowReview key={review._id} review={review}></ShowReview>
          ))}
        </div>

        <button>See All Reviews</button>
      </section>
    </div>
  );
};

export default Home;
