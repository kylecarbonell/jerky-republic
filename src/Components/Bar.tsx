import "./Bar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { firestore } from "../Firebase";

function Bar() {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    console.log("Finding");
    async function getCount() {
      const collections = collection(firestore, "Orders", "User", "Cart");
      console.log("In Func");
      const count = await getCountFromServer(collections);
      setCartItems(count.data().count);
      console.log("count   :   " + cartItems);
    }
    getCount();
  });

  return (
    <>
      <div className="Bar">
        <h1 className="Title">Jerky Republic</h1>
        {/* Add a font to this that matches the whole page */}

        <Link className="Link" to="/">
          <button className="Button">Home</button>
        </Link>
        <Link className="Link" to="/About">
          <button className="Button">About</button>
        </Link>
        <Link className="Link" to="/Shop" state={{ data: "Hi" }}>
          <button className="Button">Shop</button>
        </Link>
        <Link className="Link" to="/">
          <button className="Button">Contact</button>
        </Link>
        <Link className="Link" to="/">
          <button className="Button">Login</button>
        </Link>
        <Link className="Link" to="/">
          <button className="Button">
            {cartItems >= 1 ? (
              <span className="Cart-Dot">{cartItems}</span>
            ) : null}

            <img className="CartImage" src="src\Images\CartImage.jpg"></img>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Bar;
