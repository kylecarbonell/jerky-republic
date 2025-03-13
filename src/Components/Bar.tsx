import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import "../index.css"

import ContactModal from "./Modal";
import CartImage from "../Images/CartImage.jpg";

import { SideBarData } from "../NavBarData";
import LoginIcon from "@mui/icons-material/Login";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useWindowDimensions } from "../hooks/useWindowSize";

function Bar({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState(0);
  const cartCount = useRef<number>(0);
  const [showContact, setContact] = useState(false);
  const [showLogin, setLogin] = useState(false);

  //CHECK THIS LATER
  useEffect(() => {
    async function getCount() {
      cartCount.current = 0;
      setCartItems(0);
    }
    getCount();
  }, []);

  const onClickLogin = () => {
    setLogin(!showLogin);
  };

  const { height, width } = useWindowDimensions();

  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className="w-full h-[10vh] bg-white">

        {/* Add a font to this that matches the whole page */}
        <div className="flex h-full w-full justify-between items-center px-8">
          <h1 className="flex items-center justify-center">Jerky Republic</h1>

          <nav className="h-full flex justify-between items-center space-x-8 ">
            <a href="/" className="no-underline text-black" style={{ textDecoration: "none" }}>
              Home
            </a>
            <a href="/shop" className="no-underline text-black" style={{ textDecoration: "none" }}>
              Shop
            </a>
            <a href="/contact" className="no-underline text-black" style={{ textDecoration: "none" }}>
              Contact
            </a>
          </nav>

<<<<<<< HEAD
        </div>


=======
          <h1 className="Title">Jerky Republic</h1>
          {width > 1400 && (
            <nav className="Bar-Container">
              <Link className="Link" to="/Shop">
                <button className="Button">Shop</button>
              </Link>
              <Link className="Link" to="/account/login">
                <button className="Button" onClick={onClickLogin}>
                  Login
                </button>
              </Link>
            </nav>
          )}
        </div>

        <div className="Icon-Container">
          <Link id="Icon" to="/Cart">
            <ShoppingCartIcon id="Icon"></ShoppingCartIcon>
          </Link>
          <h1 id="Icon" style={{ paddingTop: "4%" }}></h1>
        </div>
>>>>>>> fd321253912ba6077515d315598e28d213f67347
      </div>

      {children}
      {/* <ContactModal show={showContact} setShow={setContact} /> */}
    </>
  );
}

export default Bar;
