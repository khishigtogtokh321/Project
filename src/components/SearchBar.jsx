import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaSearch , FaMapMarkerAlt } from "react-icons/fa";
// import { FaLocationArrow } from 'react-icons/fa6';
import { FaSearch, FaMapMarkerAlt, FaLocationArrow, FaArrowRight } from "react-icons/fa";

import React, { useState } from "react";


// const mockResults = [
//   {
//     id: 1,
//     name: "Discret'Son - Laboratoire auditif",
//     type: "Centre auditif",
//     location: "Eaubonne",
//     logo: "🔊",
//   },
//   {
//     id: 2,
//     name: "Krys Audition - La Châtre",
//     type: "Centre auditif",
//     location: "La Châtre",
//     logo: "🎧",
//   },
//   {
//     id: 3,
//     name: "Krys Audition La Couronne - Cc Auchan",
//     type: "Centre auditif",
//     location: "La Couronne",
//     logo: "🎧",
//   },
//   {
//     id: 4,
//     name: "Phonème - Saint-Lô - Germain Lebictel",
//     type: "Audioprothésiste",
//     location: "Saint-Lô",
//     logo: "👤",
//   },
//    {
//     id: 5,
//     name: "Phonème - Saint-Lô - Germain Lebictel",
//     type: "Audioprothésiste",
//     location: "Saint-Lô",
//     logo: "👤",
//   },
//    {
//     id: 6,
//     name: "Phonème - Saint-Lô - Germain Lebictel",
//     type: "Audioprothésiste",
//     location: "Saint-Lô",
//     logo: "👤",
//   },
//    {
//     id: 7,
//     name: "Phonème - Saint-Lô - Germain Lebictel",
//     type: "Audioprothésiste",
//     location: "Saint-Lô",
//     logo: "👤",
//   },
// ];


export default function SearchBar() {

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  // const filtered = mockResults.filter((r) => 
  //    r.name.toLowerCase().includes(query.toLowerCase())
  // );

  // const handleNearMe = () => {
  //   if (!navigator.geolocation) return alert("Таны хөтчид байршлыг авах боломжгүй.");
  //      navigator.geolocation.getCurrentPosition((pos) => {
  //       const lat = pos.coords.latitude;
  //       const lng = pos.coords.longitude;
  //       console.log("User location:", lat, lng);
  //   // Ойролцоох эмнэлэг хайх логик энд
  //     });
  //   };

  return (
    <div className="search-container">
      <div className="search-box">
        {/* 1️⃣ Service Name Input */}
        <div className="search-field">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Name, specialty, practice"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* 2️⃣ Location Input */}
        <div className="search-field">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="Where?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* 3️⃣ Near Me */}
        <button className="near-me-btn">
          <FaLocationArrow className="icon" />
          <span>NEAR ME</span>
        </button>

        {/* 4️⃣ Search Button */}
        <button className="search-btn">
          Search <FaArrowRight />
        </button>
      </div>
    </div>
  );
};


