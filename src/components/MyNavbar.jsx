import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaUserCircle } from "react-icons/fa"; // User icon
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function MyNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto" style={{ gap: '30px'}}>
            <Nav.Link as={Link} to="/">Нүүр хуудас</Nav.Link>
            <Nav.Link as={Link} to="/">Бидний тухай</Nav.Link>
            <Nav.Link as={Link} to="/booking">Цаг авах</Nav.Link>
            <div>
              
                   <DropdownButton
                    id="dropdown-item-button"
                    className="custom-dropdown"
                    title={<FaUserCircle  size={20} color="blue" />}
                    align="end"
                  >
                    <Dropdown.Item as="button">Patient</Dropdown.Item>
                    <Dropdown.Item as="button">Doctor</Dropdown.Item>
                  </DropdownButton>
               
           </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
