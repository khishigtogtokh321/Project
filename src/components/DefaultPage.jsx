import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const quickLinks = [
  {
    key: "find-specialist",
    label: "Find a specialist",
    to: "/emch-songoh",
  },
  {
    key: "live-video",
    label: "Live chat with a doctor",
    to: "/booking",
  },
  {
    key: "ask-specialists",
    label: "Ask our specialists",
    to: "/tsag-awaltiin-medeelel",
  },
];

const featureCards = [
  {
    key: "live-video",
    title: "Connect live via video",
    description:
      "The care you need, when you need it most. Get instant medical advice via video.",
    buttonText: "Start a video call",
    to: "/booking",
    theme: "teal",
  },
  {
    key: "ask-specialists",
    title: "Ask our specialists",
    description:
      "Discover a safe space for your health questions. Ask anonymously, get trusted answers, and see what others are asking.",
    buttonText: "Ask your question now",
    to: "/tsag-awaltiin-medeelel",
    theme: "magenta",
  },
  {
    key: "find-specialist",
    title: "Find a specialist",
    description:
      "Browse curated experts across disciplines and book the one that fits you best—no referrals required.",
    buttonText: "Browse specialists",
    to: "/emch-songoh",
    theme: "indigo",
  },
];

export default function DefaultPage() {
  const location = useLocation();

  const renderAccent = (cardKey) => {
    switch (cardKey) {
      case "live-video":
        return (
          <>
            <span className="feature-card__ring feature-card__ring--video-primary" />
            <span className="feature-card__ring feature-card__ring--video-secondary" />
            <span className="feature-card__device feature-card__device--video" />
            <span className="feature-card__dot feature-card__dot--video-one" />
            <span className="feature-card__dot feature-card__dot--video-two" />
          </>
        );
      case "ask-specialists":
        return (
          <>
            <span className="feature-card__ring feature-card__ring--ask-primary" />
            <span className="feature-card__ring feature-card__ring--ask-secondary" />
            <span className="feature-card__card feature-card__card--question" />
            <span className="feature-card__card feature-card__card--answer" />
            <span className="feature-card__dot feature-card__dot--ask" />
          </>
        );
      case "find-specialist":
        return (
          <>
            <span className="feature-card__ring feature-card__ring--find-primary" />
            <span className="feature-card__ring feature-card__ring--find-secondary" />
            <span className="feature-card__tile feature-card__tile--profile" />
            <span className="feature-card__tile feature-card__tile--profile-secondary" />
            <span className="feature-card__badge feature-card__badge--star" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="default-page">
      <Container className="default-page__container">
        <section className="default-hero" aria-labelledby="default-hero-heading">
          <h1 id="default-hero-heading" className="default-hero__title">
            DO MORE FOR YOU
          </h1>
          <p className="default-hero__subtitle">
            Choose the way you want to get care today and we will take care of the
            rest.
          </p>
        </section>

        <nav className="default-pill-nav" aria-label="Quick actions">
          {quickLinks.map(({ key, label, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={key}
                to={to}
                className={`default-pill ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <section className="feature-grid" aria-label="Featured services">
          {featureCards.map(({ key, title, description, buttonText, to, theme }) => (
            <article
              key={key}
              className={`feature-card feature-card--${key}`}
              data-theme={theme}
            >
              <div className="feature-card__inner">
                <h2 className="feature-card__title">{title}</h2>
                <p className="feature-card__description">{description}</p>
                <Link to={to} className="feature-card__cta">
                  {buttonText}
                </Link>
              </div>
              <div
                className={`feature-card__art feature-card__art--${key}`}
                aria-hidden="true"
              >
                {renderAccent(key)}
              </div>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
