import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import InputField from "./InputField";

export const Login = (props) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    const respose = await fetch(`http://localhost:4000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <div className="container">
      <div className="loginContainer">
        <div className="">
          <br />
          <img src="Title.png" alt="Title"></img>
        </div>
        <br />
        <br />
        <form className="login" onSubmit={handleSubmit}>
          <InputField
            type="email"
            value={inputs.value}
            onChange={handleChange}
          />
          <InputField
            type="password"
            value={inputs.value}
            onChange={handleChange}
          />
          <div className="form-group mb-3" control-id="formBasicCheckbox">
            <p className="small">
              <a className="text-primary" href="#!">
                Forgot password?
              </a>
            </p>
          </div>
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
    </div>
  );
};
