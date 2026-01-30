import React from "react";
import { Container } from "react-bootstrap";
import globalLogo from "../assets/logos/global_greyscale.png";
import gurvansorLogo from "../assets/logos/gurvansor_greyscale.png";
import niislelLogo from "../assets/logos/niislel_greyscale.png";
import premiumLogo from "../assets/logos/premiumedited1.png";
import prodentLogo from "../assets/logos/prodent-greyscale.png";
import uranlomboLogo from "../assets/logos/uranlombo-greyscale.png";

const partnerLogos = [
  { id: 1, src: globalLogo, alt: "Global" },
  { id: 2, src: gurvansorLogo, alt: "Gurvan Sor" },
  { id: 3, src: niislelLogo, alt: "Niislel" },
  { id: 4, src: premiumLogo, alt: "Premium" },
  { id: 5, src: prodentLogo, alt: "ProDent" },
  { id: 6, src: uranlomboLogo, alt: "Uran Lombo" },
];

export default function PartnerLogos() {
  // Triple the logos for a smoother infinite scroll effect
  const scrollLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="partner-logos-section py-5 overflow-hidden">
      <Container>
        <div className="partner-logos-header text-center mb-5">
          <p className="text-overline mb-2">БИДЭНТЭЙ ХАМТРАН АЖИЛЛАДАГ ЭМНЭЛГҮҮД</p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
          <div className="marquee-content">
            {scrollLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="partner-logo-card">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="partner-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
