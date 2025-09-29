// src/components/Features.jsx
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaLaptop,
  FaBell,
  FaUsers,
  FaSync,
  FaMobileAlt,
  FaUserFriends
} from "react-icons/fa";

const FEATURES_MN = [
  {
    id: 1,
    icon: <FaLaptop size={44} />,
    title: "Хаанаас ч цаг авах",
    text: "Your own mobile-optimised booking website",
    extraText: "Or integration with your existing site, Facebook, Instagram, Google, or branded client app",
  },
  {
    id: 2,
    icon: <FaBell size={44} />,
    title: "Сануулга",
    text: "Имэйл, мессеж болон Telegram-р дамжуулан сануулга илгээнэ."
  },
  {
    id: 3,
    icon: <FaUsers size={44} />,
    title: "Сэтгэгдэл",
    text: "Систем автоматаар хэрэглэгчийн санал хүсэлтийг хүлээн авна."
  },
  {
    id: 4,
    icon: <FaSync size={44} />,
    title: "Давтамжтай захиалга",
    text: "Давтамжтай цаг авах боломжийг хялбар болгодог."
  },
  {
    id: 5,
    icon: <FaMobileAlt size={44} />,
    title: "Хэрэглэгчийн апп",
    text: "Цагийг шинээр авах, өөрчлөх, эсвэл цуцлах боломжтой."
  },
  {
    id: 6,
    icon: <FaUserFriends size={44} />,
    title: "Бүлгээр цаг авах",
    text: "Бүхэл бүтэн бүлэг хамтдаа цаг авах боломжтой."
  }
];

function Features() {
  const [hoveredIds, setHoveredIds] = useState([]);

  const toggleHover = (id, isEnter) => {
    if (isEnter) {
      setHoveredIds((prev) => [...prev, id]);
    } else {
      setHoveredIds((prev) => prev.filter((x) => x !== id));
    }
  };



  return (
    <Container className="my-4">
      {/* Section Title */}
      <h2 className="text-center mb-5">
        Манай <span className="accent">боломжууд</span>
      </h2>

      {/* Features Grid */}
      <Row>
        {FEATURES_MN.map((f) => {
          const isHovered = hoveredIds.includes(f.id);
          return (
            <Col key={f.id} md={4} sm={6} className="mb-4">
              <div
                className="feature-card text-center p-3"
                onMouseEnter={() => toggleHover(f.id, true)}
                onMouseLeave={() => toggleHover(f.id, false)}
              >
                <div className="icon-wrap mb-2" style={{ transition: "all 0.3s" }}>
                  {f.icon}
                </div>
                <h5>{f.title}</h5>
                <p className="text-muted mb-0">{f.text}</p>
                {isHovered && f.extraText && (
                  <p className="text-muted mt-0 color-primary" >{f.extraText}</p>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Features;
