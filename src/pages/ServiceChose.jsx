import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
  ProgressBar,
} from "react-bootstrap";
import {
  CheckCircle,
  CalendarEvent,
  Person,
  CreditCard,
} from "react-bootstrap-icons";
import { FaHospitalUser, FaRegCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ServiceChose() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));
  const handleContinue = () => {
    if (!selectedPayment) return alert("Төлбөрийн хэлбэрээ сонгоно уу!");
    navigate("/_payment", { state: { selectedPayment } });
  };

  const StepCircle = ({ number, label }) => (
    <div className="d-flex flex-column align-items-center mx-2">
      <div
        className={`rounded-circle d-flex align-items-center justify-content-center fw-semibold step-circle ${
          step >= number ? "active" : ""
        }`}
      >
        {step > number ? <CheckCircle size={18} /> : number}
      </div>
      <small
        className={`mt-2 ${
          step >= number ? "text-primary fw-semibold" : "text-muted"
        }`}
      >
        {label}
      </small>
    </div>
  );

  return (
    <Container fluid className="bg-light min-vh-100 py-4">
      <style>{`
        :root {
          --clinic-primary: #00AEEF;
          --clinic-dark: #0B1F40;
        }
        .step-circle {
          width: 42px;
          height: 42px;
          border: 2px solid var(--clinic-primary);
          color: var(--clinic-primary);
          transition: all 0.25s ease;
        }
        .step-circle.active {
          background: var(--clinic-primary);
          color: white;
          box-shadow: 0 0 8px rgba(0,174,239,0.4);
        }
        .service-card {
          cursor: pointer;
          border: 1px solid #e9ecef;
          transition: 0.25s ease;
        }
        .service-card:hover {
          border-color: var(--clinic-primary);
          box-shadow: 0 4px 14px rgba(0,174,239,0.15);
          transform: translateY(-2px);
        }
        .service-card.selected {
          border: 2px solid var(--clinic-primary);
          background: #eaf8ff;
          box-shadow: 0 6px 20px rgba(0,174,239,0.2);
        }
        .info-card {
          border: 1px solid #e9ecef;
          transition: all 0.25s ease;
        }
        .info-card:hover {
          border-color: #00AEEF;
          box-shadow: 0 6px 16px rgba(0, 174, 239, 0.1);
        }
      `}</style>

      <Container style={{ maxWidth: "1080px" }}>
        {/* Step header */}
        <div className="text-center mb-4">
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <StepCircle number={1} label="Үйлчилгээ" />
            <div
              className={`flex-grow-1 border-top mx-2 ${
                step >= 2 ? "border-primary" : "border-secondary opacity-50"
              }`}
            ></div>
            <StepCircle number={2} label="Мэдээлэл" />
            <div
              className={`flex-grow-1 border-top mx-2 ${
                step >= 3 ? "border-primary" : "border-secondary opacity-50"
              }`}
            ></div>
            <StepCircle number={3} label="Төлбөр" />
          </div>
          <ProgressBar
            now={(step / 3) * 100}
            variant="info"
            className="rounded-pill mx-auto mt-3"
            style={{ height: "6px", width: "60%" }}
          />
        </div>

        <Row className="g-4">
          {/* LEFT FORM */}
          <Col lg={{ order: 1, span: 8 }} md={{ order: 2 }} xs={{ order: 2 }}>
            <Card className="shadow-sm rounded-4 border-0 p-4">
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <h5 className="fw-bold text-primary mb-4 d-flex align-items-center">
                    <CalendarEvent className="me-2" /> Үйлчилгээ сонгох
                  </h5>
                  <Row xs={1} sm={2} className="g-3">
                    {[
                      "Имплант",
                      "Шүд шилжүүлэн суулгах",
                      "Хуванцар шүдэлбэр",
                      "Хүүхдийн эмчилгээ",
                      "Сувгийн эмчилгээ",
                    ].map((s, i) => (
                      <Col key={i}>
                        <div
                          onClick={() => setSelectedService(s)}
                          className={`p-3 rounded-4 service-card ${
                            selectedService === s ? "selected" : ""
                          }`}
                        >
                          <div className="d-flex justify-content-between">
                            <span className="fw-semibold">{s}</span>
                            {selectedService === s && (
                              <CheckCircle
                                size={18}
                                className="text-primary"
                              />
                            )}
                          </div>
                          <small className="text-muted">30,000₮</small>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <h5 className="fw-bold text-primary mb-4 d-flex align-items-center">
                    <Person className="me-2" /> Үйлчлүүлэгчийн мэдээлэл
                  </h5>
                  <Form className="d-flex flex-column gap-3">
                    <Form.Control placeholder="Овог" />
                    <Form.Control placeholder="Нэр" />
                    <Form.Control placeholder="Утасны дугаар" />
                    <Form.Control type="email" placeholder="Имэйл" />
                  </Form>
                </>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <>
                  <h5 className="fw-bold text-primary mb-4 d-flex align-items-center">
                    <CreditCard className="me-2" /> Төлбөрийн систем
                  </h5>
                  <ToggleButtonGroup
                    type="radio"
                    name="payments"
                    value={selectedPayment}
                    onChange={(val) => setSelectedPayment(val)}
                    className="d-grid gap-3"
                  >
                    {["SocialPay", "QPay", "Карт"].map((pay, i) => (
                      <ToggleButton
                        key={i}
                        id={`pay-${i}`}
                        value={pay}
                        variant={
                          selectedPayment === pay ? "primary" : "outline-primary"
                        }
                        className="py-2 rounded-3 fw-semibold"
                      >
                        {pay}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </>
              )}

              <div className="d-flex justify-content-between mt-4">
                {step > 1 && (
                  <Button variant="outline-secondary" onClick={handleBack}>
                    Буцах
                  </Button>
                )}
                <Button onClick={step < 3 ? handleNext : handleContinue}>
                  {step < 3 ? "Дараагийн алхам" : "Үргэлжлүүлэх"}
                </Button>
              </div>
            </Card>
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col  lg={{ order: 2 }} md={{ order: 1 }} xs={{ order: 1 }} >
            <Card className="shadow-sm rounded-4 border-0 mb-3">
              <Card.Body>
                <h6 className="fw-bold text-primary mb-3 d-flex align-items-center">
                  <FaRegCalendarCheck className="me-2" /> Цаг авалтын дэлгэрэнгүй
                </h6>
                <div className="mb-3">
                  <strong>Огноо:</strong>
                  <div>Баасан, 10-р сар 3 — 12:00</div>
                </div>
                <div className="mb-3">
                  <strong>Салбар:</strong>
                  <div className="small text-muted">
                    УБ хот, Баянзүрх дүүрэг, Эрхэт оффис, 2 давхар
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="src/assets/doctorImage.png"
                    alt="doctor"
                    width={56}
                    height={56}
                    className="rounded-circle me-2"
                  />
                  <div>
                    <div className="fw-semibold">Ц.Сараа</div>
                    <small className="text-muted">(Шүдний эмч)</small>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* ✅ Service Summary Card */}
            <Card className="info-card rounded-4 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-bold text-primary d-flex align-items-center mb-0">
                    <FaHospitalUser className="me-2" /> Үйлчилгээ
                  </h6>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => setStep(1)}
                    className="text-decoration-none"
                  >
                    Солих
                  </Button>
                </div>
                <div className="text-muted small">
                  {selectedService || "Үйлчилгээ сонгоогүй байна"}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
