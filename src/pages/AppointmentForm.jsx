import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card, Form, Button, Dropdown, Image} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AppointmentForm() {
  const [_payment, _setPayment] = useState("Сонгох");
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();
  console.log("Selected _payment:", selectedPayment);
  const handleContinue = () => {
    if (!selectedPayment){
      alert("Төлбөрийн хэлбэрээ сонгоно уу");
      return ;
      }
      navigate("/_payment", {state: {selectedPayment}});
    };
   
  const handleNext = () => {
    navigate("/register");
   };

  const handleNavigation = () => {
    navigate("/calendar");
  }; 


  return (
    <Container className="mt-5">
      <Row className="g-3">
            <Col md={6}>
          <Card className="shadow-lg border-0 rounded-3">
                  <Card.Body  style={{
                position: 'relative',
                left: '20px'
              }}>
              <h4 className="mb-2 text-center text-success fw-bold ">
                Цаг авалтын мэдээлэл
              </h4>
              <div>
                <Row className="g-0">
                  <Col md={3} className="text-center px-1">
                    <Image
                      src="src/assets/doctorImage.png"
                      rounded
                      fluid
                    />
                    <p className="mt-2 fw-semibold mb-4">Ц. Батaa</p>
                  </Col>
                  <Col md={9} className="p-1">
                    <p className="mb-1">
                      <strong>Эмнэлгийн нэр:</strong> Оргил дент
                    </p>
                    <p className="mb-1">
                      <strong>Салбар:</strong> 1
                    </p>
                    <p className="mb-1">
                      <strong>Хаяг:</strong> Улаан баатар Баян Зүрх Дүүрэг
                    </p>
                    <p className="mb-1">
                      <strong>Огноо:</strong> 2025.09.02 , 9:30PM 
                      <i className="bi bi-clock" style={{ position: 'relative' , left: '3px'}}> 30</i>
                    </p>
                    <p className="mb-1">
                      <strong>Эмнэлгийн утас:</strong> 77777777
                    </p>
                    <p className="mb-2">
                      <strong>Цахим орчинд:</strong>
                    </p>
                  </Col>
                </Row>
              </div> 
  
              <h6 className="text-primary fw-bold">Үйлчилгээний мэдээлэл</h6>
              <p className="text">Үйлчилгээ:</p>
              <p className="text">Үнийн дүн:</p>
              <h6 className="text-primary fw-bold mb-3">Төлбөрийн систем</h6>

              <Dropdown onSelect={(eventKey) => setSelectedPayment(eventKey)}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {selectedPayment ? selectedPayment : "Төлбөрийн хэлбэр сонгох"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="SocialPay">SocialPay</Dropdown.Item>
                  <Dropdown.Item eventKey="QPay">QPay</Dropdown.Item>
                  <Dropdown.Item eventKey="Карт">Банкны карт</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              

        
            </Card.Body>
            <div style={{
              height: '30px'
            }}></div>
          </Card>
        </Col>
        
        {/* Баруун талын цаг авалтын мэдээлэл */}
  
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-3">
            <Card.Body>
              <h4 className="mb-3 text-center text-primary fw-bold">
                Үйлчлүүлэгчийн мэдээлэл
              </h4>
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

                <Row >
                  <Col md={6} className="mb-2">
                  <Button  variant="primary" type="button" onClick={handleContinue} className="w-100">
                    Үргэлжлүүлэх
                  </Button>
                </Col>
                <Col md={6} className="mb-2" >
                  <Button variant="secondary"  type="button" onClick={handleNavigation}  className="w-100 ">
                    Буцах
                  </Button>
                </Col>
                </Row>
                 <Button  type="button" onClick={handleNext} className="w-100">
                   Бүртгүүлэх
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <div style={{
        height: '61px'
      }}>

      </div>
    </Container>
    
    
  );

}
