import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaLocationArrow, FaArrowRight } from "react-icons/fa";
import Button from "./ui/Button";
import Input from "./ui/Input";

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
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = () => {
    alert(`Хайлт: ${query}, Байршил: ${location}`);
    setShowSuggestions(false);
  };

  const handleNearMe = () => {
    if (!navigator.geolocation) {
      alert("Таны хөтөч байршил авах боломжгүй байна.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(`Миний байршил (${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)})`);
      },
      () => alert("Байршил авахад алдаа гарлаа")
    );
  };

  const filteredSuggestions = mockResults.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar-container bg-white rounded-xl shadow-md p-1 border border-gray-100">
      <div className="d-flex flex-column flex-md-row align-items-stretch gap-1">

        {/* 🔍 Search Input */}
        <div className="flex-grow-1 position-relative">
          <Input
            placeholder="Эмч, эмнэлэг хайх..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            leftIcon={<FaSearch />}
            className="border-0 focus:shadow-none"
            containerClassName="mb-0"
          />

          {showSuggestions && (
            <div className="position-absolute start-0 top-100 w-100 bg-white shadow-lg rounded-lg border mt-2 z-3 overflow-hidden">
              {filteredSuggestions.map(s => (
                <div
                  key={s.id}
                  className="p-3 d-flex align-items-center gap-3 hover:bg-gray-50 cursor-pointer border-bottom last:border-0"
                  onClick={() => setQuery(s.name)}
                >
                  <span className="fs-4">{s.logo}</span>
                  <div>
                    <div className="fw-bold text-navy-900">{s.name}</div>
                    <div className="text-body-xs">{s.type} • {s.location}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 📍 Location Input */}
        <div className="flex-grow-1 position-relative d-flex align-items-center">
          <Input
            placeholder="Байршил"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            leftIcon={<FaMapMarkerAlt />}
            className="border-0 focus:shadow-none"
            containerClassName="mb-0 flex-grow-1"
          />
          <div
            className="position-absolute end-0 me-3 text-primary-500 cursor-pointer p-2 hover:bg-primary-50 rounded-circle transition-all"
            onClick={handleNearMe}
          >
            <FaLocationArrow size={14} />
          </div>
        </div>

        {/* 🚀 Search Action */}
        <Button
          variant="primary"
          className="rounded-lg px-4 py-2"
          onClick={handleSearch}
          rightIcon={<FaArrowRight />}
        >
          Хайх
        </Button>
      </div>

      <style>{`
        .search-bar-container .last\\:border-0:last-child { border-bottom: 0; }
        .search-bar-container .hover\\:bg-gray-50:hover { background-color: var(--gray-50); }
      `}</style>
    </div>
  );
}
