import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import { FiCheckCircle, FiStar } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero-refined d-flex align-items-center" style={{ minHeight: '75vh' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 🔹 Punchy Headline */}
              <h1 className="text-h1 mb-3">
                Мэргэжлийн эмч, эмнэлгийг <br />
                <span className="text-primary-500">хялбараар олж захиалаарай</span>
              </h1>

              {/* 🔹 Minimalist Lead Text (Desktop Only, Small) */}
              <p className="text-body-sm text-gray-400 mb-5 mx-auto d-none d-lg-block" style={{ maxWidth: '500px' }}>
                Таны эрүүл мэндийн хөтөч. Хамгийн шилдэг мэргэжилтнүүдээс сонгож цаг захиалгаа баталгаажуулна уу.
              </p>

              {/* 🔹 Centered Search Focus */}
              <div className="mb-5 px-1">
                <SearchBar />
              </div>

              {/* 🔹 Clean Trust Indicators (Subtle) */}
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 text-gray-400 opacity-60">
                <div className="d-flex align-items-center gap-2">
                  <FiCheckCircle size={14} className="text-success-400" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>300+ Эмнэлэг</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FiCheckCircle size={14} className="text-success-400" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>1000+ Мэргэжилтэн</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FiStar size={14} className="text-warning-400" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>4.8/5 Сэтгэл ханамж</span>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
