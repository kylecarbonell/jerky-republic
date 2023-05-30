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
  useLocation,
} from "react-router-dom";


function test(){const location = useLocation();
    const {shop} = location.state?.data;
    export default router = createBrowserRouter([
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
      element: <Shop name={shop}/>,
    },
  ]);
    }

