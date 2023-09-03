import { Modal, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import "./Home.css";
import "./Modal.css";

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
        id="Modal-Part"
        className="Modal"
        show={props.show}
        onHide={handleHide}
      >
        <Modal.Header closeButton id="Modal-Part">
          <Modal.Title id="Modal-Part">Contact Us</Modal.Title>
        </Modal.Header>

        <Modal.Body id="Modal-Part">
          <div className="Container" id="Modal-Part">
            <div className="InputContainer" id="Modal-Part">
              <label id="Modal-Part">Name : </label>
              <input id="Modal-Part" className="Input" ref={nameRef} />
            </div>

            <div className="InputContainer" id="Modal-Part">
              <label id="Modal-Part">Email : </label>
              <input id="Modal-Part" className="Input" ref={emailRef} />
            </div>

            <div className="InputContainer" id="Modal-Part">
              <label id="Modal-Part">Questions Concerns : </label>
              <textarea id="Modal-Part" className="TextArea" />
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
