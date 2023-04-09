import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
export const SearchBar = () => {
  const [tickers, setTickers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    fetch("/tickers.json").then((response) => {
      response.text().then((text) => {
        const tickersArr = JSON.parse(text);

        setTickers(Array.from(tickersArr));
      });
    });
  }, []);

  const showTickers = (filteredTickers) => {
    if (filteredTickers.length === 0) return null;
    return (
      <ul className="dropdown-menu">
        {filteredSuggestions.map((ticker, index) => (
          <li key={index} onBlur={() => setIsOpen(false)}>
            <Link to={"stock/" + ticker.Ticker} className="ticker-link">
              <p className="ticker">{ticker.Ticker} </p>
              <p className="companyName">{ticker.CompanyName}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Form className=" search-bar form-search form-inline">
      <Form.Control
        type="search"
        placeholder="Ticker"
        className="me-2 search-query"
        aria-label="Search"
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          const value = e.target.value;
          const filtered = tickers.filter(
            (ticker) =>
              ticker.Ticker.toLowerCase().includes(value.toLowerCase()) &&
              value !== ""
          );
          setFilteredSuggestions(filtered.slice(0, 10));
        }}
      />
      {isOpen && showTickers(filteredSuggestions)}
    </Form>
  );
};
