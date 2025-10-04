import React, { useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

export default function DoctorCard({ doctor }) {
  const [activeBranch, setActiveBranch] = useState(doctor.branches[0] || "");

  // Цагуудыг авах (branch байгаа эсэхийг шалгах)
  const times =
    typeof doctor.times === "object" && doctor.times[activeBranch]
      ? doctor.times[activeBranch]
      : doctor.times || [];

  const address =
    typeof doctor.address === "object" && doctor.address[activeBranch]
      ? doctor.address[activeBranch]
      : doctor.address;

  return (
    <Container className="my-4">
      <Card className="p-2 m-2" style={{ borderColor: "#00a8ff" }}>
        <Row >
          {/* Зураг ба нэр */}
         <Col md={4} className="doctor-card-img"  style={{ borderRight: '1px solid #ddd'}}>
              <div class="container" style={{position: 'relative' , top: '40px'}} >
                <div class="row row-cols-auto">
                  <div class="col" style={{borderRadius: "5px" , borderColor: "#000000"}}>
                    <img
                    src="src/assets/doctorImage.png"
                    alt="Doctor"
                    style={{ borderRadius: '5px' , borderColor:  ' 1px #000000'}}
                    height={80}
                    borderColor = "#0000"
                  />
                  </div>
                  <div class="col" style={{textAlign: 'left', marginTop: '10px'}}>
                    <h5>Ц. Батaa</h5>
                    <p className="text-muted">Мэргэжил</p>
                  </div>
                </div>
                <div className="border p-2 mt-3" style={{textAlign: 'left', borderColor: '#ddd', borderRadius: '5px', backgroundColor: '#f8f9fa' }}>
                  <p style={{ fontSize: '13px'}}>
                    Find and replace allows
                     you to quickly search for a word or phrase in the who
                     le page and substitute it with something else.
                     </p>
                </div>
            </div>  
          </Col>
        

          {/* Салбар ба сул цагууд */}
          <Col md={4} className="p-3" style={{ borderRight: "1px solid #ddd" }}>
            <div className="mb-2">
              {doctor.branches.map((branch) => (
                <Button
                  key={branch}
                  variant={branch === activeBranch ? "primary" : "outline-primary"}
                  size="sm"
                  onClick={() => setActiveBranch(branch)}
                  className="me-1"
                >
                  {branch}
                </Button>
              ))}
            </div>
            <hr />
            <p className="small text-muted">Хаяг: {address}</p>
            <h6 className="mb-3">Сул цагууд</h6>
            <div className="d-flex flex-wrap gap-2">
              {times.map((time, idx) => (
                <Button key={idx} variant="outline-primary" size="sm">
                  {time}
                </Button>
              ))}
            </div>
            <div className="mt-3">
              <Button variant="primary">Цаг авах</Button>
            </div>
          </Col>

          {/* Тайлбар */}
          <Col md={3} className="text-center">
            <h6 className="mb-2">Тайлбар</h6>
            <p className="small text-muted">{doctor.description}</p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
