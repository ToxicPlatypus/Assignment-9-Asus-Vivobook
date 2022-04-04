import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="blog-div">
        <h2>What is context API?</h2>
        <p>
          Cpntext API is a way to break react application into components, for
          reusability purposes. As an application grows, these components can
          become huge and unmaintainable, so to break them into smaller
          components, Context API is used.
        </p>
      </div>

      <div className="blog-div">
        <h2> What is Semantic Tag</h2>
        <p>
          Semantic tag means tags with meanings. emantic elements have a simple
          and clear meaning for both, the browser and the developer. Semantic
          elements can increase the accessibility of your website, and also
          helps to create a better website structure. In HTML form, table, and
          article etc. are semantic elements
        </p>
      </div>
    </div>
  );
};

export default Blogs;
