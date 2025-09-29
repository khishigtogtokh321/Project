import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useState } from "react";
import HowToBook from "./HowToBook";

export default function Hero() {

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    
        const handleSearch = (e) => {
            e.preventDefault();
            alert(`Хайлт: ${keyword}, Байршил: ${location}`);
      };
    
  return (
    <Container style={{
      position: "relative",
      top: "40px"
    }}>
      <Row className="text-center my-5">
        <Col >
          <h1 className=" fw-bold display-5 " style={{color: "#37296F", fontWeight: "700"}} >Эрүүл мэнддээ санаа<br />тавих цогц шийдэл</h1>
          
          <SearchBar/>
          <HowToBook />  
        </Col>
      </Row>
    </Container>
  );
}
