import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InlineImage from "./InlineImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleInfo, faComment, faUserCircle } from "@fortawesome/free-solid-svg-icons";


export const MyNavbar = () =>{
    return (
        <Navbar className="myNavbar">
      <Container fluid style={{backgroundColor: "transparent"}}>
        <Navbar.Brand href="#" className="nav-logo"><img src="Title.png"/></Navbar.Brand>
        <NavDropdown id="navbarScrollingDropdown" title={<FontAwesomeIcon icon={faBars}/>}>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 link-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="navBar-link">Rankings</Nav.Link>
            <Nav.Link href="#action2" className="navBar-link">Forum</Nav.Link>
            
            <Nav.Link href="#" className="navBar-link">
              News
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        <div className="icon-container">
            <Nav.Link><FontAwesomeIcon icon={faCircleInfo}/></Nav.Link>
            <Nav.Link><FontAwesomeIcon icon={faComment}/></Nav.Link>
            <Nav.Link><FontAwesomeIcon icon={faUserCircle}/></Nav.Link>
            </div>
      </Container>
    </Navbar>
    )
}