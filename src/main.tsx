import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Admin from "./Admin/Admin";
import Order from "./Admin/Order";

import "bootstrap/dist/css/bootstrap.min.css";

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
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/account/login",
    element: <Login />,
  },
  {
    path: "/account/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/order/view/:id",
    element: <Order />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
