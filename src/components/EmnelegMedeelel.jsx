import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorList from "./DoctorList";
import { Link } from "react-router-dom";

export default function EmnelgiinMedeelel() {
    return (
    <Container fluid className="emnelegHeader p-0 bg-light">
   
      <div className="header bg-primary text-white d-flex align-items-center p-3">
        <img src="src/assets/ashidLogo.png" alt="clinic" className="header-img me-3" />
        <div className="header-text">
          <h5 className="mb-0">ТАНД БИД ГОО САЙХАН, НҮҮР БАРДАМ ИНЭЭМСЭГЛЭЛ БЭЛЭГЛЭНЭ.</h5>
        </div>
      </div>

       <Nav
      variant="underline"
      defaultActiveKey="BidniiTuhai"
      className="emnelegNavbar sticky-top justify-content-start gap-2 py-1 bg-white border-bottom shadow-sm"
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/about" eventKey="BidniiTuhai">
          Бидний тухай
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/map" eventKey="map">
          Хаяг
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/doctors" eventKey="doctors">
          Эмч нар
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/services" eventKey="profile">
          Үйлчилгээ
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/appointment" eventKey="hous">
          Цаг авах
        </Nav.Link>
      </Nav.Item>
    </Nav>

      {/* Main Content */}
      <Container className="my-4" >
        <Row>
          {/* Left Column */}
          <Col xs={{ order: 2}} md={{order:2}} lg={{order:1, span: 8}}>
            <Card className="mb-3 p-3" id="BidniiTuhai">
             <h5 className="text-bold">Бидний тухай</h5>
              <p>Манай эмнэлэг нь 2012 онд үүсгэн байгуулагдсан 
                  цагаасаа хойш тасралтгүй, тогтвор суурьшилтайгаар үйл
                  ажиллагаа явуулж байна. Бид шүдний бүх төрлийн эмчилгээ,
                  оношилгоог өвдөлт, айдасгүйгээр цогц эмчлэхээс гадна танд ганцаарчилса
                  н үйлчилгээ үзүүлж, шүдний асуудлыг тань хамтдаа шийдвэрлэнэ. Мөн манай 
                  эмнэлэг нь АНУ, БНСУ, Япон, Герман зэрэг улсуудад үйлдвэрлэгдсэн сайн чанарын 
                  агаж, материал, тоног төхөөрөмж ашиглан, мэргэжлийн чадвар, туршлагатай эмч нарын 
                  баг эмчилгээ, үйлчилгээ үзүүлж байна.
                </p>
              <a href="#">See more</a>
            </Card>

            <Card className="p-3" id="map">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-bold">Хаяг</h5>
                        <p> <span className="text-primary">Салбар 1: </span>Бөхийн өргөө салбар
                           <p> Баянзүрх дүүрэг, 6-р хороо, 75/1 байр, Эрхэт оффис, 2 давхар</p>
                        </p>
                        <p><span className="text-primary">Салбар 2: </span> Маршал таун салбар
                           <p>Монгол улс, 13000, Улаанбаатар хот, Хан-Уул дүүрэг, 11-р хороо, Маршал таун, 115-р байр</p>
                        </p>

                    </div>
                    <div className="col-md-6 ">
                         <iframe
                            title="Google Map"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Mongolia,%20Ulaanbaatar+(My%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                          ></iframe>
                    </div>
                </div>
            </Card>
          </Col>

          {/* Right Column */}
          <Col xs={{ order: 1 }} md={{order:1}} lg={{ order: 2, span: 4 }}>
            <Card className="p-3 mb-3 sticky-top" style={{ top: '70px', zIndex: '0' }}>
              <h5 className="fw-bold  mb-2">Оргилдент</h5>
              <hr />

              <table className="table table-borderless align-middle small mb-3 table-condensed lh-1 py-0 my-0">
                <tbody>
                  <tr>
                    <th className="text-primary text-nowrap" style={{ width: '40%' }}>Хаяг:</th>
                    <td>
                      Монгол улс, Улаанбаатар хот,<br />
                      Хан-Уул дүүрэг, 11-р хороо,<br />
                      Маршал таун, 115-р байр
                    </td>
                  </tr>
                  <tr>
                    <th className="text-primary text-nowrap">Утас:</th>
                    <td>7000-8811</td>
                  </tr>
                  <tr>
                    <th className="text-primary text-nowrap">И-мэйл:</th>
                    <td>info@gmail.com</td>
                  </tr>
                  <tr>
                    <th className="text-primary text-nowrap">Цахим орчинд:</th>
                    <td>facebook.com/orgildent</td>
                  </tr>
                </tbody>
              </table>

              <div className="d-grid gap-2">
                <Button variant="primary">Эмч сонгох</Button>
                <Button variant="outline-primary">Буцах</Button>
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
      < DoctorList />
    </Container>
  );
}