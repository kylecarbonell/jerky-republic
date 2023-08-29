import { Link, useLocation } from "react-router-dom";
import "../App.css";
import Bar from "./Bar";
import "./Register.css";
import SiteMap from "./SiteMap";
import { useRef } from "react";

import bcrypt from "bcryptjs";
import ObjectId from "bson-objectid";

function Register() {
  const loc = useLocation();
  const appId = loc.state?.appId;
  const setAppId = (id: string) => {
    loc.state?.setAppId(id);
  };

  const fName = useRef() as React.MutableRefObject<HTMLInputElement>;
  const lName = useRef() as React.MutableRefObject<HTMLInputElement>;
  const email = useRef() as React.MutableRefObject<HTMLInputElement>;
  const pw = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const fNameVal = fName.current.value;
    const lNameVal = lName.current.value;
    const emailVal = email.current.value;
    const temp = pw.current.value;

    const pwVal = await bcrypt.hash(temp, 10);
    const _id = new ObjectId();

    const data = { _id, fNameVal, lNameVal, emailVal, pwVal };

    console.log(data);

    await fetch("http://localhost:8000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    } as RequestInit).then(() => {
      fName.current.value = "";
      lName.current.value = "";
      email.current.value = "";
      pw.current.value = "";

      console.log(appId);
      window.localStorage.setItem("appId", _id.toHexString());
    });
  };

  return (
    <div className="App">
      <div className="Bar">
        <Bar></Bar>
      </div>

      <form className="LoginForm">
        <div className="Login-Container">
          <h1 style={{ fontSize: "3vw" }}>Register</h1>
          <h2 style={{ fontSize: "1vw", fontFamily: "kapraNue" }}>
            Please fill in your information below:
          </h2>

          <input id="Input" placeholder="First Name" ref={fName}></input>
          <input id="Input" placeholder="Last Name" ref={lName}></input>
          <input id="Input" placeholder="Email" ref={email}></input>
          <input id="Input" placeholder="Password" ref={pw}></input>
          <button id="SubmitButton" onClick={onSubmit}>
            Create My Account
          </button>
        </div>
      </form>
      <SiteMap></SiteMap>
    </div>
  );
}

export default Register;
