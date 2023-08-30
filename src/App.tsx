import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Bar from "./Components/Bar";
import Home from "./Components/Home";
import ContactModal from "./Components/Modal";
import SiteMap from "./Components/SiteMap";
import ObjectId from "bson-objectid";

function App() {
  if (window.localStorage.getItem("cartToken") == null) {
    const id = new ObjectId();
    window.localStorage.setItem("cartToken", id.toHexString());
    async function createCart() {
      const data = { _id: id };

      await fetch("http://localhost:8888/.netlify/functions/start", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      } as RequestInit).then(() => {
        console.log("Cart Created");
      });
    }

    createCart();
  }

  return (
    <div className="App">
      <div className="Bar">
        <Bar />
      </div>
      <div id="Content">
        <Home />
      </div>
      <div id="Site-Map">
        <SiteMap />
      </div>
    </div>
  );
}

export default App;
