import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import HowToBook from "./HowToBook";

export default function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={8}>
            <h1 className="hero-title">
              Эрүүл мэнддээ санаа
              <span className="hero-highlight">тавих цогц шийдэл</span>
            </h1>
            <div className="hero-search">
              <SearchBar />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            <HowToBook />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
