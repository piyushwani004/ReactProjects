import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header Part</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Course"}>Course</Link>
          </li>
          <li>
            <Link to={"/Blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
