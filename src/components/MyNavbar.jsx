import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ashidLogo from "../assets/ashid_logo_bold.png";

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
      <Container>
        {/* 🔹 Logo */}
        <Navbar.Brand as={Link} to="/" className="ps-0 d-flex align-items-center">
          <img
            src={ashidLogo}
            alt="Ashid Logo"
            height="60"
            className="d-inline-block align-middle"
          />
        </Navbar.Brand>

        {/* 🔹 Toggle */}
        <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none p-0" />

        <Navbar.Collapse id="main-navbar-nav">
          {/* 🔹 Center Menu */}
          <Nav className="mx-auto text-center py-3 py-lg-0">
            <Nav.Link as={Link} to="/" className="px-lg-4">Нүүр хуудас</Nav.Link>
            <Nav.Link as={Link} to="/" className="px-lg-4">Бидний тухай</Nav.Link>
            <Nav.Link as={Link} to="/emch-songoh" className="px-lg-4">Цаг авах</Nav.Link>
          </Nav>

          {/* 🔹 Actions */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-4 mt-3 mt-lg-0">
            <Link
              to="/login"
              className="btn-nav-login text-decoration-none"
            >
              Нэвтрэх
            </Link>
            <Link
              to="/register"
              className="btn-nav-register text-decoration-none text-center"
            >
              Бүртгүүлэх
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}
