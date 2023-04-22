import React, { useEffect, useState, useRef } from "react";
import process from "process";
import Form from "react-bootstrap/Form";
import TickerList from "./Tickerlist";
export const SearchBar = () => {
  const [tickers, setTickers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredTickers, setFilteredTickers] = useState([]);
  const refForm = useRef(null);

  const handleClickedOutside = (event) => {
    if (refForm.current && !refForm.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        const response = await fetch(`http://localhost:${4000}/api/searchbar`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "default",
        });
        const responseData = await response.json();
        console.log(responseData);
        setTickers(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTickers();

    //adding event listener once SearchBar is mounted
    document.addEventListener("click", handleClickedOutside);

    //removing event listener once SearchBar is unmounted
    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };
  }, []);

  return (
    <Form className=" search-bar form-search form-inline">
      <Form.Control
        ref={refForm}
        type="search"
        placeholder="Ticker"
        className="me-2 search-query"
        aria-label="Search"
        onClick={() => setIsOpen(true)}
        onChange={(e) => {
          const value = e.target.value;
          const filtered = tickers.filter(
            (ticker) =>
              ticker.ticker.substring(0, value.length).toLowerCase() ===
                value.toLowerCase() && value.length > 0
          );
          setFilteredTickers(filtered.slice(0, 10));
        }}
      />
      {isOpen && (
        <TickerList
          filteredTickers={filteredTickers}
          setFilteredTickers={setFilteredTickers}
        />
      )}
    </Form>
  );
};
