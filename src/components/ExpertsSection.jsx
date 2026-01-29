import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./ui/Badge";

const doctors = [
  { id: 1, name: "Др. Алтанцэцэг", spec: "Шүдний эмч", img: "/doctors/doc1.jpg", rating: 4.9, reviews: 230, time: "Өнөөдөр 15:30" },
  { id: 2, name: "Др. Мөнх-Эрдэнэ", spec: "Мэдрэлийн эмч", img: "/doctors/doc2.jpg", rating: 4.8, reviews: 180, time: "Маргааш 09:00" },
  { id: 3, name: "Др. Энхжаргал", spec: "Дотор эмч", img: "/doctors/doc3.jpg", rating: 4.9, reviews: 205, time: "Өнөөдөр 17:00" },
];

export default function ExpertsSection() {
  return (
    <section className="py-6 bg-white">
      <Container>
        <div className="text-center mb-5">
          <motion.h2
            className="text-h2 mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Манай мэргэжилтнүүд
          </motion.h2>
          <motion.p
            className="text-body text-gray-600 mx-auto max-w-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            250+ туршлагатай эмч, сувилагч таны эрүүл мэндэд тусална.
          </motion.p>
        </div>

        <Row className="gy-4 justify-content-center">
          {doctors.map((doc, i) => (
            <Col lg={4} md={6} sm={10} key={doc.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card variant="default" className="h-100 d-flex flex-column text-center p-4">
                  {/* 📷 Doctor Portrait */}
                  <div className="position-relative d-inline-block mx-auto mb-3">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="rounded-circle shadow-sm"
                      style={{ width: 100, height: 100, objectFit: "cover", border: '3px solid var(--primary-50)' }}
                    />
                    <div className="position-absolute bottom-0 end-0 bg-success-500 border border-white rounded-circle" style={{ width: 14, height: 14 }} title="Online"></div>
                  </div>

                  {/* 📝 Doctor Info */}
                  <div className="mb-3">
                    <h3 className="text-h3 mb-1">{doc.name}</h3>
                    <p className="text-body-sm text-gray-500 mb-2">{doc.spec}</p>

                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Badge variant="primary" size="sm">
                        <span className="text-warning-500 me-1">★</span> {doc.rating} ({doc.reviews})
                      </Badge>
                    </div>
                  </div>

                  {/* ⏰ Availability */}
                  <div className="mt-auto pt-4 border-top border-gray-100 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-start">
                        <span className="text-body-xs d-block text-gray-400">Боломжит цаг:</span>
                        <span className="text-body-sm fw-bold text-navy-900">{doc.time}</span>
                      </div>
                      <Badge variant="success" size="sm">Нээлттэй</Badge>
                    </div>
                  </div>

                  <Button variant="primary" size="md" className="w-100">
                    Цаг захиалах
                  </Button>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="outline" size="lg">
            Бүх эмчийг харах
          </Button>
        </div>
      </Container>
    </section>
  );
}
