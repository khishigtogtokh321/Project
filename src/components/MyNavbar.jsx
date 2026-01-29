import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ashidLogo from "../assets/ashidLogo.png";

export default function MyNavbar() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="py-2 border-bottom shadow-sm bg-white bg-opacity-75" style={{ backdropFilter: 'blur(10px)' }}>
      <Container>
        {/* 🔹 Logo (Left) */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={ashidLogo}
            alt="Ashid Logo"
            height="36"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* 🔹 Hamburger Toggle (Mobile) */}
        <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none" />

        <Navbar.Collapse id="main-navbar-nav">
          {/* 🔹 Center Navigation */}
          <Nav className="mx-auto text-center" style={{ gap: '15px' }}>
            <Nav.Link as={Link} to="/" className="fw-medium text-navy px-3">Нүүр хуудас</Nav.Link>
            <Nav.Link as={Link} to="/" className="fw-medium text-navy px-3">Бидний тухай</Nav.Link>
            <Nav.Link as={Link} to="/booking" className="fw-medium text-navy px-3">Цаг авах</Nav.Link>
          </Nav>

          {/* 🔹 Action Buttons (Right) */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <Button
              as={Link}
              to="/login"
              variant="link"
              className="text-decoration-none text-navy fw-bold px-3 py-2 border-0"
              style={{ fontSize: '0.9rem' }}
            >
              Нэвтрэх
            </Button>
            <Button
              as={Link}
              to="/register"
              variant="primary"
              className="rounded-pill px-4 py-2 border-0 shadow-sm fw-bold"
              style={{ fontSize: '0.9rem' }}
            >
              Бүртгүүлэх
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
