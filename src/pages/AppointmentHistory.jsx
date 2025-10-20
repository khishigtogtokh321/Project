import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Spinner } from "react-bootstrap";
import { FaUserMd, FaCalendarAlt, FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";


export default function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data — backend холболтын оронд түр
    setTimeout(() => {
      setAppointments([
        {
          id: 1,
          doctor: "Др. Бат-Эрдэнэ",
          department: "Дотор эмчилгээ",
          date: "2025-10-12",
          time: "14:30",
          status: "Баталгаажсан",
          image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
        },
        {
          id: 2,
          doctor: "Др. Энхбаяр",
          department: "Шүдний эмч",
          date: "2025-10-05",
          time: "10:00",
          status: "Цуцлагдсан",
          image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
        },
        {
          id: 3,
          doctor: "Др. Наран",
          department: "Арьсны эмч",
          date: "2025-09-28",
          time: "16:00",
          status: "Хийгдсэн",
          image: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container className="history-container py-5 fade-in">
      <h2 className="text-center mb-4 text-primary fw-bold">
        Миний цаг авалтын түүх
      </h2>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : appointments.length === 0 ? (
        <p className="text-center text-muted">Та одоогоор цаг авсан түүхгүй байна.</p>
      ) : (
        <Row className="g-4">
          {appointments.map((a) => (
            <Col md={6} lg={4} key={a.id}>
              <Card className="appointment-card shadow-sm border-0">
                <div className="doctor-img-wrapper">
                  <img src={a.image} alt={a.doctor} className="doctor-img" />
                </div>

                <Card.Body className="text-center">
                  <h5 className="fw-bold mb-1 text-navy">
                    <FaUserMd className="me-2 text-primary" />
                    {a.doctor}
                  </h5>
                  <p className="text-muted mb-3">{a.department}</p>

                  <div className="d-flex justify-content-center gap-3 mb-3">
                    <span className="d-flex align-items-center text-muted">
                      <FaCalendarAlt className="me-1 text-sky" />
                      {a.date}
                    </span>
                    <span className="d-flex align-items-center text-muted">
                      <FaClock className="me-1 text-sky" />
                      {a.time}
                    </span>
                  </div>

                  <Badge
                    pill
                    bg={
                      a.status === "Баталгаажсан"
                        ? "success"
                        : a.status === "Цуцлагдсан"
                        ? "danger"
                        : "secondary"
                    }
                    className="px-4 py-2 status-badge"
                  >
                    {a.status === "Баталгаажсан" && <FaCheckCircle className="me-2" />}
                    {a.status === "Цуцлагдсан" && <FaTimesCircle className="me-2" />}
                    {a.status}
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
