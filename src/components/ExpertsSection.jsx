// src/components/ExpertsSectionV2.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const doctors = [
  { name: "Др. Алтанцэцэг", spec: "Шүдний эмч", img: "/doctors/doc1.jpg", rating: 4.9, reviews: 230 },
  { name: "Др. Мөнх-Эрдэнэ", spec: "Мэдрэлийн эмч", img: "/doctors/doc2.jpg", rating: 4.8, reviews: 180 },
  { name: "Др. Энхжаргал", spec: "Дотор эмч", img: "/doctors/doc3.jpg", rating: 4.9, reviews: 205 },
];

const fadeUp = {
  initial:{opacity:0,y:24},
  animate:{opacity:1,y:0,transition:{duration:0.5}},
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
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}}
      >
        250+ туршлагатай эмч, сувилагч таны эрүүл мэндэд тусална.
      </motion.p>

      <Row className="gy-4">
        {doctors.map((doc, i) => (
          <Col lg={4} md={6} key={doc.name}>
            <motion.div
              whileHover={{ scale: 1.04, y:-6 }}
              initial={{opacity:0,y:18}}
              whileInView={{opacity:1,y:0}}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card className="hp-glass border-0 rounded-4 p-3 h-100">
                <Card.Img
                  src={doc.img}
                  alt={doc.name}
                  className="rounded-circle mx-auto mt-2"
                  style={{ width: 140, height: 140, objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold text-primary mt-3">{doc.name}</Card.Title>
                  <Card.Text className="text-muted mb-2">{doc.spec}</Card.Text>
                  <div className="small text-secondary">
                    ⭐ {doc.rating} <span className="text-muted">({doc.reviews} reviews)</span>
                  </div>
                  <Button variant="outline-primary" className="rounded-pill mt-3 px-4">
                    Цаг авах
                  </Button>
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
