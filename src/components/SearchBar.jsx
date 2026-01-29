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
    <div className={`search-island ${isMobileSearchActive ? 'mobile-search-active' : ''}`}>
      <div className="d-flex flex-column flex-md-row align-items-center gap-0">

        {/* 🔍 Search Input */}
        <div className="flex-grow-1 position-relative w-100">
          <Input
            placeholder="Эмч, эмнэлэг хайх..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
              if (window.innerWidth < 768) setIsMobileSearchActive(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            leftIcon={<FiSearch size={18} className="text-gray-400" />}
            className="border-0 focus:shadow-none bg-transparent ps-4"
            containerClassName="mb-0"
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
        <div className="input-group-divider d-none d-md-block mx-2"></div>

        {/* 📍 Location Input */}
        <div className="flex-grow-1 position-relative d-flex align-items-center w-100">
          <Input
            placeholder="Байршил"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            leftIcon={<FaMapMarkerAlt className="text-gray-400" />}
            className="border-0 focus:shadow-none bg-transparent ps-4"
            containerClassName="mb-0 flex-grow-1"
          />
          <button
            className="position-absolute end-0 me-2 btn btn-link p-2 text-primary-500 hover:bg-primary-50 rounded-circle transition-all border-0"
            onClick={handleNearMe}
            title="Миний байршил"
          >
            <FaLocationArrow size={12} />
          </button>
        </div>

        {/* 🚀 Search Action */}
        <Button
          variant="primary"
          className="rounded-full px-5 py-2-5 ms-0 ms-md-2 w-100 w-md-auto"
          onClick={handleSearch}
          style={{ background: '#000', color: '#fff' }} // Premium black button
        >
          Хайх
        </Button>
      </div>

      {isMobileSearchActive && (
        <div className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-white z-max p-4 animate-fade-in" style={{ zIndex: 1100 }}>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h4 className="text-h3 mb-0">Хайлт</h4>
            <button className="btn-close shadow-none" onClick={() => setIsMobileSearchActive(false)}></button>
          </div>

          <div className="d-flex flex-column gap-4">
            <Input
              autoFocus
              label="Юу хайх вэ?"
              placeholder="Мэргэжил, эмчийн нэр..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              leftIcon={<FiSearch />}
            />

            <Input
              label="Хаана?"
              placeholder="Байршил эсвэл дүүрэг..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              leftIcon={<FaMapMarkerAlt />}
            />

            <Button variant="primary" size="lg" className="w-100 mt-4 py-3" onClick={handleSearch} style={{ background: '#000' }}>
              Хайж эхлэх
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
