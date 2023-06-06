import "./Bar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import {
  collection,
  getCountFromServer,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { firestore } from "../Firebase";
import ContactModal from "./Modal";

function Bar() {
  const [cartItems, setCartItems] = useState(0);
  const cartCount = useRef<number>(0);
  const [showContact, setContact] = useState(false);

  //CHECK THIS LATER
  useEffect(() => {
    async function getCount() {
      cartCount.current = 0;
      setCartItems(0);
      const collections = collection(firestore, "Orders", "User", "Cart");
      const docs = await getDocs(collections);
      docs.forEach((doc) => {
        console.log(doc.get("Quantity"));
        cartCount.current += doc.get("Quantity");
      });
      setCartItems(cartCount.current);
    }
    getCount();
  }, []);

  const onClickContact = () => {
    setContact(!showContact);
  };

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
        <Link className="Link" to="/Shop">
          <button className="Button">Shop</button>
        </Link>
        <button className="Link Button" onClick={onClickContact}>
          Contact
        </button>
        <button className="Link Button">Login</button>
        <Link className="Link" to="/Cart">
          <button className="Button">
            {cartItems >= 1 ? (
              <span className="Cart-Dot">{cartItems}</span>
            ) : null}
            <img className="CartImage" src="src\Images\CartImage.jpg"></img>
          </button>
        </Link>
      </div>

      <ContactModal show={showContact} setShow={setContact} />
    </>
  );
}

export default Bar;
