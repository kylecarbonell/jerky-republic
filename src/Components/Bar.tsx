import "./Bar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { firestore } from "../Firebase";
import ContactModal from "./Modal";

function Bar() {
  const [cartItems, setCartItems] = useState(0);
  let tempCartItems = useRef<number>(0);
  const [showContact, setContact] = useState(false);

  useEffect(() => {
    async function getCount() {
      const collections = collection(firestore, "Orders", "User", "Cart");
      const count = await getCountFromServer(collections);
      tempCartItems.current = count.data().count;
    }
    setCartItems(tempCartItems.current.valueOf());
    getCount();
  });

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
