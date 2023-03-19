import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import InlineImage from "./InlineImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleInfo,
  faComment,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import LRUCache from "lru-cache";

// const tickers = fetch("/tickers.txt").then((response) => {
//   response.text().then((text) => {
//     return text.split("\n");
//   });
// });

const suggestions = [
  "apple",
  "banana",
  "cherry",
  "durian",
  "elderberry",
  "fig",
];

const cache = new LRUCache({
  max: 10, // maximum number of entries to be cached
  maxAge: 1000 * 60 * 5, // maximum age of entries (in milliseconds)
});


export const MyNavbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  return (
    <Navbar className="myNavbar">
      <Container fluid style={{ backgroundColor: "transparent" }}>
        <Navbar.Brand href="#">
          <img src="/Title.png" className="nav-logo" />
        </Navbar.Brand>
        <NavDropdown
          id="navbarScrollingDropdown"
          title={<FontAwesomeIcon icon={faBars} />}
        >
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Form className=" search-bar form-search form-inline">
          <Form.Control
            type="search"
            placeholder="Ticker"
            className="me-2 search-query"
            aria-label="Search"
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
              );
              setFilteredSuggestions(filtered);
              cache.set(value, filtered);
            }}
          />
        </Form>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 link-container"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="navBar-link">
              Rankings
            </Nav.Link>
            <Nav.Link href="#action2" className="navBar-link">
              Forum
            </Nav.Link>

            <Nav.Link href="#" className="navBar-link">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="icon-container">
          <Nav.Link className="nav-icon">
            <FontAwesomeIcon icon={faCircleInfo} />
          </Nav.Link>
          <Nav.Link className="nav-icon">
            <FontAwesomeIcon icon={faComment} />
          </Nav.Link>
          <Nav.Link className="nav-icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};
