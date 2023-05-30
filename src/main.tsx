import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import About from "./Components/About";
import Shop from "./Components/Shop";

import "bootstrap/dist/css/bootstrap.min.css";

import {useState} from "react"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
