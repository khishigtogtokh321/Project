import { Button, Col, Container, Row } from "react-bootstrap";

import aboutHero from "../assets/doctorAbout.png";
import aboutCalendar from "../assets/about-1.png";
import aboutCard from "../assets/about2.png";

export default function About() {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="about-copy">
              <h2 className="about-title text-primary fw-bold">
                Ashid Dental шүдний <br /> эмнэлгийн програм
              </h2>
              <p className="text-muted">
                Шүдний эмч, шүдний эмнэлгүүдэд зориулсан мэргэжлийн, цогц програм
                хангамж.
              </p>
              <p className="text-secondary">
                Ашид Дентал шүдний эмнэлгийн програм нь шүдний эмнэлгийн бүхий л үйл
                ажиллагааг системд оруулж, зөв, цэгцтэй явуулах боломжийг хангаж өгсөн
                цогц програм юм. Үүнээс гадна хэрэглэхэд хялбар, ойлгомжтойн дээр
                програмыг өөрсдийн хэрэглээнд нийцүүлэн тохируулах бүрэн боломжтой.
              </p>
              <Button variant="primary" className="px-4 rounded-pill">
                Дэлгэрэнгүй
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-illustration">
              <div className="about-illustration__bubble" aria-hidden="true" />
              <img
                src={aboutCalendar}
                alt="Цаг товлох хуваарь"
                className="about-illustration__calendar"
                loading="lazy"
              />
              <img
                src={aboutHero}
                alt="Эмчийн хөрөг"
                className="about-illustration__doctor"
                loading="lazy"
              />
              <img
                src={aboutCard}
                alt="Үйлчилгээний карт"
                className="about-illustration__card"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
