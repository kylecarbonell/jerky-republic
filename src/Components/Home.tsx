import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import BeefJerkyImage from "../Images/BeefJerkyImg.jpeg";

function Home() {
  return (
    <>
      <div className="Home-Container">
        <div className="Slogan-Container">
          <h1 className="Slogan">Best homemade beef jerky in town!</h1>
          <h2 className="Description">
            Original family marinade, full of sweetness and spicyness{" "}
          </h2>
          <Link to="/Shop">
            <button className="ContactButton">Shop Now</button>
          </Link>
        </div>

        <img className="Pic" src={BeefJerkyImage} />
      </div>
    </>
  );
}

export default Home;
