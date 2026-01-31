import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiX, FiFilter, FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import Input from "./ui/Input";

const aimags = [
  "Архангай", "Баян-Өлгий", "Баянхонгор", "Булган", "Говь-Алтай",
  "Говьсүмбэр", "Дархан-Уул", "Дорнод", "Дорноговь", "Дундговь",
  "Завхан", "Орхон", "Өвөрхангай", "Өмнөговь", "Сүхбаатар",
  "Сэлэнгэ", "Төв", "Увс", "Ховд", "Хөвсгөл", "Хэнтий"
];

const mockResults = [
  { id: 1, name: "Интермед Эмнэлэг", logo: "🏥", city: "Улаанбаатар", district: "Хан-Уул" },
  { id: 2, name: "Грандмед Эмнэлэг", logo: "🏛️", city: "Улаанбаатар", district: "Хан-Уул" },
  { id: 3, name: "Сонгдо Эмнэлэг", logo: "🏥", city: "Улаанбаатар", district: "Чингэлтэй" },
  { id: 4, name: "Архангай Нэгдсэн Эмнэлэг", logo: "🏥", city: "Орон нутаг", province: "Архангай" },
  { id: 5, name: "Баян-Өлгий Оношилгоо Төв", logo: "🏛️", city: "Орон нутаг", province: "Баян-Өлгий" },
  { id: 6, name: "Баянхонгор Сувилал", logo: "🌿", city: "Орон нутаг", province: "Баянхонгор" },
  { id: 7, name: "Булган Төв Эмнэлэг", logo: "🏥", city: "Орон нутаг", province: "Булган" },
  { id: 8, name: "Говь-Алтай Нэгдсэн Эмнэлэг", logo: "🩹", city: "Орон нутаг", province: "Говь-Алтай" },
  { id: 9, name: "Говьсүмбэр Эмнэлэг", logo: "🏠", city: "Орон нутаг", province: "Говьсүмбэр" },
  { id: 10, name: "Дархан Нэгдсэн Эмнэлэг", logo: "🏥", city: "Орон нутаг", province: "Дархан-Уул" },
  { id: 11, name: "Дорнод Бүсийн Төв", logo: "🏛️", city: "Орон нутаг", province: "Дорнод" },
  { id: 12, name: "Дорноговь Оношилгоо", logo: "🔬", city: "Орон нутаг", province: "Дорноговь" },
  { id: 13, name: "Дундговь Эмнэлэг", logo: "🏥", city: "Орон нутаг", province: "Дундговь" },
  { id: 14, name: "Завхан Төв Эмнэлэг", logo: "🏛️", city: "Орон нутаг", province: "Завхан" },
  { id: 15, name: "Орхон Медипас Эмнэлэг", logo: "🥼", city: "Орон нутаг", province: "Орхон" },
  { id: 16, name: "Өвөрхангай Нэгдсэн", logo: "🏥", city: "Орон нутаг", province: "Өвөрхангай" },
  { id: 17, name: "Өмнөговь Тавантолгой Эмнэлэг", logo: "🏗️", city: "Орон нутаг", province: "Өмнөговь" },
  { id: 18, name: "Сүхбаатар Аймгийн Эмнэлэг", logo: "🏙️", city: "Орон нутаг", province: "Сүхбаатар" },
  { id: 19, name: "Сэлэнгэ Нэгдсэн Эмнэлэг", logo: "🏥", city: "Орон нутаг", province: "Сэлэнгэ" },
  { id: 20, name: "Төв Аймгийн Оношилгоо", logo: "🔬", city: "Орон нутаг", province: "Төв" },
  { id: 21, name: "Увс Баруун Тур Эмнэлэг", logo: "🏥", city: "Орон нутаг", province: "Увс" },
  { id: 22, name: "Ховд Бүсийн Төв Эмнэлэг", logo: "🏛️", city: "Орон нутаг", province: "Ховд" },
  { id: 23, name: "Хөвсгөл Далай Эмнэлэг", logo: "🌊", city: "Орон нутаг", province: "Хөвсгөл" },
  { id: 24, name: "Хэнтий Хаан Эмнэлэг", logo: "👑", city: "Орон нутаг", province: "Хэнтий" },
  { id: 25, name: "Улсын Нэгдүгээр Төв Эмнэлэг", logo: "🏥", city: "Улаанбаатар", district: "Сүхбаатар" },
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
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState('all'); // 'all', 'city', 'locality'
  const [selectedAimag, setSelectedAimag] = useState("Бүх аймаг");
  const [showAimagDropdown, setShowAimagDropdown] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 search-modal-container"
    >
      <div className="search-modal-header">
        <h2 className="search-modal-title">Эмнэлэг сонгох</h2>
        <button onClick={onClose} className="search-modal-close">
          <FiX size={28} />
        </button>
      </div>

      <div className="search-modal-search-row">
        <div className="search-modal-input-wrapper">
          <FiSearch className="search-modal-input-icon" size={20} />
          <input
            autoFocus
            type="text"
            className="search-modal-input"
            placeholder="Эмнэлэг хайх..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button
          onClick={() => setShowAimagDropdown(!showAimagDropdown)}
          className="search-modal-filter-btn"
        >
          <FiFilter size={24} />
        </button>

        {/* Aimag Dropdown Overlay */}
        <AnimatePresence>
          {showAimagDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="position-absolute end-0 top-100 mt-2 w-100 px-5"
              style={{ zIndex: 120, right: 0 }}
            >
              <div
                className="bg-white rounded-2xl p-3 shadow-2xl border border-gray-100 overflow-y-auto no-scrollbar"
                style={{ maxHeight: '320px', width: '100%' }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {["Бүх аймаг", ...aimags].map((aimag) => (
                    <button
                      key={aimag}
                      onClick={() => {
                        setSelectedAimag(aimag);
                        setFilterType('locality');
                        setShowAimagDropdown(false);
                      }}
                      className={`text-left px-3 py-2.5 rounded-xl text-[14px] transition-colors ${selectedAimag === aimag
                        ? 'bg-primary text-white fw-bold shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      {aimag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="search-modal-chips-container no-scrollbar">
        {[
          { id: 'all', label: 'Бүгд' },
          { id: 'city', label: 'Улаанбаатар' },
          { id: 'locality', label: 'Орон нутаг' },
        ].map((chip) => (
          <button
            key={chip.id}
            onClick={() => setFilterType(chip.id)}
            className={`search-modal-chip ${filterType === chip.id ? 'active' : ''}`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hospital-list-container no-scrollbar"
      >
        <div className="flex flex-col">
          {mockResults
            .filter(item => {
              const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
              if (filterType === 'all') return matchesQuery;
              if (filterType === 'city') return matchesQuery && item.city === 'Улаанбаатар';
              if (filterType === 'locality') {
                if (selectedAimag === "Бүх аймаг") return matchesQuery && item.city === 'Орон нутаг';
                return matchesQuery && item.province === selectedAimag;
              }
              return matchesQuery;
            })
            .map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setQuery("");
                  navigate("/emch-songoh", { state: { hospital: item } });
                  onClose();
                }}
                className="hospital-list-item"
              >
                <div className="hospital-item-logo-box">
                  {item.logo}
                </div>

                <div className="hospital-item-info">
                  <div className="hospital-item-name">
                    {item.name}
                  </div>
                  <div className="hospital-item-meta">
                    {item.city === 'Улаанбаатар' ? `${item.city}, ${item.district}` : `${item.province}`}
                  </div>
                </div>
              </button>
            ))}
        </div>
      </motion.div>
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
              placeholder="Эмнэлгийн нэрээр хайх"
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
                placeholder="Google map ашиглах"
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
            <FiSearch size={18} className="search-btn-icon " />
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
