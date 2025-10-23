import React from "react";
import { Container, Row, Col, Button, Card, ListGroup, Badge } from "react-bootstrap";
import { Play } from "react-bootstrap-icons"; // Bootstrap Icons

function PaymentStore() {
  return (
    <Container fluid className="py-5 bg-white">
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Зүүн хэсэг */}
          <Col md={6}>
            <h2 className="fw-bold text-dark mb-4">
              <span className="text-primary">Төлбөрийн түргэн шуурхай үйлчилгээ </span> <br />
            </h2>
            <p className="text-muted">
              SimplyBook.me админ апп ашиглан та үйлчлүүлэгчдэдээ илүү
              хялбар, хурдан төлбөрийн туршлага санал болгож чадна:
            </p>

            <ListGroup variant="flush" className="mb-4">
              <ListGroup.Item>✔ Үйлчлүүлэгчийн хадгалсан карт руу шууд төлбөр хийх</ListGroup.Item>
              <ListGroup.Item>✔ Гар утсаар төлбөр хийх QR код дэлгэцэнд харуулах</ListGroup.Item>
              <ListGroup.Item>✔ Гар утсаар хялбар төлбөр хийх линк илгээх</ListGroup.Item>
              <ListGroup.Item>✔ Tap & Pay ашиглаж, терминалтай холбох</ListGroup.Item>
              <ListGroup.Item>✔ Төлбөрийн үед үйлчлүүлэгчдийг зөвлөмж үлдээхэд уриалах</ListGroup.Item>
            </ListGroup>

            <p className="text-muted">
              Social Pay болон Q Pay-г дэмждэг төлбөрийн үйлчилгээ
              ашигласнаар төлбөрийн явц маш амархан болно. Зөвхөн нэг товшилт
              хангалттай бөгөөд мэдээллийг гараар оруулах шаардлагагүй.

            </p>
          </Col>

          {/* Баруун хэсэг */}
          <Col md={6} className="text-center">
            <img src="/src/assets/doctor.png" alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PaymentStore;
