import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export const Sections = () => {
  return (
    <Navbar.Collapse
      className="me-auto my-2 my-lg-0 link-container"
      style={{ maxHeight: "100px" }}
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
    </Navbar.Collapse>
  );
};
