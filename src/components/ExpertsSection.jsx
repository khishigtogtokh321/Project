// src/components/ExpertsSectionV2.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const doctors = [
  { name: "Др. Алтанцэцэг", spec: "Шүдний эмч", img: "/doctors/doc1.jpg", rating: 4.9, reviews: 230 },
  { name: "Др. Мөнх-Эрдэнэ", spec: "Мэдрэлийн эмч", img: "/doctors/doc2.jpg", rating: 4.8, reviews: 180 },
  { name: "Др. Энхжаргал", spec: "Дотор эмч", img: "/doctors/doc3.jpg", rating: 4.9, reviews: 205 },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ExpertsSection() {
  return (
    <Container className="py-5 text-center">
      <motion.h2
        className="fw-bold mb-2 text-primary hp-underline"
        initial="initial" animate="animate" variants={fadeUp}
      >
        Манай мэргэжилтнүүд
      </motion.h2>
      <motion.p className="text-muted mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
      >
        250+ туршлагатай эмч, сувилагч таны эрүүл мэндэд тусална.
      </motion.p>

      <Row className="gy-4">
        {doctors.map((doc, i) => (
          <Col lg={4} md={6} key={doc.name}>
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="border-0 rounded-4 overflow-hidden shadow-sm h-100 bg-white" style={{ border: '1px solid #f1f5f9' }}>
                <div className="pt-4 text-center">
                  <div className="position-relative d-inline-block">
                    <Card.Img
                      src={doc.img}
                      alt={doc.name}
                      className="rounded-circle shadow-sm"
                      style={{ width: 110, height: 110, objectFit: "cover", border: '3px solid #f8fbff' }}
                    />
                    <div className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle" style={{ width: 14, height: 14 }} title="Online"></div>
                  </div>
                </div>

                <Card.Body className="pt-3 text-center d-flex flex-column">
                  <div>
                    <Card.Title className="fw-bold text-navy h6 mb-1">{doc.name}</Card.Title>
                    <Card.Text className="text-muted small mb-2">{doc.spec}</Card.Text>

                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3 bg-light rounded-pill py-1 px-3 d-inline-flex">
                      <span className="text-warning small" style={{ fontSize: '0.7rem' }}>★</span>
                      <span className="fw-bold small" style={{ fontSize: '0.8rem' }}>{doc.rating}</span>
                      <span className="text-muted" style={{ fontSize: '0.75rem' }}>({doc.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center border-top pt-3 mb-3">
                      <div className="text-start">
                        <small className="text-muted d-block" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Боломжит цаг:</small>
                        <span className="text-navy fw-bold small" style={{ fontSize: '0.8rem' }}>Өнөөдөр 15:30</span>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill fw-bold" style={{ fontSize: '0.65rem' }}>Нээлттэй</span>
                      </div>
                    </div>

                    <Button variant="primary" className="rounded-pill w-100 py-2 fw-bold small border-0 shadow-sm" style={{ fontSize: '0.85rem' }}>
                      Цаг захиалах
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Button variant="primary" className="mt-4 rounded-pill px-4">
        Бүх эмчийг харах
      </Button>
    </Container>
  );
}
