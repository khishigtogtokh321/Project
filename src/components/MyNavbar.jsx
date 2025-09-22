import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Нүүр хуудас</Nav.Link>
            <Nav.Link as={Link} to="/">Бидний тухай</Nav.Link>
            <Nav.Link as={Link} to="/booking">Цаг авах</Nav.Link>
            <Nav.Link as={Link} to="/login">login / register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
