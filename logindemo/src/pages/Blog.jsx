import React from "react";
import Header from "../Common/Header";
import { blogs } from "../Data/post";
import { Link } from "react-router-dom";

export default function Blog() {
  let allBogs = blogs.map((v, i) => {
    return (
      <div className="blogItems" key={i}>
        <h3>{v.title}</h3>
        <p>{v.body}</p>
        <button>
          <Link to={`/Blog/${v.id}`}>Read More</Link>
        </button>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <h1>Blog Page</h1>
      <div className="container">{allBogs}</div>
    </div>
  );
}
