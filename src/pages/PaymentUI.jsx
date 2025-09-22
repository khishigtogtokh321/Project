import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Image, Form, Button, Row, Col } from "react-bootstrap";


const SocialPayUI = () => (
  <Card className="shadow-lg p-4 text-center rounded-4 mt-4">
    <div className="d-flex align-items-center justify-content-center mb-3 bg-light rounded-3 p-2">
      <Image
        src="src/assets/socialPay.png"
        alt="SocialPay"
        width={70}
        height={50}
        className="me-2"
        
      />
      <span className="fw-semibold text-primary">SocialPay-р төлөх</span>
    </div>

    <div className="my-4">
      <Image
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://socialpay.mn"
        alt="QR Code"
        fluid
        className="border rounded"
      />
    </div>

    <div className="d-grid gap-3">
      <Button variant="outline-primary" size="lg" className="rounded-3 fw-semibold">
        Бүх банкны аппликейшн
      </Button>
      <Button variant="outline-secondary" size="lg" className="rounded-3 fw-semibold">
        Бүх банкны карт
      </Button>
    </div>
  </Card>
);

const QPayUI = () => (
  <Card className="shadow-lg p-4 text-center rounded-4 mt-4">
    <div className="d-flex align-items-center justify-content-center mb-3 bg-light rounded-3 p-2">
      <Image
        src="src/assets/Qpay.png"
        alt="Qpay"
        width={80}
        height={40}
        className="me-2"
        
      />
      <span className="fw-semibold text-primary">QPay-р төлөх</span>
    </div>

    <div className="my-4">
      <Image
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://socialpay.mn"
        alt="QR Code"
        fluid
        className="border rounded"
      />
    </div>

    <div className="d-grid gap-3">
      <Button variant="outline-primary" size="lg" className="rounded-3 fw-semibold">
        Бүх банкны аппликейшн
      </Button>
      <Button variant="outline-secondary" size="lg" className="rounded-3 fw-semibold">
        Бүх банкны карт
      </Button>
    </div>
  </Card>
);


// === Банкны карт UI ===
const CardPaymentUI = () => (
  <Card className="shadow-lg p-4 rounded-4 mx-auto" style={{maxWidth: '1000px'}}>
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
      <Button variant="primary" className="w-100 fw-semibold">
        Төлбөр хийх
      </Button>
    </Form>
    <div style={{
      height: '44px'
    }}>

    </div>
  </Card>
);



export default function PaymentUI() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPayment } = location.state || {};
  console.log("Received Payment:", selectedPayment);
  const renderPaymentUI = () => {
    switch (selectedPayment) {
      case "SocialPay":
        return <SocialPayUI />;
      case "QPay":
        return <QPayUI />;
      case "Карт":
        return <CardPaymentUI />;
      default:
        return <p>Төлбөрийн мэдээлэл олдсонгүй.</p>;
    }
  };

  return (
    <div className="container mt-5">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        Буцах
      </Button>
      {renderPaymentUI()}
    </div>
  );
}
