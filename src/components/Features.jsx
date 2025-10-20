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
  const opportunities = [
    { icon: <Settings size={36} color="blue" />, title: "High Resolution", text: "Crisp and detailed visuals for every screen size." },
    { icon: <Lightbulb  size={36} color="green" />, title: "Unique Design", text: "Fresh, innovative UI tailored to your brand." },
    { icon: <Monitor  size={36} color="black" />, title: "Full Responsive", text: "Optimized for desktops, tablets, and mobile devices." },
    { icon: <Code  size={36} color="yellow" />, title: "Clean Codes", text: "Organized, maintainable, and efficient code structure." },
    { icon: <Eye  size={36} color="brown" />, title: "Retina Ready", text: "High-density screen support for sharp display quality." },
    { icon: <Camera  size={36}  />, title: "Unlimited Features", text: "Expand functionality with limitless customization quality." },
  ];

  return (
    <div className="opportunity-section">
      <Container>
        <div className="text-center section-header">
          <h2 className="section-title">Awesome Opportunities</h2>
          <p className="section-subtitle">
            Discover the key advantages that make our platform powerful, flexible, and ready for the modern web.
          </p>
        </div>

        <Row>
          {opportunities.map((item, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="opportunity-box">
              <div className="opportunity-card">
                <div className="opportunity-icon">{item.icon}</div>
                <h5 className="opportunity-title">{item.title}</h5>
                <p className="opportunity-text">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
