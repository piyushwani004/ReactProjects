import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Error404 from "./pages/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));

let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Course",
    element: <Course />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Blog/:id",
    element: <BlogDetails />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
