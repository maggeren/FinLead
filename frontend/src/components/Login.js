import React, {useState} from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "../styles/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import InputField from "./InputField";

export const Login = (props)=> {
   
  return (
    <div className="container">
      <div className="loginContainer">
        <div className="">
        <br/>
          <img src="Title.png" alt="Title"></img>
        </div>
<br/>
<br/>
        <form className="login">
          <InputField type="email" placeholder="email"/>
          <InputField type="password" placeholder="password"/> 
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
            Don't have an account?{" "} <br></br>
            <a href="{''}" className="text-primary fw-bold">
              Sign Up
            </a>
          </p>
        </div>
        <br/>
        <br/>
        <p>© FinLead team 2023</p>
      </div>
    </div>
  );
}