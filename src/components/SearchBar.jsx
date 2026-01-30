import React, { useState } from "react";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { FiSearch, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import Input from "./ui/Input";

const mockResults = [
  { id: 1, name: "Ulaanbaatar Central Hospital", type: "Эмнэлэг", location: "Ulaanbaatar", logo: "🏥" },
  { id: 2, name: "Zorig Clinic", type: "Шүдний эмнэлэг", location: "Bayanzurkh", logo: "🦷" },
  { id: 3, name: "Health Partner", type: "Гэр бүлийн эмнэлэг", location: "Sukhbaatar", logo: "👨‍⚕️" },
  { id: 4, name: "Eren Hospital", type: "Олон улсын эмнэлэг", location: "Songinokhairkhan", logo: "🌍" },
];

const categories = [
  {
    title: "Түгээмэл мэргэжлүүд",
    items: ["Өрхийн эмч", "Эх барих эмэгтэйчүүдийн эмч", "Арьс судлаач", "Шүдний эмч", "Чих хамар хоолой", "Нүдний эмч", "Сэтгэцийн эмч"]
  },
  {
    title: "Бусад мэргэжлүүд",
    items: ["Бариа засалч", "Харшлын эмч", "Сонсголын эмч", "Зүрхний эмч", "Зүрх цээжний мэс засалч", "Нугасны эмч", "Гэдэсний мэс засалч", "Шүдний эмч", "Арьс судлаач", "Хоол зүйч"]
  }
];

import { createPortal } from "react-dom";

const MobileSearchOverlay = ({ isOpen, onClose, query, setQuery }) => {
  if (!isOpen) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-white z-[9999] flex flex-col"
      style={{ isolation: "isolate" }} // Ensure new stacking context
    >
      {/* Header */}
      <div className="p-4 flex justify-end">
        <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600">
          <FiX size={24} />
        </button>
      </div>

      {/* Title */}
      <div className="px-5 mb-4">
        <h2 className="text-xl font-bold text-gray-900">Та юу хайж байна вэ?</h2>
      </div>

      {/* Styled Input */}
      <div className="px-5 mb-6">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            autoFocus
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-700 text-lg"
            placeholder="Өвчин, эмчилгээ эсвэл эмчийн нэр"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto px-5 pb-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{cat.title}</h3>
            <div className="flex flex-col">
              {cat.items.map((item, i) => (
                <button
                  key={i}
                  className="text-left py-3 text-gray-700 text-base border-b border-gray-100 last:border-0 hover:text-blue-600 transition-colors"
                  onClick={() => {
                    setQuery(item);
                    onClose();
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>,
    document.body
  );
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  const handleSearch = () => {
    alert(`Хайлт: ${query}, Байршил: ${location}`);
    setShowSuggestions(false);
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
    <>
      <div className={`search-island-wrapper`}>
        <div className="search-inner-wrapper d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-0">

          {/* 🔍 Search Input Wrapper (50%) */}
          <div className="search-input-section flex-grow-1">
            <Input
              placeholder="Мэргэжил, нэр, үйлчилгээ"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                if (window.innerWidth < 768) {
                  setShowMobileOverlay(true);
                  document.activeElement.blur();
                } else {
                  setShowSuggestions(true);
                }
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="search-main-input border-0 shadow-none ps-0"
              containerClassName="mb-0 w-100"
              style={{ fontSize: "1rem" }}
            />

            {showSuggestions && query.length > 0 && (
              <div className="position-absolute start-0 top-100 w-100 bg-white shadow-xl rounded-xl border border-gray-100 mt-3 z-3 overflow-hidden animate-fade-in" style={{ borderRadius: '24px' }}>
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

          {/* 📏 Divider */}
          <div className="d-none d-md-block" style={{ height: '30px', width: '1px', background: 'rgba(0,0,0,0.08)', margin: '0 1.5rem' }}></div>

          {/* 📍 Location Input Sub-Island (50%) */}
          <div className="location-section flex-grow-1 d-flex align-items-center">
            <div className="location-sub-island d-flex align-items-center w-100">
              <Input
                placeholder="Хаяг, дүүрэг, хот"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="location-inner-input border-0 shadow-none"
                containerClassName="mb-0 w-100"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>

          <button
            className="search-btn-primary ms-md-2"
            onClick={handleSearch}
            aria-label="Search"
          >
            <FiSearch size={18} className="search-btn-icon " style={{ color: 'black' }} />
            <span className="d-md-none fw-bold">Хайх</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMobileOverlay && (
          <MobileSearchOverlay
            isOpen={showMobileOverlay}
            onClose={() => setShowMobileOverlay(false)}
            query={query}
            setQuery={setQuery}
          />
        )}
      </AnimatePresence>
    </>
  );
}
