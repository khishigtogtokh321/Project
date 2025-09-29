import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import {mn} from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { isToday, nextDay, previousDay } from "date-fns";


const locales = {
  "mn": mn,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // Жишээ events
  const events = [
    {
      title: "30 уулзалт",
      start: new Date(2025, 8, 18, 9, 30),
      end: new Date(2025, 8, 18, 10, 30),
    },
  ];

  const locales = { mn: mn };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  const messages = {
    allDay: "Өдөр бүр",
    previous: "Өчигдөр",
    next: "Маргааш",
    today: "Өнөөдөр",
    month: "Сар",
    week: "Долоо хоног",
    day: "Өдөр",
    agenda: "Жагсаалт",
  };

  const times = ["9:30 am", "10:00 am"];

  return (
    <Container  className="p-4" style={{ maxWidth: "1200px" }}>
      <Row className="g-3">
      
        <Col md={2}>
          <Card className="p-3 shadow-sm h-100">
            <h6 className="text-muted">Ц. Батгаа</h6>
            <h4>30 минут </h4>
            <p className="text-muted mb-1">
              Товлосон цаг <br />
              9-8, 2025 <br /> 11:00 am
            </p>
            <p className="fw-bold">30минут</p>
            <input
              type="text"
              placeholder="address"
              className="form-control"
            />
          </Card>
        </Col>

        {/* Дунд Calendar */}
        <Col md={8}>
          <Card className="p-3 shadow-sm h-100">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              culture="mn"
              style={{
                height: 600,
                maxWidth: '1600px',
                }}
              selectable
              onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)}
              messages={messages}
              defaultView="month"
              views={['month', 'week', 'day']} 
              components={{ toolbar: null }} 
            />
          </Card>
        </Col>

        {/* Баруун талын Time slots */}
        <Col md={2}>
          <Card className="p-3 shadow-sm h-100">
            <h6>
              {selectedDate.toLocaleDateString("en-US", {
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
