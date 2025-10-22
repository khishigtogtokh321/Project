import React, { useEffect, useState } from "react";

function MicroGuide() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Page load-оос 1 секундийн дараа fade-in
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        fontSize: "1rem",
        color: "#6b7280",
        marginTop: "1rem",
      }}
    >
       Хайлт эхлүүлэхийн тулд доорх талбарт эмнэлгийн нэр эсвэл байршил оруулна уу.
    </p>
  );
}

export default MicroGuide;
