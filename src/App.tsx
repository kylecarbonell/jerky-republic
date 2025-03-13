import { Children, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Bar from "./Components/Bar";
import Home from "./Components/Home";
import ContactModal from "./Components/Modal";
import SiteMap from "./Components/SiteMap";
import ObjectId from "bson-objectid";

function App() {
<<<<<<< HEAD
  // if (window.localStorage.getItem("cartToken") == null) {
  const id = new ObjectId();
  async function createCart() {
    const data = { _id: id };

    await fetch("http://localhost:8000/start", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    } as RequestInit).then(() => {
      window.localStorage.setItem("cartToken", id.toHexString());
      console.log("Cart Created");
    });
    // }

    createCart();
  }
=======
  useEffect(() => {
    if (window.localStorage.getItem("cartToken") == null) {
      async function createCart() {
        const id = new ObjectId();
        console.log(id.toHexString());
        const data = { _id: id };

        await fetch("http://localhost:8000/start", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        } as RequestInit)
          .then(async (msg) => {
            console.log(await msg.text());
            window.localStorage.setItem("cartToken", id.toHexString());
          })
          .catch((error) => {
            console.log("EROROR");
            console.log(error);
          });
      }

      createCart();
    }
  }, []);
>>>>>>> fd321253912ba6077515d315598e28d213f67347

  return (
    <Bar>
      <div className="w-screen h-[90vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-7xl">Best Homemade Jerky in Town</p>
          <p className="text-sm">Gather your friends and family and enjoy the best homemade beef jerky</p>
          <p className="text-sm">Freshly made and delivered fresh</p>
          <a className="bg-red-600 no-underline w-[13.75rem] h-12 text-2xl text-white flex justify-center items-center rounded-4xl" href="/shop" style={{ textDecoration: "none" }}>Shop Now</a>
        </div>

      </div>
    </Bar>

  );
}

export default App;
