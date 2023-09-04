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

    async function createCart() {
      const id = new ObjectId();
      console.log(id.toHexString())
      const data = { _id: id };

      await fetch("http://localhost:8000/start", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      } as RequestInit).then(async (msg) => {
        console.log(await msg.text());
        window.localStorage.setItem("cartToken", id.toHexString());
      }).catch((error) => {
        console.log("EROROR")
        console.log(error)
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
