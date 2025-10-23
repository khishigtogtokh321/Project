import React, { useState } from "react";
import { Container, Card, Button, Row, Col , ListGroup, ListGroupItem} from "react-bootstrap";

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

<Container className="my-4 ">
  <Card className="p-3 border-primary-subtle">
    <Row className="gy-3 gy-md-0">
      {/*  Эмчийн зураг + нэр + тайлбар */}
      <Col xs={12} md={4} className="shadow-sm rounded-3 bg-white p-3">
        <div className="d-flex align-items-start gap-3">
          <img
            src="src/assets/doctorImage.png"
            alt="Doctor"
            className="rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <div className="text-start">
            <h5 className="mb-0 fw-semibold">Ц. Батaa</h5>
            <p className="text-muted mb-0 small">Мэргэжил</p>
          </div>
        </div>

        <div className="border rounded bg-light p-2 mt-3 text-start">
          <p className="small mb-0">
            Find and replace allows you to quickly search for a word or phrase
            in the whole page and substitute it with something else.
          </p>
        </div>
      </Col>

      {/*  Салбар + цагийн хуваарь */}
      <Col xs={12} md={4} className="shadow-sm rounded-3 bg-white p-3">
        <div className=" mb-2 d-flex flex-wrap gap-1">
          {doctor.branches.map((branch) => (
            <Button
              key={branch}
              variant={branch === activeBranch ? "primary" : "outline-primary"}
              size="sm"
              onClick={() => setActiveBranch(branch)}
            >
              {branch}
            </Button>
          ))}
        </div>
       
        <div className="text-start">
          <p className="small text-muted mb-2">Хаяг: {address}</p>

          <div className="d-flex flex-wrap gap-2">
            {times.map((time, idx) => (
              <Button key={idx} variant="outline-primary" size="sm">
                {time}
              </Button>
            ))}
          </div>

          <div className="mt-3">
            <Button variant="primary" size="sm">
              Өөр цаг харах
            </Button>
          </div>
        </div>
      </Col>

      {/*  Үйлчилгээний жагсаалт */}
      <Col xs={12} md={4} className="shadow-sm rounded-3 bg-white p-3">
        <h6 className="text-primary text-start mb-2">Үйлчилгээ</h6>
        <ListGroup
          variant="flush"
          className="text-start small"
        >
          <ListGroup.Item>Согог заслын эмчилгээ</ListGroup.Item>
          <ListGroup.Item>Шүд шилжүүлэн суулгах</ListGroup.Item>
          <ListGroup.Item>Хүүхдийн шүдний эмчилгээ</ListGroup.Item>
          <ListGroup.Item>Сувгийн эмчилгээ</ListGroup.Item>
          <ListGroup.Item>
            Дэлгэмэл болон бүх төрлийн рентген CBCT зураг
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </Card>
</Container>
  );
}
