import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";

import clinicLogo from "../assets/ashidLogo.png";
import DoctorList from "./DoctorList";

export default function EmnelgiinMedeelel() {
  return (
    <div className="clinic-details">
      <header className="clinic-header">
        <Container>
          <Row className="align-items-center g-3">
            <Col xs={3} sm={2} md={1} lg="auto">
              <img src={clinicLogo} alt="Клиникийн лого" className="clinic-header__logo" />
            </Col>
            <Col>
              <h1 className="clinic-header__title">
                ТАНД БИД ГОО САЙХАН, НҮҮР БАРДАМ ИНЭЭМСЭГЛЭЛ БЭЛЭГЛЭНЭ
              </h1>
            </Col>
          </Row>
        </Container>
      </header>

      <Nav variant="pills" className="clinic-tabs" defaultActiveKey="overview">
        <Nav.Item>
          <Nav.Link eventKey="overview">Бидний тухай</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="map">Хаяг</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="doctors">Эмч нар</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="services">Үйлчилгээ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="booking">Цаг авах</Nav.Link>
        </Nav.Item>
      </Nav>

      <Container className="clinic-content">
        <Row className="g-4">
          <Col lg={8}>
            <Card className="clinic-panel" id="overview">
              <Card.Body>
                <h2 className="clinic-panel__title">Бидний тухай</h2>
                <p>
                  Манай эмнэлэг нь 2012 онд үүсгэн байгуулагдсан цагаасаа хойш тасралтгүй, тогтвор
                  суурьшилтайгаар үйл ажиллагаа явуулж байна. Бид шүдний бүх төрлийн эмчилгээ,
                  оношилгоог өвдөлт, айдасгүйгээр цогц эмчлэхээс гадна танд ганцаарчилсан
                  үйлчилгээ үзүүлж, шүдний асуудлыг тань хамтдаа шийдвэрлэнэ. Мөн манай эмнэлэг
                  нь АНУ, БНСУ, Япон, Герман зэрэг улсуудад үйлдвэрлэгдсэн сайн чанарын багаж,
                  материал, тоног төхөөрөмж ашиглан, мэргэжлийн чадвар, туршлагатай эмч нарын
                  баг эмчилгээ, үйлчилгээ үзүүлж байна.
                </p>
                <a href="#more">Дэлгэрэнгүй үзэх</a>
              </Card.Body>
            </Card>

            <Card className="clinic-panel" id="map">
              <Card.Body>
                <h2 className="clinic-panel__title">Хаяг</h2>
                <Row className="g-4">
                  <Col md={6}>
                    <div className="clinic-address">
                      <h3>Салбар 1: Бөхийн өргөө</h3>
                      <p>Монгол улс, Улаанбаатар хот, Баянзүрх дүүрэг, 6-р хороо, 75/1 байр</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="clinic-address">
                      <h3>Салбар 2: Маршал таун</h3>
                      <p>Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг, 11-р хороо, Маршал таун, 115-р байр</p>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="clinic-map-placeholder">Газрын зураг энд орно</div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="clinic-summary">
              <Card.Body>
                <h3 className="clinic-summary__title">Оргилдент</h3>
                <ul className="list-unstyled clinic-summary__list">
                  <li>
                    <span className="label">Хаяг:</span> Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг, 11-р хороо, Маршал таун,
                    115-р байр
                  </li>
                  <li>
                    <span className="label">Холбогдох утас:</span> 7000-8811
                  </li>
                  <li>
                    <span className="label">И-мэйл:</span> info@gmail.com
                  </li>
                  <li>
                    <span className="label">Цахим орчинд:</span> 7000-8811
                  </li>
                </ul>
                <div className="d-grid gap-2">
                  <Button variant="primary">Үйлчилгээ сонгох</Button>
                  <Button variant="outline-primary">Мэссэж илгээх</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="clinic-doctors">
        <h2 className="clinic-panel__title">Эмч нар</h2>
        <DoctorList />
      </Container>
    </div>
  );
}
