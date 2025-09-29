import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
 return (
    <Container
      className="my-5"
      style={{ position: "relative" }}
    >
      <Row className="justify-content-center">
        <Col xs={7}>
          <div className="search-box d-flex flex-column flex-md-row align-items-stretch gap-2 shadow-sm ">
            
            <Form.Control
              type="text"
              placeholder="Нэр / Үйлчилгээ"
              className="search-input"
            />

  
            <span className="divider"></span>

            <Form.Control
              type="text"
              placeholder="Эмнэлгийн хаяг / газрын зураг"
              className="search-input"
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
