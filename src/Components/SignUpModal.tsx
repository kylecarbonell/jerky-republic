import { Modal, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import "./Home.css";
import "./Modal.css";
import "./SignUpModal.css"

import ObjectId from "bson-objectid";
import bcrypt from 'bcryptjs'

interface Props {
    show: boolean;
    setShow: (arg: boolean) => void;
}

function SignUpModal(props: Props) {
    const fNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const lNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const pwRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const usernameRef = useRef() as React.MutableRefObject<HTMLInputElement>;


    const handleHide = () => {
        props.setShow(false);
    };

    const handleShow = () => {
        props.setShow(true);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const temp = pwRef.current?.value;

        let error = "";

        const username = usernameRef.current?.value;
        const fName = fNameRef.current?.value;
        const lName = lNameRef.current?.value;
        const email = emailRef.current?.value;

        if (lName.toString().length <= 0 || fName.toString().length <= 0 || email.toString().length <= 0) {
            error += "Please fill out all fields. \n";
        }

        if (temp.toString().length < 8) {
            error += "Password must contain atleast 8 characters.\n";
        }

        if (!/[A-Z]/.test(temp.toString())) {
            error += "Password must contain atleast 1 uppercase letter.\n";
        }

        if (error.length > 0) {
            alert(error);
            return;
        }

        const _id = new ObjectId()
        const pw = bcrypt.hashSync(temp);
        const data = { _id, username, fName, lName, email, pw };


        await fetch(`http://localhost:8000/signup`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log("Success");
                window.localStorage.setItem("AppId", _id.toHexString());
                // props.setLoggedIn(true);
                // console.log(`Signup :${props.loggedIn}`);
                handleHide();
            })
            .catch((e) => {
                console.log(e.message);
            });

    };

    return (
        <>
            <Modal
                id="Modal-Part"
                className="Modal"
                show={props.show}
                onHide={handleHide}
            >
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <Modal.Header closeButton id="Modal-Part">
                        <Modal.Title id="Modal-Part">SignUp</Modal.Title>
                    </Modal.Header>

                    <Modal.Body id="Modal-Part">

                        <label> Username : </label>
                        <input
                            className="Input"
                            type="text"
                            // onKeyDown={enterPressed}
                            ref={usernameRef}
                        ></input>

                        <label>First Name : </label>
                        <input
                            className="Input"
                            type="text"
                            // onKeyDown={enterPressed}
                            ref={fNameRef}
                        ></input>

                        <label>Last Name : </label>
                        <input
                            className="Input"
                            type="text"
                            // onKeyDown={enterPressed}
                            ref={lNameRef}
                        ></input>

                        <label>Email :</label>
                        <input className="Input" type="text" ref={emailRef}></input>

                        <label>Password : </label>
                        <input
                            className="Input"
                            type="password"
                            // onKeyDown={enterPressed}
                            ref={pwRef}
                        ></input>



                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" type="submit">Sign Up</Button>
                    </Modal.Footer>

                </form>
            </Modal >


        </>
    );
}

export default SignUpModal;
function wait(arg0: number) {
    throw new Error("Function not implemented.");
}

