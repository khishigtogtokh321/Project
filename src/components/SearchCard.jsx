import { useState, useRef } from "react";
import { Container } from "react-bootstrap";

const quickLinks = [
  { key: "name", label: "Search by name", target: "name" },
  { key: "location", label: "Search by location", target: "location" },
  { key: "near", label: "Near me", target: "near" },
];

export default function ServiceCard() {
  const [activeKey, setActiveKey] = useState(null); // null = эффект унтарсан (анхны байдал)

  // Хэрэв карт руу “анх очих”-ыг хүсвэл ref авч scroll хийж болно, одоо бол ХИЙХГҮЙ.
  const nameRef = useRef(null);
  const locationRef = useRef(null);
  const nearRef = useRef(null);

  const btnClick = (target) => {
    setActiveKey((prev) => (prev === target ? null : target)); // дахин дарвал reset
  };

  const cardState = (id) => {
    if (!activeKey) return "none";
    return activeKey === id ? "active" : "inactive";
  };

  return (
    <div className="default-page">
      <Container className="py-5">
        {/* Quick actions */}
        <nav className="default-pill-nav" aria-label="Quick actions">
          {quickLinks.map(({ key, label, target }) => (
            <button
              key={key}
              type="button"
              onClick={() => btnClick(target)}
              className={`default-pill ${activeKey === target ? "active" : ""}`}
              aria-pressed={activeKey === target ? "true" : "false"}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Feature cards */}
        <section className="feature-grid" aria-label="Featured services">
          {/* NAME */}
          <article
            id="name"
            ref={nameRef}
            className="feature-card feature-card--primary"
            data-theme="ocean"
            data-active={cardState("name")}
          >
            <div className="feature-card__body">
              <span className="feature-card__eyebrow">Search by name</span>
              <h2 className="feature-card__title">Эмнэлгийг нэрээр нь хайх</h2>
              <p className="feature-card__description">
                Жишээ: “Intermed”, “Грандмед”, “Songdo”…
              </p>
            </div>
            <div className="feature-card__illustration" aria-hidden="true" />
           
          </article>

          {/* LOCATION */}
          <article
            id="location"
            ref={locationRef}
            className="feature-card feature-card--secondary"
            data-theme="plum"
            data-active={cardState("location")}
          >
            <div className="feature-card__body">
              <span className="feature-card__eyebrow">Search by location</span>
              <h2 className="feature-card__title">Эмнэлгийг байршлаар хайх</h2>
              <p className="feature-card__description">
                Жишээ: “Сүхбаатар”, “Баянзүрх”, “Дархан”…
              </p>
            </div>
            
          </article>

          {/* NEAR ME */}
          <article
            id="near"
            ref={nearRef}
            className="feature-card feature-card--secondary"
            data-theme="sunrise"
            data-active={cardState("near")}
          >
            <div className="feature-card__body">
              <span className="feature-card__eyebrow">Near me</span>
              <h2 className="feature-card__title">Ойрхон эмнэлгүүд</h2>
              <p className="feature-card__description">
                Таны одоогийн байршлаас хамгийн ойрыг харуулна.
              </p>
            </div>
           
          </article>
        </section>
      </Container>
    </div>
  );
}
