import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header";
import { blogs } from "../Data/post";

export default function BlogDetails() {
  let use = useLocation();
  let currentId = use.pathname.split("/")[2];
  let currentData = blogs.filter((v) => v.id == currentId)[0];
  console.log(currentData);

  return (
    <div>
      <Header />
      <h1>{currentData.title}</h1>
      <p>{currentData.body}</p>
    </div>
  );
}
