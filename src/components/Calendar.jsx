import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState(["9:30am", "10:00am"]);

  // Жишээ сар
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Container fluid className="p-4">
      <Row>
        {/* Left - Doctor Info */}
        <Col md={3} className="border-end">
          <h5>Ц. Батаа</h5>
          <p><strong>30 Min Meeting</strong></p>
          <p>Former time</p>
          <p>Monday, September 8, 2025 11:00 am</p>
          <p>30m</p>
          <Form.Control type="text" placeholder="address" className="mt-2" />
        </Col>

        {/* Center - Calendar */}
        <Col md={6} className="border-end text-center">
          <h6>September</h6>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            {days.map((day) => (
              <Button
                key={day}
                size="sm"
                variant={selectedDate === day ? "primary" : "light"}
                onClick={() => setSelectedDate(day)}
              >
                {day}
              </Button>
            ))}
          </div>
        </Col>

        {/* Right - Available times */}
        <Col md={3}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className="mb-0">Mon 8</p>
            <div>
              <Button size="sm" variant="secondary" className="me-1">12</Button>
              <Button size="sm" variant="secondary">24</Button>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            {availableTimes.map((time, idx) => (
              <Button key={idx} variant="light" disabled>{time}</Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
