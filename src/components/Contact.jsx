
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GeoAltFill, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#fff" }}>
      <Container>
        <Row>
          {/* Зүүн талын мэдээлэл */}
          <Col md={6}>
            <h2>Бидэнтэй холбогдох зам <br />үргэлж нээлттэй</h2>
            <p style={{ color: "#00000065"}}>
             Манай компани мэдээллийн технологийн шийдэл боловсруулахаас <br />
             гадна харилцагчиддаа мэргэжлийн зөвлөгөө өгөх, борлуулалтын <br />
             дараах үйлчилгээ үзүүлэх зэрэгт онцгой анхаарч ажилладаг билээ. <br />
             Тантай, танай байгууллагатай хамтран ажиллахдаа бид үргэлж <br />
             баяртай байх болно.
            </p>
            <p><GeoAltFill className="me-4"/> СБД, 9-р хороо, Хоймор офисс, 504 тоот</p>
            <p><EnvelopeFill className="me-4"/> info@example.mn</p>
            <p><TelephoneFill className="me-4"/> +976 80000000</p>
          </Col>

          {/* Баруун талын форм */}
          <Col md={6}>
            <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" , fontFamily : 'Arial sans-serif' }}>
              <h3>Бидэнтэй холбогдох</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Нэр" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Имэйл" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Control type="text" placeholder="Хаяг" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control as="textarea" rows={3} placeholder="Агуулга" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Илгээх
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
