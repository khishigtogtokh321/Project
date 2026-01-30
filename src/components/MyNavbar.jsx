import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ashidLogo from "../assets/ASHID-LOGO.png";
import { FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center position-relative left-2 gap-2 m-0">
          <img
            src={ashidLogo}
            alt="Ashid Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="navbar-brand-text ">ASHID SOFT</span>
        </Navbar.Brand>

        {/* 🔹 Custom Clean Toggle (Zocdoc Style) */}
        <button
          className="navbar-toggler-custom d-lg-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* 🔹 Desktop Navigation Links (Center) */}
        <Navbar.Collapse id="main-navbar-nav" className="d-none d-lg-block">
          <Nav className="mx-auto text-center py-2 py-lg-0">
            <Nav.Link as={Link} to="/" className="px-lg-3 fw-medium">Нүүр хуудас</Nav.Link>
            <Nav.Link as={Link} to="/" className="px-lg-3 fw-medium">Бидний тухай</Nav.Link>
            <Nav.Link as={Link} to="/emch-songoh" className="px-lg-3 fw-medium">Цаг авах</Nav.Link>
          </Nav>

          {/* 🔹 Desktop Actions */}
          <div className="d-flex flex-row align-items-center gap-3 mt-lg-0">
            <Nav.Link as={Link} to="/login" className="btn-nav-login">
              Нэвтрэх
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="btn-nav-register">
              Бүртгүүлэх
            </Nav.Link>
          </div>
        </Navbar.Collapse>

        {/* 🔹 Mobile Side Drawer (Zocdoc Style) */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="mobile-sidebar-overlay"
              />

              {/* Sidebar Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="mobile-sidebar-content"
              >
                <div className="p-4 d-flex flex-column h-100">
                  <div className="d-flex justify-content-end mb-4">
                    <button className="btn-close-sidebar" onClick={() => setIsMenuOpen(false)}>
                      <FiX size={24} />
                    </button>
                  </div>

                  <div className="sidebar-menu-sections flex-grow-1">
                    <Nav className="flex-column gap-3 mb-4">
                      <Nav.Link as={Link} to="/" className="sidebar-nav-link" onClick={() => setIsMenuOpen(false)}>Нүүр хуудас</Nav.Link>
                      <Nav.Link as={Link} to="/" className="sidebar-nav-link" onClick={() => setIsMenuOpen(false)}>Бидний тухай</Nav.Link>
                      <Nav.Link as={Link} to="/emch-songoh" className="sidebar-nav-link" onClick={() => setIsMenuOpen(false)}>Цаг авах</Nav.Link>
                    </Nav>

                    <div className="d-flex flex-column gap-3">
                      <Link to="/login" className="btn-sidebar-login" onClick={() => setIsMenuOpen(false)}>
                        Нэвтрэх
                      </Link>
                      <Link to="/register" className="btn-sidebar-register" onClick={() => setIsMenuOpen(false)}>
                        Бүртгүүлэх
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </Navbar>
  );
}
