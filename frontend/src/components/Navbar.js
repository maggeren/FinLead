import React, { useEffect, useState } from "react";
import { Link, Router, Route, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import InlineImage from "./InlineImage";
import Stock from "../pages/Stock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleInfo,
  faComment,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import LRUCache from "lru-cache";
import { ModalPopup } from "./ModalPopup";
import { Login } from "./Login";
import { LoginButton } from "./LoginButton";
import AuthContext from "./AuthContext";

const cache = new LRUCache({
  max: 5,
  maxAge: 10 * 60 * 1000 // 10 minutes in milliseconds
});

const showTickers = (filteredTickers) => {
  if (filteredTickers.length === 0) return null;
  return (
    <ul className="dropdown-menu">
      {filteredTickers.map((ticker, index) => (
        <li key={index}>
          <Link to={"stock/" + ticker}>
            <p>{ticker}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const MyNavbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const cachedTickers = cache.get("tickers"); // try to get tickers from cache
    if (cachedTickers) {
      console.log("cached tickers exists", cachedTickers);
      setTickers(cachedTickers);
      console.log(cache);
      return;
    } else {
      fetch("/tickers.txt").then((response) => {
        response.text().then((text) => {
          const tickersArr = text.split("\n");
          setTickers(tickersArr);
          cache.set("tickers", tickersArr); // store tickers in cache
          console.log("Tickers set for ", tickersArr);
          console.log(cache);
        });
      });
    }
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [tickers, setTickers] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  return (
    <div>
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
                const cachedSuggestions = cache.get(value);
                if (cachedSuggestions) {
                  setFilteredSuggestions(cachedSuggestions);
                }
                else{
                const filtered = tickers.filter(
                  (ticker) =>
                    ticker.toLowerCase().includes(value.toLowerCase()) &&
                    value !== ""
                );
                setFilteredSuggestions(filtered.slice(0, 10));
                }
              }}
            />
            {showTickers(filteredSuggestions)}
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
      <LoginButton></LoginButton>
      <Outlet></Outlet>
    </div>
  );
};
