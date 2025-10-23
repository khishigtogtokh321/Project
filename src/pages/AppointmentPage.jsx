import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function AppointmentReceipt() {
  return (
    <div className="d-flex justify-content-center py-5 bg-light">
      <Card
        className="shadow-sm border border-dashed border-secondary-subtle rounded-4 bg-white px-4 py-3 w-100"
        style={{ maxWidth: "min(90%, 480px)" }}
      >
        <Card.Body className="text-dark">
          {/* Header */}
          <h5 className="text-center fw-bold mb-4 text-success">
            Цаг авалтын мэдээлэл
          </h5>

          {/* Date & Time */}
          <div className="mb-3">
            <small className="text-muted d-block">Өдөр & Цаг</small>
            <span className="fw-bold fs-6">2025.09.02 , 9:30PM</span>
          </div>

          {/* Address */}
          <div className="mb-3">
            <small className="fw-semibold text-muted d-block">Хаяг:</small>
            <span className="fs-6">Улаанбаатар, Баянзүрх Дүүрэг</span>
          </div>

          {/* Doctor Info */}
          <Row className="align-items-center mb-3 g-3">
            <Col xs="auto">
              <img
                src="src/assets/doctorImage.png"
                alt="doctor"
                className="rounded-circle border border-2 border-light-subtle shadow-sm"
                width={65}
                height={65}
              />
            </Col>
            <Col>
              <h6 className="fw-semibold mb-0 fs-5">Ц. Батaa</h6>
              <small className="text-muted">Мэргэжилтэн</small>
            </Col>
          </Row>

          {/* Service Info */}
          <div className="border-top pt-3 mb-2">
            <h6 className="fw-semibold text-primary mb-1 fs-6">
              Үйлчилгээний мэдээлэл
            </h6>
            <p className="mb-0 text-secondary small">
              Үйлчилгээ: Эмчилгээ / Шинжилгээ
            </p>
          </div>

          {/* Payment Info */}
          <div className="border-top pt-3">
            <h6 className="fw-semibold text-primary mb-1 fs-6">
              Төлбөрийн мэдээлэл
            </h6>
            <p className="mb-0 text-secondary small">
              Төлсөн төлбөр: <span className="fw-semibold text-dark">50,000₮</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
