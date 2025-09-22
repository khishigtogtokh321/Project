// AppointmentPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Dropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// --- Payment UI Components ---
const SocialPayUI = () => (
  <Card className="shadow-lg p-4 rounded-4 mx-auto my-3" style={{ maxWidth: '500px', width: '100%' }}>
    <div className="d-flex align-items-center justify-content-center mb-3 bg-light rounded-3 p-2">
      <Image
        src="https://seeklogo.com/images/S/socialpay-logo-6F3E425DB7-seeklogo.com.png"
        alt="SocialPay"
        width={40}
        height={40}
        className="me-2"
        roundedCircle
      />
      <span className="fw-semibold">SocialPay-р төлөх</span>
    </div>
    <Image
      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://socialpay.mn"
      alt="QR Code"
      fluid
      className="border rounded mx-auto d-block"
    />
    <p className="mt-3 text-center text-muted">Бүх банкны аппликейшн ашиглан төлбөрөө хийнэ үү.</p>
  </Card>
);

const QPayUI = () => (
  <Card className="shadow-lg p-4 rounded-4 mx-auto my-3" style={{ maxWidth: '500px', width: '100%' }}>
    <h5 className="mb-3 text-center">QPay-р төлөх</h5>
    <Image
      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://qpay.mn"
      alt="QPay QR"
      fluid
      className="border rounded mx-auto d-block"
    />
    <p className="mt-3 text-center text-muted">Бүх банкны аппликейшн ашиглан төлбөрөө хийнэ үү.</p>
  </Card>
);

const CardPaymentUI = () => (
  <Card className="shadow-lg p-4 rounded-4 mx-auto my-3" style={{ maxWidth: '500px', width: '100%' }}>
    <h5 className="mb-3 text-center">Картаар төлөх</h5>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Картын дугаар</Form.Label>
        <Form.Control type="text" placeholder="1234 5678 9012 3456" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Картын нэр</Form.Label>
        <Form.Control type="text" placeholder="OVOG NER" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Expiry</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="password" placeholder="***" />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" className="w-100 fw-semibold">Төлбөр хийх</Button>
    </Form>
  </Card>
);

// --- Main Appointment Page ---
export default function AppointmentPage() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

 

  return (
    <Container className="mt-5">
        <Col md={6} className="mx-auto">
          <Card className="shadow-lg border-0 rounded-4 p-4" >
            <h4 className="mb-4 text-center text-success fw-bold">Цаг авалтын мэдээлэл</h4>

            <div className="mb-3">
              <small className="text-muted">Өдөр & Цаг</small>
              <p className="fw-bold">2025.09.02 , 9:30PM</p>
              <p><strong>Хаяг:</strong> Улаанбаатар, Баянзүрх Дүүрэг</p>
            </div>

            <div className="d-flex align-items-center mb-4">
              <Image
                src="src/assets/doctorImage.png"
                alt="doctor"
                roundedCircle
                width={80}
                height={80}
                className="me-3 shadow-sm"
              />
              <div>
                <p className="mb-0 fw-bold">Ц. Батаа</p>
                <small className="text-muted">Мэргэжилтэн</small>
              </div>
            </div>

            <h6 className="text-primary fw-bold">Үйлчилгээний мэдээлэл</h6>
            <p className="mb-1">Үйлчилгээ: Эмчилгээ / Шинжилгээ</p>
            <h6 className="text-primary fw-bold">Төлбөрийн мэдээлэл</h6>

            <p className="mb-3">Төлсөн Төлбөр: 50,000₮</p>
          </Card>
        </Col>
        <div style={{
            height: '34px'
        }}></div>
      
    </Container>
  );
}
