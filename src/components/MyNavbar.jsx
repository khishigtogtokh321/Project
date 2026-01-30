import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ashidLogo from "../assets/ashidlogo.png";

export default function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container className="d-flex align-items-center">
        {/* 🔹 Logo (Left) */}
        <Navbar.Brand as={Link} to="/" className="me-lg-5 d-flex align-items-center m-0">
          <img
            src={ashidLogo}
            alt="Ashid Logo"
            className="d-inline-block align-middle h-10 w-auto object-contain"
          />
        </Navbar.Brand>

        {/* 🔹 Toggle */}
        <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none p-0" />

        <Navbar.Collapse id="main-navbar-nav">
          {/* 🔹 Navigation Links (Center) */}
          <Nav className="mx-auto text-center py-2 py-lg-0">
            <Nav.Link as={Link} to="/" className="px-lg-3 fw-medium">Нүүр хуудас</Nav.Link>
            <Nav.Link as={Link} to="/" className="px-lg-3 fw-medium">Бидний тухай</Nav.Link>
            <Nav.Link as={Link} to="/emch-songoh" className="px-lg-3 fw-medium">Цаг авах</Nav.Link>
          </Nav>

          {/* 🔹 Actions */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <Nav.Link as={Link} to="/login" className="btn-nav-login">
              Нэвтрэх
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="btn-nav-register">
              Бүртгүүлэх
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
