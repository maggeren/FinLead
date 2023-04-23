import { Link } from "react-router-dom";
const TickerList = ({ filteredTickers, setIsOpen }) => {
  if (filteredTickers.length === 0) return null;
  return (
    <ul className="dropdown-menu">
      {filteredTickers.map((ticker, index) => (
        <li key={index} onBlur={() => setIsOpen(false)}>
          <Link
            to={"stock/" + ticker.ticker}
            className="ticker-link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <p className="ticker">{ticker.ticker} </p>
            <p className="companyName">{ticker.companyName}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TickerList;
