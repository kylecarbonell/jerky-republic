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
import LoginModal from "./LoginModal";
import CartImage from "../Images/CartImage.jpg";

import { SideBarData } from "../NavBarData";
import LoginIcon from "@mui/icons-material/Login";

// import useWindowDimensions from "../WindowSize";

function Bar() {
  const [cartItems, setCartItems] = useState(0);
  const cartCount = useRef<number>(0);
  const [showContact, setContact] = useState(false);
  const [showLogin, setLogin] = useState(false);

  //CHECK THIS LATER
  useEffect(() => {
    async function getCount() {
      cartCount.current = 0;
      setCartItems(0);
      // const collections = collection(firestore, "Orders", "User", "Cart");
      // const docs = await getDocs(collections);

      // if (app.currentUser != null) {
      //   const getOrders = await fetch(`http://localhost:8000/orders?id=${app.currentUser.id}`)
      //   if (!getOrders.ok) {
      //     alert("Error getting orders")
      //     return;
      //   }

      //   const orders = await getOrders.json()
      //   console.log(orders)
      //   // setCartItems(cartCount.current);
      // }
    }
    getCount();
  }, []);

  const onClickContact = () => {
    setContact(!showContact);
  };

  const onClickLogin = () => {
    setLogin(!showLogin);
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
        if (innerWidth > 1400) {
          setNavbar(false);
        }
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className="Bar">
        {navbar && (
          <div className="NavBar-Container">
            <div className="ExitButton-Container">
              <button
                className="ExitButton"
                onClick={() => {
                  setNavbar(false);
                }}
              ></button>
            </div>
            <div className="NavLink-Container">
              {SideBarData.map((val, key) => {
                return (
                  <Link className="NavLink" to={val.link}>
                    <div className="NavBarIcon-Container">{val.icon}</div>
                    <button className="NavBarButton">{val.title}</button>
                  </Link>
                );
              })}
            </div>

            <div className="NavLogin-Container">
              <LoginIcon className="NavLoginIcon"></LoginIcon>
              <button
                className="NavBarButton NavLogin"
                onClick={() => {
                  onClickLogin();
                  setNavbar(false);
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
        {width < 1400 && (
          <div className="NavButton-Container">
            <button
              className="NavButton"
              onClick={() => {
                setNavbar(!navbar);
              }}
            ></button>
          </div>
        )}

        {/* Add a font to this that matches the whole page */}
        <div className="Links-Container">
          {width > 1400 && (
            <nav className="Bar-Container">
              <Link className="Link" to="/">
                <button className="Button">Home</button>
              </Link>
              <Link className="Link" to="/About">
                <button className="Button">About</button>
              </Link>
            </nav>
          )}

          <h1 className="Title">Jerky Republic</h1>
          {width > 1400 && (
            <nav className="Bar-Container">
              <Link className="Link" to="/Shop">
                <button className="Button">Shop</button>
              </Link>
              <button className="Link Button" onClick={onClickLogin}>
                Login
              </button>
            </nav>
          )}
        </div>
        <Link className="Cart-Link" to="/Cart"></Link>
      </div>

      <ContactModal show={showContact} setShow={setContact} />
      <LoginModal show={showLogin} setShow={setLogin} />
    </>
  );
}

export default Bar;
{
  /* <button className="Link Button" onClick={onClickContact}>
              Contact
            </button> */
}
{
  /* <Link className="Link" to="/Cart">
              <button className="Button">
                {cartItems >= 1 ? (
                  <span className="Cart-Dot">{cartItems}</span>
                ) : null}
                Cart
              </button>
            </Link> */
}
