import { useState, useRef } from "react";
import "./Home.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Home() {
  const [show, setShow] = useState(false);

  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const questionRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleHide = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <div className="Home">
        <Modal show={show} onHide={handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="Container">
              <div className="InputContainer">
                <label>Name : </label>
                <input className="Input" ref={nameRef} />
              </div>

              <div className="InputContainer">
                <label>Email : </label>
                <input className="Input" ref={emailRef} />
              </div>

              <div className="InputContainer">
                <label>Questions Concerns : </label>
                <textarea className="TextArea" />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>

        <div className="SloganContainer">
          <h1 className="Slogan">Best homemade beef jerky in town!</h1>
          <h2 className="Description">
            Original family marinade, full of sweetness and spicyness{" "}
          </h2>
          <button className="ContactButton" onClick={handleClick}>
            Contacts
          </button>
        </div>

        <div>
          <img className="Image" src="src/Images/BeefJerkyImg.jpeg" />
        </div>
      </div>
    </>
  );
}

export default Home;
