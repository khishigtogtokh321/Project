import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Form, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import {  Clock, Person, InfoCircle, CheckCircle, Paypal } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaRegCalendarCheck } from 'react-icons/fa';

export default function ServiceChose() {
    const [selectedService, setSelectedService] = useState("");
    const [step, setStep] = useState(1);
    const [payment, setPayment] = useState("Сонгох");
    const [selectedPayment, setSelectedPayment] = useState("");
    const navigate = useNavigate();
    console.log("Selected payment:", selectedPayment);
    const handleContinue = () => {
        if (!selectedPayment) {
            alert("Төлбөрийн хэлбэрээ сонгоно уу");
            return;
        }
        navigate("/payment", { state: { selectedPayment } });
    };



    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };


    const StepCircle = ({ number, label }) => (
        <div className="d-flex flex-column align-items-center mx-3">
            <div
                className={`rounded-circle d-flex align-items-center justify-content-center 
                ${step >= number ? "bg-primary text-white" : "border border-primary text-primary"} `}
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
                {/* Step indicator */}
                <div className="d-flex justify-content-center mb-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
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

                <Row className="service-card jsutify-content-center" style={{ gap: '30px', marginLeft: '120px' }}>
                    {/* LEFT SIDE */}
                    <Col md={7} className="mb-4">
                        {/* Step 1 */}
                        {step === 1 && (
                            <Card className="mb-4 shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3 d-flex align-items-center">
                                        <span className="me-2 border border-primary rounded-circle px-2 text-primary">1</span>
                                        Үйлчилгээ сонгох
                                    </h5>

                                    <Form>
                                        <div className="mb-3 p-2 border rounded d-flex align-items-center">
                                            <Form.Check
                                                type="radio"
                                                name="service"
                                                id="consultation"
                                                className="me-3"
                                                onChange={() => setSelectedService("Имплант")}
                                            />
                                            <div>
                                                <div>Имплант</div>
                                                <small className="text-muted d-flex align-items-center">
                                                    <Paypal className="me-1" size={16} /> 30000 MNT
                                                </small>
                                            </div>
                                        </div>

                                        <div className="mb-3 p-2 border rounded d-flex align-items-center">
                                            <Form.Check
                                                type="radio"
                                                name="service"
                                                id="consultation"
                                                className="me-3"
                                                onChange={() => setSelectedService("Шүд шилжүүлэн суулгах")}
                                            />
                                            <div>
                                                <div>Шүд шилжүүлэн суулгах</div>
                                                <small className="text-muted d-flex align-items-center">
                                                    <Paypal className="me-1" size={16} /> 30000 MNT
                                                </small>
                                            </div>
                                        </div>

                                        <div className="mb-3 p-2 border rounded d-flex align-items-center">
                                            <Form.Check
                                                type="radio"
                                                name="service"
                                                id="consultation"
                                                className="me-3"
                                                onChange={() => setSelectedService("Хуванцар болон цутгамал шүдэлбэр")}
                                            />
                                            <div>
                                                <div>Хуванцар болон цутгамал шүдэлбэр</div>
                                                <small className="text-muted d-flex align-items-center">
                                                    <Paypal className="me-1" size={16} /> 30000 MNT
                                                </small>
                                            </div>
                                        </div>

                                        <div className="mb-3 p-2 border rounded d-flex align-items-center">
                                            <Form.Check
                                                type="radio"
                                                name="service"
                                                id="consultation"
                                                className="me-3"
                                                onChange={() => setSelectedService("Хүүхдийн шүдний эмчилгээ")}
                                            />
                                            <div>
                                                <div>Хүүхдийн шүдний эмчилгээ</div>
                                                <small className="text-muted d-flex align-items-center">
                                                    <Paypal className="me-1" size={16} /> 30000 MNT
                                                </small>
                                            </div>
                                        </div>

                                        <div className="mb-3 p-2 border rounded d-flex align-items-center">
                                            <Form.Check
                                                type="radio"
                                                name="service"
                                                id="consultation"
                                                className="me-3"
                                                onChange={() => setSelectedService("Сувгийн эмчилгээ")}
                                            />
                                            <div>
                                                <div>Сувгийн эмчилгээ</div>
                                                <small className="text-muted d-flex align-items-center">
                                                    <Paypal className="me-1" size={16} /> 30000 MNT
                                                </small>
                                            </div>
                                        </div>


                                    </Form>

                                    <Button variant="primary" onClick={handleNext}>
                                        Дараагийн алхам
                                    </Button>
                                </Card.Body>
                            </Card>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <Card className="mb-4 shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3 text-center  fw-bold">
                                        Үйлчлүүлэгчийн мэдээлэл
                                    </h5>
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
                                        <Form.Group className="mb-2">
                                            <Form.Label>Имэйл</Form.Label>
                                            <Form.Control type="email" placeholder="Имэйл" />
                                        </Form.Group>

                                    </Form>
                                    <Button variant="primary" onClick={handleNext}>
                                        Дараагийн алхам
                                    </Button>
                                </Card.Body>


                            </Card>
                        )}

                        {/* Step 3 */}
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
                                        <ToggleButton
                                            id="tbg-radio-1"
                                            value="SocialPay"
                                            variant="outline-primary"
                                            className="w-100" // w-100 -> бүх өргөнийг ижил болгоно
                                        >
                                            SocialPay
                                        </ToggleButton>

                                        <ToggleButton
                                            id="tbg-radio-2"
                                            value="QPay"
                                            variant="outline-primary"
                                            className="w-100"
                                        >
                                            QPay
                                        </ToggleButton>

                                        <ToggleButton
                                            id="tbg-radio-3"
                                            value="Карт"
                                            variant="outline-primary"
                                            className="w-100"
                                        >
                                            Банкны карт
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                    <Button variant="primary" type="button" onClick={handleContinue} className="w-100">
                                        Үргэлжлүүлэх
                                    </Button>
                                </Card.Body>
                            </Card>

                        )}
                    </Col>

                    {/* RIGHT SIDE */}
                    <Col md={3}>
                       
                        <Card className="mb-4 shadow-sm">
                            <Card.Body style={{ fontFamily: 'Times New Roman", Times, serif' }}>
                                <h6 className="mb-3 d-flex align-items-center text-primary">
                                    <FaRegCalendarCheck  className="me-2" /> Цаг авалтын дэлгэрэнгүй
                                </h6>
                                <hr />
                                <div className="mb-3">
                                    <strong>Огноо</strong>
                                    <div>Баасан 3 10-сар, 12:00</div>
                                </div>
                                <hr />
                                <div className="mb-3">
                                    <strong>Салбар</strong>
                                    <div>Монгол улс, 13000, Улаанбаатар хот, Баянзүрх дүүрэг, 6-р хороо, 75/1 байр, Эрхэт оффис, 2 давхар</div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-center">
                                    <img
                                        src="src/assets/doctorImage.png"
                                        alt="doctor"
                                        className="rounded-circle me-2"
                                        width={50}
                                    />
                                    <div>
                                        <div className="fw-semibold">Ц.Сараа</div>
                                        <small className="text-muted"> (Мэргэжил)</small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Service details */}
                        <Card className="shadow-sm">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="text-primary d-flex align-items-center">
                                        <Person className="me-2" /> Үйлчилгээ
                                    </h6>
                                    <Button variant="link" size="sm">Солих</Button>
                                </div>
                                <div className="text-muted mt-2">
                                    {selectedService || "Select a service"}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}