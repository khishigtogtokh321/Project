import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { CheckCircle } from "react-bootstrap-icons";

const services = [
  { id: "implant", label: "Имплант" },
  { id: "transplant", label: "Шүд шилжүүлэн суулгах" },
  { id: "prosthesis", label: "Хуванцар болон цутгамал шүдэлбэр" },
  { id: "kids", label: "Хүүхдийн шүдний эмчилгээ" },
  { id: "root", label: "Сувгийн эмчилгээ" },
];

const payments = [
  { id: "SocialPay", label: "SocialPay" },
  { id: "QPay", label: "QPay" },
  { id: "Card", label: "Банкны карт" },
];

const formatPrice = (price) => price.toLocaleString("mn-MN");

export default function ServiceChose() {
  const [selectedService, setSelectedService] = useState("");
  const [step, setStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedPayment) {
      alert("Төлбөрийн хэлбэрээ сонгоно уу");
      return;
    }
    navigate("/payment", { state: { selectedPayment, selectedService } });
  };

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      alert("Юуны өмнө үйлчилгээ сонгоно уу");
      return;
    }

    setStep((prev) => Math.min(prev + 1, 3));
  };

  const StepCircle = ({ number, label }) => (
    <div className="d-flex flex-column align-items-center mx-3">
      <div
        className={`rounded-circle d-flex align-items-center justify-content-center ${
          step >= number ? "bg-primary text-white" : "border border-primary text-primary"
        }`}
        style={{ width: "40px", height: "40px", fontWeight: "bold" }}
      >
        {step > number ? <CheckCircle size={20} /> : number}
      </div>
      <small className={`mt-2 ${step >= number ? "text-primary fw-semibold" : "text-muted"}`}>
        {label}
      </small>
    </div>
  );

  return (
    <Container fluid className="bg-light min-vh-100 py-4">
      <Container className="my-3 justify-content-center">
        <div className="d-flex justify-content-center mb-3" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <StepCircle number={1} label="Үйлчилгээ" />
          <div
            className={`flex-grow-1 border-top mx-2 ${step >= 2 ? "border-primary" : "border-secondary"}`}
            style={{ marginTop: "20px" }}
          ></div>
          <StepCircle number={2} label="Үйлчлүүлэгчийн мэдээлэл" />
          <div
            className={`flex-grow-1 border-top mx-2 ${step >= 3 ? "border-primary" : "border-secondary"}`}
            style={{ marginTop: "20px" }}
          ></div>
          <StepCircle number={3} label="Төлбөр" />
        </div>

        <Row className="service-card jsutify-content-center" style={{ gap: "30px", marginLeft: "120px" }}>
          <Col md={7} className="mb-4">
            {step === 1 && (
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <h5 className="mb-3 d-flex align-items-center">
                    <span className="me-2 border border-primary rounded-circle px-2 text-primary">1</span>
                    Үйлчилгээ сонгох
                  </h5>

                  <Form>
                    {services.map(({ id, label }) => (
                      <div key={id} className="mb-3 p-2 border rounded d-flex align-items-center">
                        <Form.Check
                          type="radio"
                          name="service"
                          id={id}
                          className="me-3"
                          onChange={() => setSelectedService(label)}
                          checked={selectedService === label}
                        />
                        <div>
                          <div>{label}</div>
                          <small className="text-muted">₮ {formatPrice(30000)}</small>
                        </div>
                      </div>
                    ))}
                  </Form>

                  <Button variant="primary" onClick={handleNext} disabled={!selectedService}>
                    Дараагийн алхам
                  </Button>
                </Card.Body>
              </Card>
            )}

            {step === 2 && (
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <h5 className="mb-3 text-center fw-bold">Үйлчлүүлэгчийн мэдээлэл</h5>
                  <Form>
                    <Form.Group className="mb-1">
                      <Form.Label>Овог</Form.Label>
                      <Form.Control type="text" placeholder="Овог оруулах" />
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>Нэр</Form.Label>
                      <Form.Control type="text" placeholder="Нэр оруулах" />
                    </Form.Group>
                    <Form.Group className="mb-1">
                      <Form.Label>Утас</Form.Label>
                      <Form.Control type="text" placeholder="Утасны дугаар" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Имэйл</Form.Label>
                      <Form.Control type="email" placeholder="Имэйл" />
                    </Form.Group>
                  </Form>

                  <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => setStep(1)}>
                      Буцах
                    </Button>
                    <Button variant="primary" onClick={handleNext}>
                      Дараагийн алхам
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            )}

            {step === 3 && (
              <Card className="shadow-sm">
                <Card.Body>
                  <h6 className="text-primary fw-bold mb-3">Төлбөрийн систем</h6>
                  <ToggleButtonGroup
                    type="radio"
                    name="payments"
                    value={selectedPayment}
                    onChange={(val) => setSelectedPayment(val)}
                    className="d-grid gap-2 mb-4"
                  >
                    {payments.map(({ id, label }) => (
                      <ToggleButton key={id} id={`payment-${id}`} value={id} variant="outline-primary" className="w-100">
                        {label}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>

                  <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => setStep(2)}>
                      Буцах
                    </Button>
                    <Button variant="primary" type="button" onClick={handleContinue} className="flex-grow-1 ms-2">
                      Үргэлжлүүлэх
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>

          <Col md={3}>
            <Card className="mb-4 shadow-sm">
              <Card.Body style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                <h6 className="mb-3 d-flex align-items-center text-primary">
                  <FaRegCalendarCheck className="me-2" /> Цаг авалтын дэлгэрэнгүй
                </h6>
                <hr />
                <div className="mb-3">
                  <strong>Огноо</strong>
                  <div>Баасан 3 10-сар, 12:00</div>
                </div>
                <hr />
                <div className="mb-3">
                  <strong>Салбар</strong>
                  <div>
                    Монгол улс, 13000, Улаанбаатар хот, Баянзүрх дүүрэг, 6-р хороо, 75/1 байр, Эрхэт оффис, 2 давхар
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-center">
                  <img src="src/assets/doctorImage.png" alt="doctor" className="rounded-circle me-2" width={50} />
                  <div>
                    <div className="fw-semibold">Ц.Сараа</div>
                    <small className="text-muted">(Мэргэжил)</small>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="text-primary d-flex align-items-center">
                    <FaHospitalUser className="me-2" /> Үйлчилгээ
                  </h6>
                  <Button variant="link" size="sm" onClick={() => setStep(1)}>
                    Солих
                  </Button>
                </div>
                <div className="text-muted mt-2">{selectedService || "Үйлчилгээг сонгоно уу"}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
