import { Container, Row, Col } from "react-bootstrap";
import { FaSearch, FaUserMd, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import searchBg from "../assets/bg-search.jpg";
import doctorBg from "../assets/appointment-bg.png";
import confirmBg from "../assets/bg.jpg";

export default function HowToBook() {
  const steps = [
    {
      id: 1,
      title: "Хайлт хийх",
      text: "Өөрт тохирох эмч, эмнэлгийг нэр эсвэл байршлаар хайна.",
      icon: <FaSearch size={28} className="text-primary" />,
      bg: searchBg,
      accent: "#0B63F6",
    },
    {
      id: 2,
      title: "Эмч сонгох",
      text: "Үзлэгийн төрөл, үнэлгээ, туршлага дээр үндэслэн эмчээ сонгоно.",
      icon: <FaUserMd size={28} className="text-success" />,
      bg: doctorBg,
      accent: "#28A745",
    },
    {
      id: 3,
      title: "Цаг баталгаажуулах",
      text: "Тохирох өдрөө сонгож, онлайн баталгаажуулна.",
      icon: <FaCalendarCheck size={28} className="text-info" />,
      bg: confirmBg,
      accent: "#17A2B8",
    },
  ];

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-navy h4">Хялбар 3 алхам</h2>
          <p className="text-muted small">Таны эрүүл мэндийн үйлчилгээ авах үе шат</p>
        </div>

        <Row className="g-4 justify-content-center">
          {steps.map((s, i) => (
            <Col xs={12} md={4} key={s.id}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-4 p-4 h-100 bg-white shadow-sm border"
                style={{ borderColor: '#f1f5f9' }}
              >
                <div className="d-flex flex-column align-items-center text-center">
                  <div
                    className="rounded-circle mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: `${s.accent}08`,
                      color: s.accent,
                      fontSize: '1.25rem',
                      border: `1px solid ${s.accent}12`
                    }}
                  >
                    {s.icon}
                  </div>

                  <div className="text-primary fw-bold small text-uppercase mb-2" style={{ letterSpacing: '1px', fontSize: '0.65rem' }}>
                    Алхам 0{s.id}
                  </div>

                  <h5 className="fw-bold text-navy mb-2" style={{ fontSize: '0.95rem' }}>
                    {s.title}
                  </h5>

                  <p className="text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                    {s.text}
                  </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
