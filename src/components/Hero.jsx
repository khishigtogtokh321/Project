import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import TrustStats from "./TrustStats";

export default function Hero() {
  return (
    <section className="hero-refined d-flex flex-column position-relative" style={{ minHeight: 'auto', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <Container className="position-relative z-1">
        <Row className="justify-content-start text-start justify-content-lg-center text-lg-center">
          <Col lg={10} xl={9}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 🔹 Punchy Headline (Zocdoc Style) */}
              <h1 className="text-h1 mb-4 mx-auto" style={{ maxWidth: '800px' }}>
                Мэргэжлийн эмч эмнэлгийг хялбараар олж захиалаарай
              </h1>

              {/* 🔹 Centered Search Focus */}
              <div className="mb-5 mt-3 px-1">
                <SearchBar />
              </div>
              <TrustStats variant="mini" />

            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* 🔮 Background Decorative Elements */}
      <div className="hero-blobs-container">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="hero-blob blob-1"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="hero-blob blob-2"
        />
      </div>

    </section>
  );
}
