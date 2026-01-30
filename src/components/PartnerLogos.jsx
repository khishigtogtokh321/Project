import { Container } from "react-bootstrap";
import globalLogo from "../assets/logos/global_greyscale.png";
import gurvansorLogo from "../assets/logos/gurvansor_greyscale.png";
import niislelLogo from "../assets/logos/niislel_greyscale.png";
import premiumLogo from "../assets/logos/premiumedited1.png";
import prodentLogo from "../assets/logos/prodent-greyscale.png";
import uranlomboLogo from "../assets/logos/uranlombo-greyscale.png";

const logos = [
  globalLogo,
  gurvansorLogo,
  niislelLogo,
  premiumLogo,
  prodentLogo,
  uranlomboLogo,
];

export default function PartnerLogos({ variant = "default" }) {
  // Duplicate logos to ensure seamless scrolling
  const scrollLogos = [...logos, ...logos, ...logos];

  const isHero = variant === "hero";
  const sectionClass = isHero
    ? "py-3 overflow-hidden"
    : "py-4 border-bottom border-gray-100 bg-white overflow-hidden";

  const textClass = isHero
    ? "text-center text-label text-gray-400 mb-3 opacity-60 letter-spacing-wide"
    : "text-center text-label text-gray-400 mb-5 opacity-75 letter-spacing-wide";

  return (
    <section className={sectionClass}>
      <Container fluid>
        <p className={textClass} style={{ fontSize: isHero ? '0.7rem' : undefined }}>
          ТОП ЭМНЭЛГҮҮД БИДЭНТЭЙ ХАМТРАН АЖИЛЛАДАГ
        </p>

        <div className="logo-marquee opacity-60 grayscale-hover transition-all">
          <div className="logo-track">
            {scrollLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Partner Logo"
                className="img-fluid"
                style={{ maxHeight: isHero ? '24px' : '32px', filter: 'grayscale(100%)', opacity: 0.8, flexShrink: 0 }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
