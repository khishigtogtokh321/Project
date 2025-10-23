import { Container, Row, Col } from "react-bootstrap";
import {
  Settings,
  Lightbulb,
  Monitor,
  Code,
  Eye,
  Camera,
} from "lucide-react";


export default function Features() {
  const features = [
    { icon: <Settings size={38} />, title: "Precision Interface", text: "Clean visuals that scale perfectly on every device." },
    { icon: <Lightbulb size={38} />, title: "Smart Design", text: "Simple, modern, and purpose-driven layouts." },
    { icon: <Monitor size={38} />, title: "Responsive by Nature", text: "Seamlessly adapts to screens of all sizes." },
    { icon: <Code size={38} />, title: "Optimized Code", text: "Lightweight structure built for performance." },
    { icon: <Eye size={38} />, title: "Retina Display", text: "Crisp and detailed visuals on high-resolution screens." },
    { icon: <Camera size={38} />, title: "Expandable", text: "Add new modules without breaking the balance." },
  ];

  return (
    <section className="py-5 ">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-semibold mb-2 feature-heading">
            Thoughtfully <span className="text-primary">Minimal</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "580px" }}>
            Less noise, more clarity — designed for focus, balance, and simplicity.
          </p>
        </div>

        <Row className="g-4">
          {features.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} md={4}>
              <div className="feature-card-minimal text-center p-4 h-100">
                <div className="icon-minimal mx-auto mb-3">{item.icon}</div>
                <h6 className="fw-semibold mb-2">{item.title}</h6>
                <p className="text-secondary small">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
