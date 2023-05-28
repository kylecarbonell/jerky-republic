import "./Bar.css";
import { Link } from "react-router-dom";

function Bar() {
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
        <Link className="Link" to="/">
          <button className="Button">Contact</button>
        </Link>
        <Link className="Link" to="/">
          <button className="Button">Login</button>
        </Link>
        <div className="Cart">
          <Link className="Link" to="/">
            <button className="Button">
              <img className="CartImage" src="src\Images\CartImage.jpg"></img>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Bar;
