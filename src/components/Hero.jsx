import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import TrustStats from "./TrustStats";
import PartnerLogos from "./PartnerLogos";

export default function Hero() {
  return (
    <section className="hero-refined d-flex flex-column align-items-center justify-content-center position-relative" style={{ minHeight: 'auto', paddingTop: '8rem', paddingBottom: '4rem' }}>
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
                Мэргэжлийн эмч эмнэлгийг <br />
                <span className="text-gradient-primary">хялбараар олж захиалаарай</span>
              </h1>

              {/* 🔹 Minimalist Lead Text */}
              {/* <p className="text-body-sm text-gray-400 mb-5 mx-auto d-none d-lg-block mt-4" style={{ maxWidth: '500px' }}>
                Таны эрүүл мэндийн хөтөч. Хамгийн шилдэг мэргэжилтнүүдээс сонгож цаг захиалгаа баталгаажуулна уу.
              </p> */}

              {/* 🔹 Centered Search Focus */}
              <div className="mb-2 px-1">
                <SearchBar />
              </div>
              <TrustStats variant="mini" />

            </motion.div>
          </Col>
        </Row>
      </Container>

    </section>
  );
}
