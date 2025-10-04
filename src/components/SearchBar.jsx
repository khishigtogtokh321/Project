import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch , FaMapMarkerAlt } from "react-icons/fa";
import { FaLocationArrow } from 'react-icons/fa6';

import React, { useState } from "react";


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
    name: "Phonème - Saint-Lô - Germain Lebictel",
    type: "Audioprothésiste",
    location: "Saint-Lô",
    logo: "👤",
  },
   {
    id: 6,
    name: "Phonème - Saint-Lô - Germain Lebictel",
    type: "Audioprothésiste",
    location: "Saint-Lô",
    logo: "👤",
  },
   {
    id: 7,
    name: "Phonème - Saint-Lô - Germain Lebictel",
    type: "Audioprothésiste",
    location: "Saint-Lô",
    logo: "👤",
  },
];


export default function SearchBar() {

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = mockResults.filter((r) => 
     r.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleNearMe = () => {
    if (!navigator.geolocation) return alert("Таны хөтчид байршлыг авах боломжгүй.");
       navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        console.log("User location:", lat, lng);
    // Ойролцоох эмнэлэг хайх логик энд
      });
    };

  return (
    <div className="app-container">
      <div className="search-section" >
        <div className="search-box">
          <input
            type="text"
            className="form-control"
            placeholder="Нэр / Үйлчилгээ "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setOpen(true)}
          />
           <span className="divider"></span>

          <input
            type="text"
            className="form-control where-input"
            placeholder="Эмнэлгийн хаяг"
           
          />
          
          <div md="auto" className="near-me d-flex ">
            <Button variant="outline-primary "  onClick={handleNearMe} >
              <FaLocationArrow  /> 
            </Button>
          </div>
          <button className="search-btn">
              <FaSearch />
          </button>
        </div>
        {open && (
          <div 
            className="dropdown-list" 
            onMouseLeave={() => setOpen(false)}  
          >
            {filtered.length === 0 ? (
              <div className="dropdown-empty">No results</div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className="dropdown-item"
                  onMouseDown={() => {
                    setQuery(item.name);
                    setOpen(false);
                  }}
                >
                  <img src="src/assets/ashidLogo.png" className="item-logo" />
                  <div className="item-text">
                    <div className="item-title">{item.name}</div>
                    <div className="item-sub">
                      {item.type} - {item.location}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      
    </div>
  );
};


