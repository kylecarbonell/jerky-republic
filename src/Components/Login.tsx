import Bar from "./Bar";
import "../App.css";
import "./Login.css";
import SiteMap from "./SiteMap";
import { Link, useLocation } from "react-router-dom";

function Login() {
  const loc = useLocation();
  const appId = loc.state?.appId;
  const setAppId = loc.state?.setAppId;

  return (
    <div className="App">
      <div className="Bar">
        <Bar></Bar>
      </div>

      <form className="LoginForm">
        <div className="Login-Container">
          <h1 style={{ fontSize: "3vw" }}>Login</h1>
          <h2 style={{ fontSize: "1vw" }}>
            Please enter your e-mail and password:
          </h2>

          <input id="Input" placeholder="Email"></input>
          <input id="Input" placeholder="Password"></input>
          <button id="SubmitButton">Login</button>

          <h2 style={{ fontSize: "0.7vw", marginTop: "2%" }}>
            Don't have an account?{" "}
            <Link to="/account/register">
              <span>Click Here</span>
            </Link>
          </h2>
        </div>
      </form>
      <SiteMap></SiteMap>
    </div>
  );
}

export default Login;
