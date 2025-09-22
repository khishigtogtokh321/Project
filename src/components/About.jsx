import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImg from "../assets/ashidAbout.png"; // өөрийн зургаа энд хийнэ

export default function About() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Зураг */}
        <Col md={6} className="mb-4 mb-md-0">
          <Image src={aboutImg} alt="About us" fluid rounded />
        </Col>

        {/* Текст */}
        <Col md={6}>
        <h1>Ashid Dental шүдний эмнэлгийн програм</h1>
            <p className="fs-3">
              Шүдний эм, шүдний эмнэлгүүдэд зориулагдсан мэргэжлийн цогц програм
              хангамж.
            </p>
            <p>
              Ашид Дентал шүдний эмнэлгийн програм нь шүдний эмнэлгийн 
              бүхий л үйл ажиллагааг системд оруулж, зөв, цэгцтэй явуулах
              боломжийг хангаж өгсөн цогц програм юм. Үүнээс гадна 
              хэрэглэхэд хялбар, ойлгомжтойн дээр програмыг өөрсдийн
                хэрэглээнд нийцүүлэн тохируулах бүрэн боломжтой.
            </p>
          
        </Col>
      </Row>
    </Container>
  );
}
