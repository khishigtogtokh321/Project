// src/components/WhyChooseUsV2.jsx
import { Container, Row, Col } from "react-bootstrap";
import { FaClock, FaShieldAlt, FaLaptopMedical, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  { icon: <FaClock size={26} />, title: "24/7 үйлчилгээ", text: "Онлайн цагийн хуваарь үргэлж нээлттэй." },
  { icon: <FaShieldAlt size={26} />, title: "Аюулгүй байдал", text: "Мэдээлэл тань шифрлэлтээр хамгаалагдана." },
  { icon: <FaLaptopMedical size={26} />, title: "Дэвшилтэт систем", text: "AI туслах оношилгоо-дэмжлэгтэй." },
  { icon: <FaUserCheck size={26} />, title: "Хялбар хэрэглээ", text: "3 алхмаар цаг авах энгийн урсгал." },
];

export default function WhyChooseUs() {
  return (
    <Container fluid className="py-6 text-white hp-dark position-relative">
      <h2 className="text-center text-h2 text-white mb-5">Яагаад биднийг сонгох вэ?</h2>

      {/* connecting line */}
      <div className="position-absolute start-0 end-0" style={{ top: "58%", height: 2, background: "rgba(255,255,255,0.2)" }} />

      <Row className="justify-content-center text-center gy-4">
        {reasons.map((r, i) => (
          <Col lg={2} md={3} sm={6} key={r.title}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="hp-glass text-white border-0 rounded-4 p-4"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div className="hp-icon mx-auto mb-3" style={{ background: "rgba(255,255,255,0.15)" }}>
                <span aria-hidden>{r.icon}</span>
              </div>
              <h6 className="fw-bold">{r.title}</h6>
              <p className="small text-light mb-0">{r.text}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
