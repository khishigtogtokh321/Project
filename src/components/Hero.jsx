import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useState } from "react";
import HowToBook from "./HowToBook";
import SearchCard from "./SearchCard";

export default function Hero() {

    const [keyword, _setKeyword] = useState("");
    const [location, _setLocation] = useState("");
    
        const _handleSearch = (e) => {
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
          <h1 className="Res-hero-text fw-bold display-5 " style={{color: "#3c4fbeff", fontWeight: "700", fontSize: '50px'}} >Эрүүл мэнддээ санаа<br /><span style={{color: "#3c4fbeff", fontWeight: "600", fontSize: '50px'}} >тавих цогц шийдэл</span> </h1>
          <SearchBar/>
          <SearchCard />
        </Col>
      </Row>
    </Container>
  );
}
