import { Col, Container, ListGroup, Row } from "react-bootstrap";

import paymentIllustration from "../assets/doctor.png";

export default function PaymentStore() {
  return (
    <section className="payment-section py-5 bg-white">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <h2 className="payment-title fw-bold text-dark mb-4">
              <span className="text-primary">Төлбөрийн түргэн шуурхай үйлчилгээ</span>
            </h2>
            <p className="text-muted">
              SimplyBook.me админ апп ашиглан та үйлчлүүлэгчдэдээ илүү хялбар, хурдан төлбөрийн
              туршлага санал болгож чадна:
            </p>
            <ListGroup variant="flush" className="payment-benefits mb-4">
              <ListGroup.Item>✔ Үйлчлүүлэгчийн хадгалсан карт руу шууд төлбөр хийх</ListGroup.Item>
              <ListGroup.Item>✔ Гар утсаар төлбөр хийх QR код дэлгэцэнд харуулах</ListGroup.Item>
              <ListGroup.Item>✔ Гар утсаар хялбар төлбөр хийх линк илгээх</ListGroup.Item>
              <ListGroup.Item>✔ Tap &amp; Pay ашиглаж, терминалтай холбох</ListGroup.Item>
              <ListGroup.Item>✔ Төлбөрийн үед үйлчлүүлэгчдийг зөвлөмж үлдээхэд уриалах</ListGroup.Item>
            </ListGroup>
            <p className="text-muted mb-0">
              Social Pay болон Q Pay-г дэмждэг төлбөрийн үйлчилгээ ашигласнаар төлбөрийн явц маш
              амархан болно. Зөвхөн нэг товшилт хангалттай бөгөөд мэдээллийг гараар оруулах
              шаардлагагүй.
            </p>
          </Col>
          <Col lg={6} className="text-center">
            <img
              src={paymentIllustration}
              alt="Төлбөрийн үйлчилгээний дүрслэл"
              className="payment-illustration img-fluid"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
