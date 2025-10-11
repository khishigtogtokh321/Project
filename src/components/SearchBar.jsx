import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

import SearchCard from "./SearchCard";

const mockResults = [
  {
    id: 1,
    name: "Discret'Son - Laboratoire auditif",
    type: "Centre auditif",
    location: "Eaubonne",
    logo: "🔊",
  },
  {
    id: 2,
    name: "Krys Audition - La Châtre",
    type: "Centre auditif",
    location: "La Châtre",
    logo: "🎧",
  },
  {
    id: 3,
    name: "Krys Audition La Couronne - Cc Auchan",
    type: "Centre auditif",
    location: "La Couronne",
    logo: "🎧",
  },
  {
    id: 4,
    name: "Phonème - Saint-Lô - Germain Lebictel",
    type: "Audioprothésiste",
    location: "Saint-Lô",
    logo: "👤",
  },
  {
    id: 5,
    name: "Phonème - Paris 15 - Montparnasse",
    type: "Audioprothésiste",
    location: "Paris",
    logo: "👤",
  },
  {
    id: 6,
    name: "Audition Conseil - Tours",
    type: "Centre auditif",
    location: "Tours",
    logo: "🎧",
  },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () =>
      mockResults.filter((result) =>
        result.name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [query]
  );

  const handleNearMe = () => {
    if (!navigator.geolocation) {
      alert("Таны хөтчид байршлыг авах боломжгүй.");
      return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      console.log("User location:", lat, lng);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <div className="search-widget">
      <form
        className="search-box"
        role="search"
        aria-label="Эмч, эмнэлгийн хайлт"
        onSubmit={handleSubmit}
      >
        <div className="search-field">
          <label htmlFor="search-query" className="visually-hidden">
            Үйлчилгээ эсвэл эмчийн нэр
          </label>
          <input
            id="search-query"
            type="text"
            className="search-input"
            placeholder="Нэр / Үйлчилгээ"
            autoComplete="off"
            value={query}
            onFocus={() => setOpen(true)}
            onChange={(event) => setQuery(event.target.value)}
            aria-autocomplete="list"
            aria-expanded={open}
            aria-controls="search-dropdown"
          />
        </div>

        <span className="search-divider" aria-hidden="true" />

        <div className="search-field">
          <label htmlFor="search-location" className="visually-hidden">
            Байршлын хайлт
          </label>
          <input
            id="search-location"
            type="text"
            className="search-input search-input--location"
            placeholder="Эмнэлгийн хаяг"
          />
        </div>

        <div className="search-actions" aria-label="Туслах товчлуурууд">
          <Button
            type="button"
            variant="outline-primary"
            className="near-me-button"
            onClick={handleNearMe}
            aria-label="Ойр орчмын байршлаар хайх"
          >
            <FaLocationArrow aria-hidden="true" />
          </Button>
          <Button type="submit" className="search-btn">
            <FaSearch aria-hidden="true" />
            <span className="search-btn__label">Хайх</span>
          </Button>
        </div>
      </form>

      {open && (
        <div
          id="search-dropdown"
          className="dropdown-list"
          role="listbox"
          onMouseLeave={() => setOpen(false)}
        >
          {filtered.length === 0 ? (
            <div className="dropdown-empty" role="status">
              Тохирох үр дүн олдсонгүй
            </div>
          ) : (
            filtered.map((item) => (
              <SearchCard
                key={item.id}
                name={item.name}
                type={item.type}
                location={item.location}
                logo={item.logo}
                onSelect={() => {
                  setQuery(item.name);
                  setOpen(false);
                }}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
