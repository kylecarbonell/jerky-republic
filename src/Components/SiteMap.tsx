import "./SiteMap.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

function SiteMap() {
  return (
    <div className="SiteMap-Container">
      <div className="SiteMap-Box">
        <h1 style={{ backgroundColor: "#fe4a49" }}>Services</h1>
        <div className="SiteMap-Link">
          <h6 id="Text">Privacy Policy</h6>
        </div>
        <div className="SiteMap-Link">
          <h6 id="Text">Refund Policy</h6>
        </div>
        <div className="SiteMap-Link">
          <h6 id="Text">Terms Of Service</h6>
        </div>
      </div>

      <div className="SiteMap-Box">
        <h1 style={{ backgroundColor: "#fe4a49" }}>Links</h1>
        <div className="SiteMap-Link">
          <Link to="/" id="Text">
            <h2 id="Text">Home</h2>
          </Link>
        </div>
        <div className="SiteMap-Link">
          <Link to="/About" id="Text">
            <h2 id="Text">About</h2>
          </Link>
        </div>
        <div className="SiteMap-Link">
          <Link to="/Shop" id="Text">
            <h2 id="Text">Shop</h2>
          </Link>
        </div>
      </div>

      <div className="SiteMap-Box">
        <h1 style={{ backgroundColor: "#fe4a49" }}>Contact Us</h1>
        <div className="SiteMap-Link">
          <EmailIcon
            style={{ backgroundColor: "#fe4a49", marginRight: "3%" }}
          ></EmailIcon>
          <h2 id="Text">jerky.republic@gmail.com</h2>
        </div>
        <div className="SiteMap-Link">
          <PhoneIcon
            style={{ backgroundColor: "#fe4a49", marginRight: "3%" }}
          ></PhoneIcon>
          <h2 id="Text">123-456-7890</h2>
        </div>
      </div>
    </div>
  );
}

export default SiteMap;
