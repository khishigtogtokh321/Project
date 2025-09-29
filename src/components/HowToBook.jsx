import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserMd, FaCalendarAlt, FaClipboardCheck, FaHospital } from "react-icons/fa";

function HowToBook() {
  return (
    <Container className="HowToBook my-5">
      <h3 className="text-center mb-4">Хэрхэн цаг авах вэ?</h3>
      <Row className="g-4">
        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body>
              <FaUserMd size={40} className="mb-3 text-primary" />
              <Card.Title>1. Эмчээ сонгох</Card.Title>
              <Card.Text>
                Өөрт тохирсон эмч, эмнэлгээ сонгон хайлт хийнэ.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body>
              <FaCalendarAlt size={40} className="mb-3 text-success" />
              <Card.Title>2. Цагаа сонгох</Card.Title>
              <Card.Text>
                Хүссэн өдөр, цагийн хуваарийг сонгож товлоно.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body>
              <FaClipboardCheck size={40} className="mb-3 text-warning" />
              <Card.Title>3. Баталгаажуулах</Card.Title>
              <Card.Text>
                Хувийн мэдээллээ оруулж цаг авалтаа баталгаажуулна.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className="h-100 text-center shadow-sm border-0">
            <Card.Body>
              <FaHospital size={40} className="mb-3 text-danger" />
              <Card.Title>4. Үйлчлүүлэх</Card.Title>
              <Card.Text>
                Сонгосон цагаараа очиж үйлчлүүлнэ.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HowToBook;
