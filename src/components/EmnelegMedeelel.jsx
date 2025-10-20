import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorList from "./DoctorList";

export default function EmnelgiinMedeelel() {
    return (
    <Container fluid className="emnelegHeader p-0">
   
      <div className="header bg-primary text-white d-flex align-items-center p-3">
        <img src="src/assets/ashidLogo.png" alt="clinic" className="header-img me-3" />
        <div className="header-text">
          <h5 className="mb-0">ТАНД БИД ГОО САЙХАН, НҮҮР БАРДАМ ИНЭЭМСЭГЛЭЛ БЭЛЭГЛЭНЭ.</h5>
        
        </div>
      </div>

      <Nav variant="underline" defaultActiveKey="keyInfo" className="emnelegNavbar sticky-top " style={ { maxWidth: '86%', zIndex: '1'}}  >
        <Nav.Item>
          <Nav.Link className="nav-item-about" eventKey="BidniiTuhai">Бидний тухай</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="map">Хаяг</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link src= "src/components/DoctorList.jsx">Эмч Нар</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="profile">Үйлчилгээ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="hous">Цагийн авах</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Main Content */}
      <Container className="my-4" >
        <Row>
          {/* Left Column */}
          <Col md={8}>
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
                           <p>Монгол улс, 13000, Улаанбаатар хот, Баянзүрх дүүрэг, 6-р хороо, 75/1 байр, Эрхэт оффис, 2 давхар</p>
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
          <Col md={4}>
            <Card className="p-3 mb-3 sticky-top" style={{top: '70px', zIndex:  '0'}}>
              <h6>Оргилдент</h6> <hr />
              <ul className="list-unstyled p-2">
                <li> <span className="text-primary" >Хаяг</span>: Монгол улс, 13000, Улаанбаатар хот, Хан-Уул дүүрэг, 11-р хороо, Маршал таун, 115-р байр</li>
                <li> <span className="text-primary"> Холбогдох утас:</span> 7000-8811</li>
                <li> <span className="text-primary"> И-мэйл:</span>info@gmail.com</li>
                <li> <span className="text-primary"> Цахим орчинд:</span> 7000-8811</li>
              </ul>
              <Button variant="primary" className="w-100 mb-2">Үйлчилгээ сонгох</Button>
              <Button variant="outline-primary" className="w-100">Мэссэж илгээх</Button>
            </Card>
          </Col>
        </Row>
      </Container>
      < DoctorList />
    </Container>
  );
}