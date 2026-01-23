// src/components/FeaturesSectionV2.jsx
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserMd, FaHospital, FaComments, FaStethoscope } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaStethoscope size={28} />, title: "Онлайн цаг захиалга", text: "Танд тохирох эмчийг 3 секундэд олно." },
  { icon: <FaUserMd size={28} />, title: "Мэргэжлийн баг", text: "250+ туршлагатай эмч, сувилагч." },
  { icon: <FaHospital size={28} />, title: "Баталгаат эмнэлэг", text: "Албан ёсны зөвшөөрөлтэй байгууллагууд." },
  { icon: <FaComments size={28} />, title: "24/7 Chat & Support", text: "Асуултад тань шуурхай хариулна." },
];

export default function FeaturesSection() {
  return (
    <Container className="py-5 text-center">
      <h2 className="fw-bold mb-4 text-primary hp-underline">Бид юу санал болгодог вэ</h2>
      <Row className="gy-4">
        {features.map((f, i) => (
          <Col lg={3} md={6} key={f.title}>
            <motion.div
              initial={{opacity:0, y:18}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once:true, amount:0.2 }}
              transition={{ duration:0.35, delay:i*0.05 }}
            >
              <Card
                className={`rounded-4 p-4 border-0 h-100 ${i===0 ? "hp-glass" : "shadow-sm"}`}
                style={i===0 ? { outline: "1px solid rgba(0,102,255,0.15)" } : {}}
              >
                <div className="hp-icon mx-auto mb-3 text-primary">{f.icon}</div>
                <h5 className="fw-bold">{f.title}</h5>
                <p className="text-muted small mb-0">{f.text}</p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
