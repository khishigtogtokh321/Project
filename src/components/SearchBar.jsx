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
    <div >
    <div className="search-container">
      <div className="search-box ">
        <div className="search-field suggestion-field">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search by doctor, clinic or specialty..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          />
          {showSuggestions && (
            <div className="suggestion-dropdown fade-in">
              {filteredSuggestions.map((s) => (
                <div
                  key={s.id}
                  className="suggestion-item"
                  onClick={() => {
                    setQuery(s.name);
                    setShowSuggestions(false);
                  }}
                >
                  <span className="emoji">{s.logo}</span>
                  <div className="suggestion-info">
                    <strong>{s.name}</strong>
                    <small>{s.type} • {s.location}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="search-field location-field">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="City or district"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <FaLocationArrow className="near-icon" onClick={handleNearMe} />
        </div>
        <button className="search-btn" onClick={handleSearch}>
          <FaArrowRight />
        </button>
      </div>
    </div>
    </div>
  );
}
