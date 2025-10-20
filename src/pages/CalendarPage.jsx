import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { mn } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarLabel from "../components/CalendarLabel";

// ---- Localizer ----
const locales = { mn };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

// ---- Responsive Custom Toolbar ----
function CustomToolbar({ onNavigate, onView }) {
  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 p-2 border-bottom"
      style={{ backgroundColor: "#f8f9fa", borderRadius: "6px" }}
    >
      {/* Navigation */}
      <div className="mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
        <Button variant="outline-secondary" size="sm" onClick={() => onNavigate("PREV")}>
          Өмнөх
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          className="ms-2"
          onClick={() => onNavigate("TODAY")}
        >
          Өнөөдөр
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          className="ms-2"
          onClick={() => onNavigate("NEXT")}
        >
          Дараах
        </Button>
      </div>

      {/* View buttons */}
      <div className="d-flex justify-content-center flex-wrap">
        <Button
          variant="outline-primary"
          size="sm"
          className="me-1 mb-1"
          onClick={() => onView("month")}
        >
          Сар
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="me-1 mb-1"
          onClick={() => onView("week")}
        >
          7 хоног
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="mb-1"
          onClick={() => onView("day")}
        >
          Өдөр
        </Button>
      </div>
    </div>
  );
}

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [calendarLabel, setCalendarLabel] = useState(format(new Date(), "MMMM yyyy"));

  const events = [
    {
      title: "30 минутын уулзалт",
      start: new Date(2025, 8, 18, 9, 30),
      end: new Date(2025, 8, 18, 10, 0),
    },
  ];

  const messages = {
    allDay: "Өдөр бүр",
    previous: "Өмнөх",
    next: "Дараах",
    today: "Өнөөдөр",
    month: "Сар",
    week: "7 хоног",
    day: "Өдөр",
    agenda: "Жагсаалт",
  };

  const times = ["9:30 am", "10:00 am", "10:30 am", "11:00 am"];

  return (
    <Container className="p-4" style={{ maxWidth: "1200px" }}>
      {/* Гол label-г тусдаа харуулах */}
      {/* Desktop: CalendarLabel дээр гарна */}
      <div className="d-none d-md-block">
        <CalendarLabel label={calendarLabel} />
      </div>

      <Row className="g-3">
        {/* Зүүн тал */}
        <Col xs={12} md={2}>
          <Card className="p-3 shadow-sm h-100">
            <h6 className="text-muted">Ц. Батгаа</h6>
            <h4>30 минут</h4>
            <p className="text-muted mb-1">
              Товлосон цаг <br />
              9-8, 2025 <br /> 11:00 am
            </p>
            <input type="text" placeholder="address" className="form-control" />
          </Card>
        </Col>

        {/* Mobile/Tablet: Calendar-д дотор */}
        <div className="d-block d-md-none text-center mb-2">
          <h4 className="fw-bold">{calendarLabel}</h4>
        </div>

        {/* Calendar */}
        <Col xs={12} md={8}>
          <Card className="p-3 shadow-sm h-100">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              culture="mn"
              style={{ height: 600 }}
              selectable
              onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)}
              onNavigate={(date) => setCalendarLabel(format(date, "MMMM yyyy"))}
              messages={messages}
              defaultView="month"
              views={["month", "week", "day"]}
              components={{
                toolbar: CustomToolbar,
              }}
            />
          </Card>
        </Col>

        {/* Баруун тал */}
        <Col xs={12} md={2}>
          <Card className="p-3 shadow-sm h-100">
            <h6>
              {selectedDate.toLocaleDateString("mn-MN", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </h6>
            <div className="mb-2 d-flex justify-content-end">
              <Button variant="outline-secondary" size="sm">
                12
              </Button>
              <Button variant="outline-secondary" size="sm" className="ms-2">
                24
              </Button>
            </div>
            {times.map((time, idx) => (
              <Button
                key={idx}
                variant={selectedTime === time ? "primary" : "light"}
                className="d-block mb-2 w-100"
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
