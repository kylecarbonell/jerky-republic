import "./Bar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

import ContactModal from "./Modal";
import CartImage from "../Images/CartImage.jpg";

import { SideBarData } from "../NavBarData";
import LoginIcon from "@mui/icons-material/Login";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
    }
    getCount();
  }, []);

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
                  <Link key={key} className="NavLink" to={val.link}>
                    <div className="NavBarIcon-Container">{val.icon}</div>
                    <button className="NavBarButton">{val.title}</button>
                  </Link>
                );
              })}
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
              <Link className="Link" to="/">
                <button className="Button" onClick={onClickLogin}>
                  Subscribe
                </button>
              </Link>
            </nav>
          )}
        </div>

        <div className="Icon-Container">
          <Link id="Icon" to="/account/login">
            <PersonIcon id="Icon"></PersonIcon>
          </Link>
          <Link id="Icon" to="/Cart">
            <ShoppingCartIcon id="Icon"></ShoppingCartIcon>
          </Link>
          <h1 id="Icon" style={{ paddingTop: "4%" }}></h1>
        </div>
      </div>

      <ContactModal show={showContact} setShow={setContact} />
    </>
  );
}

export default Bar;
