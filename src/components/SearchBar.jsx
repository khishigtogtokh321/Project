import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaArrowRight,
  FaUserMd,
} from "react-icons/fa";


const mockResults = [
  { id: 1, name: "Ulaanbaatar Central Hospital", type: "Эмнэлэг", location: "Ulaanbaatar", logo: "🏥" },
  { id: 2, name: "Zorig Clinic", type: "Шүдний эмнэлэг", location: "Bayanzurkh", logo: "🦷" },
  { id: 3, name: "Health Partner", type: "Гэр бүлийн эмнэлэг", location: "Sukhbaatar", logo: "👨‍⚕️" },
  { id: 4, name: "Eren Hospital", type: "Олон улсын эмнэлэг", location: "Songinokhairkhan", logo: "🌍" },
  { id: 5, name: "Grand Med Hospital", type: "Мэс заслын төв", location: "Ulaanbaatar", logo: "💉" },
  { id: 6, name: "Songdo Hospital", type: "Олон улсын эмнэлэг", location: "Bayangol", logo: "🌐" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  const handleSearch = () => {
    const filtered = mockResults.filter(
      (r) =>
        r.name.toLowerCase().includes(query.toLowerCase()) &&
        r.location.toLowerCase().includes(location.toLowerCase())
    );
    setResults(filtered);
    setShowSuggestions(false);
  };

  const handleNearMe = () => {
    if (!navigator.geolocation) {
      alert("Таны хөтөч байршил авах боломжгүй байна.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(4);
        const lng = pos.coords.longitude.toFixed(4);
        setLocation(`Current location (Lat: ${lat}, Lng: ${lng})`);
        alert(`📍 Байршил тодорхойлогдлоо!\nLat: ${lat}, Lng: ${lng}`);
      },
      () => alert("Байршил авахад алдаа гарлаа 😢")
    );
  };

  const filteredSuggestions = mockResults.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar-wrapper w-100">
      <div className="d-flex flex-column flex-md-row align-items-stretch gap-0 bg-white rounded-4 overflow-hidden border-0">
        {/* 🔹 Query Field */}
        <div className="flex-grow-1 position-relative d-flex align-items-center px-3 py-2 border-bottom border-md-bottom-0 border-md-end" style={{ minWidth: '0' }}>
          <FaSearch className="text-muted me-2 opacity-50" />
          <input
            type="text"
            placeholder="Эмч, эмнэлэг хайх..."
            className="border-0 w-100 py-2 outline-none fw-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            style={{ fontSize: '1rem', outline: 'none', boxShadow: 'none' }}
          />

          {showSuggestions && (
            <div className="suggestion-dropdown position-absolute start-0 top-100 w-100 bg-white shadow-lg rounded-bottom-4 border-top z-3 fade-in overflow-hidden">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((s) => (
                  <div
                    key={s.id}
                    className="suggestion-item d-flex align-items-center gap-3 p-3 border-bottom-0 hover-bg-light cursor-pointer transition-all"
                    onClick={() => {
                      setQuery(s.name);
                      setShowSuggestions(false);
                    }}
                    style={{ transition: 'background 0.2s' }}
                  >
                    <span className="fs-4">{s.logo}</span>
                    <div className="suggestion-info overflow-hidden">
                      <div className="text-dark fw-bold text-truncate">{s.name}</div>
                      <div className="text-muted small text-truncate">{s.type} • {s.location}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-muted small text-center">Илэрц олдсонгүй</div>
              )}
            </div>
          )}
        </div>

        {/* 🔹 Location Field */}
        <div className="flex-grow-1 d-flex align-items-center px-3 py-2 border-bottom border-md-bottom-0" style={{ minWidth: '0' }}>
          <FaMapMarkerAlt className="text-muted me-2 opacity-50" />
          <input
            type="text"
            placeholder="Байршил"
            className="border-0 w-100 py-2 outline-none fw-medium"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ fontSize: '1rem', outline: 'none', boxShadow: 'none' }}
          />
          <FaLocationArrow
            className="text-primary cursor-pointer opacity-75 hover-opacity-100 ms-2"
            onClick={handleNearMe}
            title="Миний байршил"
          />
        </div>

        {/* 🔹 Search Button */}
        <button
          className="search-submit-btn bg-primary text-white border-0 px-4 py-3 d-flex align-items-center justify-content-center transition-all"
          onClick={handleSearch}
          style={{ minWidth: '100px', fontWeight: '600' }}
        >
          <span className="d-md-none me-2">Хайх</span>
          <FaArrowRight />
        </button>
      </div>

      <style>{`
        .search-bar-wrapper .hover-bg-light:hover {
          background-color: #f8fbff;
        }
        .search-bar-wrapper input::placeholder {
          color: #adb5bd;
          font-weight: 400;
        }
        @media (max-width: 767.98px) {
          .border-md-end { border-right: none !important; }
          .border-md-bottom-0 { border-bottom: 0 !important; }
        }
      `}</style>
    </div>
  );
}
