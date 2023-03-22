import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faComment,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
export const Icons = () => {
  return (
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
  );
};
