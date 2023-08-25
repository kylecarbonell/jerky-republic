import { Modal, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import "./Home.css";
import "./Modal.css";

// import { app } from "../MongoAuth";
import SignUpModal from "./SignUpModal";

interface Props {
  show: boolean;
  setShow: (arg: boolean) => void;
}

function LoginModal(props: Props) {
  const usernameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const pwRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  // const questionRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [signUpShow, setSignUp] = useState(false);

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

  const showSignUp = () => {
    setSignUp(!signUpShow);
    handleHide();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("EHRERHHE");
  };

  return (
    <>
      <Modal
        id="Modal-Part"
        className="Modal"
        show={props.show}
        onHide={handleHide}
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Modal.Header closeButton id="Modal-Part">
            <Modal.Title id="Modal-Part">Login</Modal.Title>
          </Modal.Header>

          <Modal.Body id="Modal-Part">
            <div className="Container" id="Modal-Part">
              <div className="InputContainer" id="Modal-Part">
                <label id="Modal-Part">Username : </label>
                <input id="Modal-Part" className="Input" ref={usernameRef} />
              </div>

              <div className="InputContainer" id="Modal-Part">
                <label id="Modal-Part">Password : </label>
                <input id="Modal-Part" className="Input" ref={pwRef} />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={showSignUp}>
              Sign up
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      <SignUpModal show={signUpShow} setShow={showSignUp} />
    </>
  );
}

export default LoginModal;
