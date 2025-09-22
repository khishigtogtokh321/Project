import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Hero() {

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    
        const handleSearch = (e) => {
            e.preventDefault();
            alert(`Хайлт: ${keyword}, Байршил: ${location}`);
      };
    
  return (
    <Container className="py-5">
      <Row className="align-items-center ">
        <Col md={6}>
          <h1 className=" fs-1 " style={{color: '#37296F'}} >Эрүүл мэнддээ санаа<br />тавих цогц шийдэл</h1>
          
          <SearchBar/>
    
        </Col>
        <Col md={6} className="text-center">
          <img src="src/assets/doctor.png" alt="Doctor" className="img-fluid" />
        </Col>

      
      </Row>
    </Container>
  );
}
