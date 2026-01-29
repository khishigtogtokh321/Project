import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { motion } from "framer-motion";
import HowToBook from "./HowToBook";
import SearchCard from "./SearchCard";
import MicroGuide from "./MicroGuide";
import PartnerLogos from "./PartnerLogos";

export default function Hero() {

  const [keyword, _setKeyword] = useState("");
  const [location, _setLocation] = useState("");

  const _handleSearch = (e) => {
    e.preventDefault();
    alert(`Хайлт: ${keyword}, Байршил: ${location}`);
  };

  return (
    <div className="discovery-hub" style={{
      background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)',
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* 🔹 Mini Badge */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-10 text-primary small fw-bold mb-4">
                <span className="fs-6">✨</span> Таны эрүүл мэндийн хөтөч
              </div>

              {/* 🔹 Refined Heading (Smaller, better composition) */}
              <h1 className="fw-bold mb-3" style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                lineHeight: 1.2,
                color: '#0a1d37',
                letterSpacing: '-0.01em'
              }}>
                Мэргэжлийн эмч, эмнэлгийг <br />
                <span className="text-primary">хялбараар олж захиалаарай</span>
              </h1>

              <p className="text-muted mb-5 mx-auto opacity-75" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                Танд хамгийн ойр, шилдэг мэргэжилтнүүдийг нэг дороос.
              </p>

              {/* 🔹 Main Search Focus */}
              <div className="search-focus-container mb-4 shadow-sm rounded-4 p-1 bg-white border">
                <SearchBar />
              </div>

              {/* 🔹 Partner Logos (Subtle integration) */}
              <div className="mt-2 opacity-80" style={{ transform: 'scale(0.95)' }}>
                <PartnerLogos />
              </div>

              {/* 🔹 Trust Indicator */}
              <div className="mt-5 d-flex justify-content-center align-items-center gap-4 text-muted small fw-medium">
                <span className="d-flex align-items-center gap-1">✅ 300+ Эмнэлэг</span>
                <span className="d-flex align-items-center gap-1">👨‍⚕️ 1000+ Эмч</span>
                <span className="d-flex align-items-center gap-1">⭐ 4.9 Үнэлгээ</span>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
