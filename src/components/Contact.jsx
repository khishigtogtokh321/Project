import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ArrowRight, EnvelopeFill, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";

export default function Contact() {
  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="contact-copy">
              <h2 className="contact-title fw-bold">Бидэнтэй холбогдох зам үргэлж нээлттэй</h2>
              <p className="text-muted">
                Манай компани мэдээллийн технологийн шийдэл боловсруулахаас гадна харилцагчиддаа
                мэргэжлийн зөвлөгөө өгөх, борлуулалтын дараах үйлчилгээ үзүүлэх зэрэгт онцгой
                анхаарч ажилладаг. Тантай хамтран ажиллахдаа бид үргэлж баяртай байх болно.
              </p>

              <ul className="contact-details list-unstyled">
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <GeoAltFill />
                  </span>
                  <span>СБД, 9-р хороо, Хоймор оффис, 504 тоот</span>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <EnvelopeFill />
                  </span>
                  <span>info@example.mn</span>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <TelephoneFill />
                  </span>
                  <span>+976 80013319</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-form card border-0 shadow-sm">
              <div className="card-body p-4">
                <Form>
                  <Form.Group className="mb-3" controlId="contact-name">
                    <Form.Label>Нэр</Form.Label>
                    <Form.Control type="text" placeholder="Таны нэр*" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contact-email">
                    <Form.Label>И-мэйл</Form.Label>
                    <Form.Control type="email" placeholder="И-мэйл хаяг*" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contact-subject">
                    <Form.Label>Агуулга</Form.Label>
                    <Form.Control type="text" placeholder="Агуулга" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="contact-message">
                    <Form.Label>Захиа</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Таны захиа" />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="d-inline-flex align-items-center gap-2">
                    Илгээх
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
