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
    <section className="py-6 bg-gray-50 position-relative overflow-hidden">
      <Container>
        <div className="text-center mb-5">
          <h2 className="text-h2 mb-2">Хялбар 3 алхам</h2>
          <p className="text-body text-gray-500">Таны эрүүл мэндийн үйлчилгээ авах үе шат</p>
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

                  <div className="text-body-xs text-primary-500 fw-bold mb-2">
                    Алхам 0{s.id}
                  </div>

                  <h3 className="text-h3 mb-2" style={{ fontSize: '1.125rem' }}>
                    {s.title}
                  </h3>

                  <p className="text-body-sm text-gray-600 mb-0">
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
