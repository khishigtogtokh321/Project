import { Container, Row, Col, Button } from "react-bootstrap";


export default function About() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className=" align-items-center">
          <Col md={6} className="About-left mb-4 mb-md-0">
            <h1 className="fw-bold text-primary">
              Ashid Dental шүдний <br /> эмнэлгийн програм.{" "}
            </h1>
            <p className="text-muted">
              Шүдний эмч, шүдний эмнэлгүүдэд зориулсан мэргэжлийн, цогц програм хангамж.
            </p>
            <p className="text-secondary">
              Ашид Дентал шүдний эмнэлгийн програм нь 
              шүдний эмнэлгийн бүхий л үйл ажиллагааг 
              системд оруулж, зөв, цэгцтэй явуулах 
              боломжийг хангаж өгсөн цогц програм 
              юм. Үүнээс гадна хэрэглэхэд хялбар,
               ойлгомжтойн дээр програмыг өөрсдийн
                хэрэглээнд нийцүүлэн тохируулах бүрэн 
                боломжтой.     
            </p>
            <Button variant="primary" className="px-4 rounded-pill">
              see more
            </Button>
          </Col>

          {/* Doctor + Background + Images */}
          <Col md={6} className="text-center position-relative">
            {/* Circle Background */}
            <div
              className="rounded-circle bg-primary position-absolute top-50 start-50 translate-middle"
              style={{
                width: "380px",
                height: "380px",
                zIndex: 0,
                background: "rgba(0, 123, 255, 0.1)", 
                opacity: 0.1,
              }}
            ></div>

            {/* Calendar image */}
            <img
              src="src/assets/about-1.png" // өөрийн calendar зургаар солино
              alt="Calendar"
              className="position-absolute top-0 start-25 translate-middle-x shadow"
              style={{ 
                width: "200px",
                zIndex: 1,
                border: '3px solid white',
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                position : 'relative',
                right : '270px'

                }}
            />

            {/* Doctor image */}
            <img
              src="src/assets/doctorAbout.png" // өөрийн doctor зургаар солино
              alt="Doctor"
              className="img-fluid position-relative "
              style={{ maxHeight: "480px",
                zIndex: 2,  
                objectFit: "cover",
                clipPath: "ellipse(47% 47% at 53% 53%)",
                filter: "brightness(1.0) contrast(1.0) saturate(1.0)",
                position: 'relative',
                bottom: '50px',
                right: '30px',
               
              }}
                />

            {/* Appointment info image */}
            <img
              src="src/assets/about2.png" // өөрийн appointment card зургаар солино
              alt="Appointment Info"
              className="position-absolute bottom-0 start-75 translate-middle-x shadow"
              style={{ width: "200px",
                zIndex: 3,
                border: "3px solid white",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                position: 'relative',
                right: '20px',
                }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
