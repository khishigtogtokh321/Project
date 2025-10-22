import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useState } from "react";
import HowToBook from "./HowToBook";
import SearchCard from "./SearchCard";
import MicroGuide from "./MicroGuide"

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
          <div className="default-title">
            <h1 className="hero-text  " >Таны эрүүл мэндийн туслах <br /> хурдан, найдвартай, 24/7 үйлчилгээтэй </h1>
          </div>
          <MicroGuide />
          <SearchBar/>
          <SearchCard />
        </Col>
      </Row>
    </Container>
  );
}
