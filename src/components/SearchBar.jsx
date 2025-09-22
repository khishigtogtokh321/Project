import { useState } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Жишээ 300 эмнэлэг
  const allClinics = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Эмнэлэг ${i + 1}`,
    desc: "Имплант болон ерөнхий шүдний үйлчилгээтэй",
  }));

  const handleSearch = () => {
    setResults(allClinics);
    setShowDropdown(true);
  };

  const handleSelect = (clinic) => {
    setKeyword(clinic.name);
    setShowDropdown(false);
  };

  return (
    <div className="container my-5 position-relative">
      <div className="row g-2 justify-content-center align-items-center">
        {/* Keyword input */}
        <div className="col-md-5 col-sm-12 position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="эмнэлэг, мэргэжил"
            value={keyword}
            onFocus={handleSearch} // Фокус авахад dropdown гарна
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* Location input */}
        <div className="col-md-5 col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="Байршил"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <div className="col-md-2 col-sm-12 d-grid">
          <button
            type="button"
            onClick={handleSearch}
            className="btn btn-primary"
          >
            Хайх
          </button>
        </div>
      </div>

      {/* Dropdown - бүхэл container өргөнөөр */}
      {showDropdown && (
        <div
          className="position-absolute bg-white border rounded shadow mt-2"
          style={{
            width: "100%", // бүх container-ийн өргөн
            maxHeight: "250px",
            overflowY: "auto",
            zIndex: 1000,
          }}
          onMouseLeave={() => setShowDropdown(false)} // Хулганаа гаргахад хаагдана
        >
          {results.map((clinic) => (
            <div
              key={clinic.id}
              className="p-2 list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelect(clinic)}
            >
              <strong>{clinic.name}</strong>
              <br />
              <small className="text-muted">{clinic.desc}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
