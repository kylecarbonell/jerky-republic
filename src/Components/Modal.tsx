import { Modal, Button } from "react-bootstrap";
import { useRef, useState } from "react";
// import "./Home.css";

interface Props {
  show: boolean;
  setShow: (arg: boolean) => void;
}

function ContactModal(props: Props) {
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const questionRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleHide = () => {
    props.setShow(false);
  };

  const handleShow = () => {
    props.setShow(true);
  };

  const handleClick = () => {
    if (props.show) {
      props.setShow(false);
    } else {
      props.setShow(true);
    }
  };

  return (
    <>
      <Modal
        className="background-color: rgba(0,0,0,.0001) !important;"
        show={props.show}
        onHide={handleHide}
      >
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
    </>
  );
}

export default ContactModal;
