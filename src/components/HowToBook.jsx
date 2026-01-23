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
          <h2 className="fw-bold text-dark">How it works</h2>
          <p className="text-muted">3 алхмаар цаг авах үйл явц</p>
        </div>

        <Row className="g-4 justify-content-center">
          {steps.map((s) => (
            <Col xs={12} md={4} key={s.id}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="how-step-card rounded-4 position-relative overflow-hidden shadow-sm p-4 text-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.25) 100%), url(${s.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  minHeight: "260px",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100">
                  {/* 🔹 Icon circle */}
                  <div
                    className="rounded-circle mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: 56,
                      height: 56,
                      backgroundColor: `${s.accent}20`, // soft transparent accent
                      boxShadow: `0 0 10px ${s.accent}40`,
                    }}
                  >
                    {s.icon}
                  </div>

                  {/* 🔹 Step number */}
                  <small
                    className="fw-semibold mb-1"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    0{s.id}
                  </small>

                  {/* 🔹 Title */}
                  <h4
                    className="fw-bold mb-2"
                    style={{ color: "#ffffff", letterSpacing: "0.5px" }}
                  >
                    {s.title}
                  </h4>

                  {/* 🔹 Text */}
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
                      color: "rgba(255,255,255,0.85)",
                      maxWidth: "85%",
                    }}
                  >
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
