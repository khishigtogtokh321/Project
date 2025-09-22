import React, { useState } from "react";
import { Container, Card, Button, Row, Col, ButtonGroup, Form } from "react-bootstrap";

export default function DoctorCard({ doctor }) {
  const [activeBranch, setActiveBranch] = useState(doctor.branches[0] || "");

  return (
    <Container className="my-3">

      <Card className="p-2 m-2 " style={{borderColor: '#ffff'}}>
        
        <Row>
          {/* Зураг */}
          <Col md={4} className="text-center">
          <div class="container" style={{position: 'relative' , top: '40px'}} >
          <div class="row">
            <div class="col" style={{borderRadius: "5px" , borderColor: "#000000"}}>
              <img
              src="src/assets/doctorImage.png"
              alt="Doctor"
              className=" mb-3"
              width={120}
              height={120}
              borderColor = "#0000"
            />
            </div>
            <div class="col">
              <h5>Ц. Батaa</h5>
              <p className="text-muted">Мэргэжил</p>
            </div>
          </div>
        </div>  
          </Col>

          {/* Сул цаг сонголт */}
          <Col md={4} className="p-3">
             <p>Салбар1 | Салбар2</p> <hr />
              <p className="small text-muted">
                Хаяг: Улаанбаатар, Баянзүрх дүүрэг
              </p>
              <h6 className="mb-3">Сул цагууд</h6>
            <div className="d-flex flex-wrap gap-2">
              <Button variant="outline-primary" size="sm">
                2 Oct 09:30
              </Button>
              <Button variant="outline-primary" size="sm">
                2 Oct 10:00
              </Button>
              <Button variant="outline-primary" size="sm">
                2 Oct 10:30
              </Button>
              <Button variant="outline-primary" size="sm">
                10 Oct 11:30
              </Button>
              <Button variant="outline-primary" size="sm">
                10 Oct 12:00
              </Button>
              <Button variant="outline-primary" size="sm">
                10 Oct 14:30
              </Button>
            </div>
            <div className="mt-3">
              <Button variant="primary">Цаг авах</Button>
            </div>
          </Col>

          {/* Эмчийн тайлбар */}
          <Col md={4}>
            <h6 className="mb-2">Тайлбар</h6>
            <p className="small text-muted">
              Чих, хамар, хоолойн эмч. Ерөнхий болон тусгай чиглэлийн эмгэгүүдийг үзнэ.
              Хоолойн өвчин, сонсголын асуудал, хавдрын оношлогоо, түргэн тусламж,
              сонсгол ба тэнцвэрийн шинжилгээнд мэргэшсэн.
            </p>
          </Col>
        </Row>
        <hr />

      </Card>
      
    
    </Container>
  );
}
