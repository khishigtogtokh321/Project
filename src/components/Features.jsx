import { Col, Container, Row } from "react-bootstrap";
import { BsCalendar2Check } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { MdOutlineAppSettingsAlt, MdOutlineNotificationsActive } from "react-icons/md";

const features = [
  {
    title: "Хаанаас ч цаг авах",
    description:
      "Аливаа төхөөрөмжөөс эмч, үйлчилгээний төрөл бүрийн цагаас сонгон захиалаарай.",
    icon: <BsCalendar2Check />,
    align: "left",
  },
  {
    title: "Давтамжтай захиалга",
    description:
      "Давтагдах үйлчилгээний хуваарь гаргаж, автоматаар сануулга илгээж цаг алдахгүй.",
    icon: <FaCity />,
    align: "right",
  },
  {
    title: "Хэрэглэгчийн апп",
    description:
      "Үйлчлүүлэгч бүр өөрийн захиалга, төлбөр, түүхээ нэг дороос хянах боломжтой.",
    icon: <MdOutlineAppSettingsAlt />,
    align: "left",
  },
  {
    title: "Сануулга",
    description:
      "SMS болон апп доторх сануулгаар үйлчлүүлэгчдэдээ цаг алдалгүй мэдээлэл хүргээрэй.",
    icon: <MdOutlineNotificationsActive />,
    align: "right",
  },
];

export default function Features() {
  return (
    <section className="features-section py-5">
      <Container>
        <h2 className="features-title fw-bold text-center">
          Манай <span>боломжууд</span>
        </h2>
        <div className="features-grid">
          {features.map((feature) => (
            <Row
              key={feature.title}
              className={`feature-row align-items-center g-4 feature-row--${feature.align}`}
            >
              <Col lg={5} className="feature-copy">
                <h3 className="feature-heading">{feature.title}</h3>
                <p className="text-muted mb-0">{feature.description}</p>
              </Col>
              <Col lg={4} className="feature-icon-col text-center">
                <span className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}
