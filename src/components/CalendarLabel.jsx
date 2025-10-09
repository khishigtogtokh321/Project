import React from "react";

// ✅ Гол label-г тусдаа компонент болгосон
export default function CalendarLabel({ label }) {
  return (
    <div className="mb-3 text-center">
      <h4 className="fw-bold">{label}</h4>
    </div>
  );
}
