import { Card, Col, Container, Row } from "react-bootstrap";
import { FaCalendarAlt, FaClipboardCheck, FaHospital, FaUserMd } from "react-icons/fa";

const steps = [
  {
    title: "Эмчээ сонгох",
    description: "Өөрт тохирсон эмч, эмнэлгээ сонгон хайлт хийнэ.",
    icon: <FaUserMd className="text-primary" />,
  },
  {
    title: "Цагаа сонгох",
    description: "Хүссэн өдөр, цагийн хуваарийг сонгож товлоно.",
    icon: <FaCalendarAlt className="text-success" />,
  },
  {
    title: "Баталгаажуулах",
    description: "Хувийн мэдээллээ оруулж цаг авалтаа баталгаажуулна.",
    icon: <FaClipboardCheck className="text-warning" />,
  },
  {
    title: "Үйлчлүүлэх",
    description: "Сонгосон цагаараа очиж үйлчлүүлнэ.",
    icon: <FaHospital className="text-danger" />,
  },
];

export default function HowToBook() {
  return (
    <Container className="booking-steps">
      <h3 className="booking-steps__title text-center">Хэрхэн цаг авах вэ?</h3>
      <Row className="g-4">
        {steps.map((step) => (
          <Col key={step.title} md={3} sm={6}>
            <Card className="h-100 text-center border-0 shadow-sm booking-steps__card">
              <Card.Body>
                <div className="booking-steps__icon" aria-hidden="true">
                  {step.icon}
                </div>
                <Card.Title>{step.title}</Card.Title>
                <Card.Text>{step.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
