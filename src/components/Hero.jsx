import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import PartnerLogos from "./PartnerLogos";
import Badge from "./ui/Badge";

export default function Hero() {
  return (
    <section className="py-5" style={{ background: 'var(--gray-25)' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* 🔹 Brand Badge */}
              <div className="d-flex justify-content-center mb-4">
                <Badge variant="primary" size="md">
                  ✨ Танд хамгийн ойр, шилдэг мэргэжилтнүүд
                </Badge>
              </div>

              {/* 🔹 Fluid Heading */}
              <h1 className="text-h1 mb-3">
                Мэргэжлийн эмч, эмнэлгийг <br />
                <span className="text-primary-500">хялбараар олж захиалаарай</span>
              </h1>

              {/* 🔹 Fluid Lead Text */}
              <p className="text-body-lg text-gray-600 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                Таны эрүүл мэндийн хөтөч. 300+ гаруй эмнэлэг, 1000+ мэргэжлийн эмч нарыг нэг дороос хайж, цаг захиалгаа баталгаажуулна уу.
              </p>

              {/* 🔹 Refactored Search Focus */}
              <div className="mb-5">
                <SearchBar />
              </div>

              {/* 🔹 Trust Indicators */}
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 text-gray-500">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-success-500 fw-bold fs-5">✓</span>
                  <span className="text-body-sm fw-medium">300+ Эмнэлэг</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-success-500 fw-bold fs-5">✓</span>
                  <span className="text-body-sm fw-medium">1000+ Эмч</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-warning-500 fw-bold fs-5">★</span>
                  <span className="text-body-sm fw-medium">4.9 Хэрэглэгчийн үнэлгээ</span>
                </div>
              </div>

              {/* 🔹 Partner Logos Overlay */}
              <div className="mt-5 pt-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <PartnerLogos />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
