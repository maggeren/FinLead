import React, {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import InputField from "./InputField";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"
import "../styles/login.css";
import AuthContext from "./AuthContext";

export const ModalPopup=(props)=>{
   const [show, setShow] = useState(false);
  // const year = new Date().getFullYear()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    let response = null;
    if(!isLoggedIn){   
    response = await fetch(`http://localhost:4000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    if(response.ok){
      setIsLoggedIn(true);
      const responseData = await response.json();
      console.log(responseData)
      //navigate("/about");
      setError("");
      handleClose();
    }
    else{
      setError("Invalid email or password!");
    }
  }
  else{
    response = await fetch("http://localhost:4000/api/logout",  {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if(response.ok){
            setIsLoggedIn(false);
            const responseData = await response.json();
            console.log(responseData)
          }
  }
   
  };

  return (
    <>
      {!isLoggedIn ? (
        <div>
        <Button variant="primary" onClick={handleShow}>
             {isLoggedIn ? "Logout" : "Login"}
        </Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form className="login" onSubmit={handleSubmit}>
              <InputField
                type="email"
                value={inputs.value}
                onChange={handleChange}
                name="email"
              />
              <InputField
                type="password"
                value={inputs.value}
                onChange={handleChange}
                name="password"
              />
  
              <div className="form-group mb-3" control-id="formBasicCheckbox">
                <p className="small">
                  <a className="text-primary" href="#!">
                    Forgot password?
                  </a>
                </p>
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="d-flex justify-content-center">
                <button className="btn btn" type="submit">
                  Login
                </button>
              </div>
            </form>
  
            <div className="mt-3">
              <p className="mb-0  text-center">
                Don't have an account? <br></br>
                <a href="{''}" className="text-primary fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
            <br />
            <br />
            <p>© FinLead team 2023</p>
          </div>
        </Modal.Body>
      </Modal>
      </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <Button type="submit" variant="primary">{isLoggedIn ? "Logout" : "Login"}</Button>
          </form>
        </div>
      )}
  
      
    </>
  );

}
