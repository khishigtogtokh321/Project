
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GeoAltFill, EnvelopeFill, TelephoneFill, ArrowRight } from "react-bootstrap-icons";
import { FaMapLocationDot } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneForward } from 'react-icons/bs';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#f9f8fa'}}>
    <Container className="my-5" style={{height: '700px'}} >
      <Row className="align-items-center" style={{ position: 'relative', top: '100px'}}>
        {/* Left Text Section */}
        <Col md={6} className="mb-4">
          <h1 className="fw-bold">Бидэнтэй холбогдох зам <br />үргэлж нээлттэй</h1>
          <p className="text-muted">
              Манай компани мэдээллийн технологийн шийдэл боловсруулахаас <br />
              гадна харилцагчиддаа мэргэжлийн зөвлөгөө өгөх, борлуулалтын <br />
              дараах үйлчилгээ үзүүлэх зэрэгт онцгой анхаарч ажилладаг билээ. <br />
              Тантай, танай байгууллагатай хамтран ажиллахдаа бид үргэлж <br />
              баяртай байх болно.
          </p>

          <div className="mt-4">
            <p>
              <FaMapLocationDot className="me-3 text-primary" size={40}  />
           
              <span>СБД, 9-р хороо, Хоймор офисс, 504 тоот</span>
            </p>
            <p>
              <HiOutlineMail className="me-3 text-primary" size={40} />
              <span>info@example.mn</span>
            </p>
            <p>
              <BsTelephoneForward className="me-3 text-primary" size={40} />
              <span>+976 80013319</span>
            </p>
          </div>
        </Col>

        {/* Right Form Section */}
        <Col md={6} className="d-flex justify-content-center">
          <div className=" p-4 shadow rounded bg-white" style={{ maxWidth: '450px', width: '100%'}}>
            <Form style={{ maxHeight: 'auto'}}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Нэр</Form.Label>
                <Form.Control type="text" placeholder="Таны нэр*" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>И-мэйл</Form.Label>
                <Form.Control type="email" placeholder="И-мэйл хаяг*" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formIndustry">
                <Form.Label>Агуулга</Form.Label>
                <Form.Control type="text" placeholder="Агуулга" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Захиа</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Таны захиа" />
              </Form.Group>

              <Button variant="primary" type="submit" className="d-flex align-items-center">
                Илгээх <ArrowRight className="ms-2" />
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Contact;
