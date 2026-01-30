import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Button from "./ui/Button";
import Input from "./ui/Input";

const mockResults = [
  { id: 1, name: "Ulaanbaatar Central Hospital", type: "Эмнэлэг", location: "Ulaanbaatar", logo: "🏥" },
  { id: 2, name: "Zorig Clinic", type: "Шүдний эмнэлэг", location: "Bayanzurkh", logo: "🦷" },
  { id: 3, name: "Health Partner", type: "Гэр бүлийн эмнэлэг", location: "Sukhbaatar", logo: "👨‍⚕️" },
  { id: 4, name: "Eren Hospital", type: "Олон улсын эмнэлэг", location: "Songinokhairkhan", logo: "🌍" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

  const handleSearch = () => {
    alert(`Хайлт: ${query}, Байршил: ${location}`);
    setShowSuggestions(false);
    setIsMobileSearchActive(false);
  };

  const handleNearMe = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation(`Миний байршил`),
      () => { }
    );
  };

  const filteredSuggestions = mockResults.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={`search-island-wrapper`}>
      <div className="search-inner-wrapper d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-0">

        {/* 🔍 Search Input Wrapper (50%) */}
        <div className="search-input-section">
          <Input
            placeholder="Specialty, name, service"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="search-main-input border-0 shadow-none ps-0 ps-md-2"
            containerClassName="mb-0 w-100"
          />

          {showSuggestions && query.length > 0 && (
            <div className="position-absolute start-0 top-100 w-100 bg-white shadow-xl rounded-xl border border-gray-100 mt-3 z-3 overflow-hidden animate-fade-in">
              {filteredSuggestions.map(s => (
                <div
                  key={s.id}
                  className="p-3 d-flex align-items-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setQuery(s.name)}
                >
                  <span className="fs-5">{s.logo}</span>
                  <div>
                    <div className="fw-semibold text-navy-900 fs-body-sm">{s.name}</div>
                    <div className="text-gray-500" style={{ fontSize: '0.75rem' }}>{s.type} • {s.location}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        {/* <div className="input-group-divider d-none d-md-block"></div> */}

        {/* 📍 Location Input Sub-Island (50%) */}
        <div className="location-section d-flex align-items-center">
          <div className="location-sub-island d-flex align-items-center w-100">
            <Input
              placeholder="Address, area, city"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="location-inner-input border-0 shadow-none"
              containerClassName="mb-0 w-100"
              style={{ fontSize: "0.9rem" }}
            />
          </div>
        </div>

        <button
          className="search-btn-primary ms-md-2"
          onClick={handleSearch}
          aria-label="Search"
        >
          <FiSearch size={20} className="search-btn-icon" />
          <span className="d-md-none fw-bold">Хайх</span>
        </button>
      </div>

    </div>
  );
}
