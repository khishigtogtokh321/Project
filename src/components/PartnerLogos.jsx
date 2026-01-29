import React from "react";
import { Container } from "react-bootstrap";

const partners = [
    { name: "Intermed Hospital", logo: "🏥" },
    { name: "SOS Medica", logo: "🚑" },
    { name: "Central Hospital", logo: "🏢" },
    { name: "Grand Med", logo: "🏥" },
    { name: "Songdo", logo: "🏢" },
    { name: "Ulaanbaatar Clinic", logo: "🏥" },
    { name: "Reflex Clinic", logo: "🦷" },
    { name: "Healthy Smiles", logo: "🦷" },
];

export default function PartnerLogos() {
    // Duplicate the array for seamless scrolling
    const list = [...partners, ...partners];

    return (
        <div className="partner-slider py-4 mt-5 bg-white shadow-sm rounded-4 overflow-hidden border">
            <div className="text-center mb-3">
                <small className="text-muted fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
                    Хамтран ажилладаг байгууллагууд
                </small>
            </div>
            <div className="logo-track-container">
                <div className="logo-track">
                    {list.map((p, i) => (
                        <div key={i} className="logo-item d-flex align-items-center gap-2 px-5">
                            <span className="fs-3">{p.logo}</span>
                            <span className="fw-bold text-navy text-nowrap" style={{ fontSize: '0.9rem' }}>{p.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .logo-track-container {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .logo-track {
          display: flex;
          width: calc(250px * ${list.length});
          animation: scroll 30s linear infinite;
        }
        .logo-item {
          flex: 0 0 auto;
          width: 250px;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * ${partners.length})); }
        }
      `}</style>
        </div>
    );
}
