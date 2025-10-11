import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const DEFAULT_IMAGE = "https://via.placeholder.com/150";

export default function DoctorCard({ doctor }) {
  const branches = doctor.branches && doctor.branches.length > 0 ? doctor.branches : ["Ерөнхий"];
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  const timesRaw =
    typeof doctor.times === "object" && !Array.isArray(doctor.times)
      ? doctor.times[activeBranch] || []
      : doctor.times || [];
  const times = Array.isArray(timesRaw) ? timesRaw.filter(Boolean) : [];

  const address =
    typeof doctor.address === "object" && !Array.isArray(doctor.address)
      ? doctor.address[activeBranch]
      : doctor.address;

  return (
    <Card className="doctor-card">
      <Card.Body>
        <Row className="g-4 align-items-start">
          <Col md={4} className="doctor-card__profile">
            <div className="doctor-card__identity">
              <img
                src={doctor.image || DEFAULT_IMAGE}
                alt={doctor.name}
                className="doctor-card__photo"
              />
              <div>
                <h3 className="doctor-card__name">{doctor.name}</h3>
                <p className="doctor-card__role">{doctor.profession}</p>
              </div>
            </div>
            {doctor.description && (
              <p className="doctor-card__bio">{doctor.description}</p>
            )}
          </Col>

          <Col md={4} className="doctor-card__availability">
            <div className="doctor-card__branches">
              {branches.map((branch) => (
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
            {address && <p className="doctor-card__address">Хаяг: {address}</p>}
            <div className="doctor-card__times">
              {times.map((time) => (
                <Button key={time} variant="outline-primary" size="sm">
                  {time}
                </Button>
              ))}
            </div>
            <Button variant="primary" size="sm" className="doctor-card__more">
              Өөр цаг харах
            </Button>
          </Col>

          <Col md={4} className="doctor-card__services">
            <h4 className="doctor-card__services-title">Үйлчилгээ</h4>
            <ListGroup variant="flush" className="doctor-card__services-list">
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
      </Card.Body>
    </Card>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string,
    branches: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    times: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
