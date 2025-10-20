import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Container className="auth-container">
      <Card className="auth-card shadow-lg border-0">
        {/* Tab header */}
        <div className="auth-tabs d-flex justify-content-between mb-3">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Нэвтрэх
          </button>
          <button
            className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Бүртгүүлэх
          </button>
        </div>

        {/* Login form */}
        {activeTab === "login" ? (
          <Form className="auth-form">
            <h4 className="text-center mb-4 text-primary fw-bold">Нэвтрэх</h4>

            <Form.Group className="mb-3 position-relative">
              <FaEnvelope className="input-icon" />
              <Form.Control type="email" placeholder="Имэйл хаяг" required />
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <FaLock className="input-icon" />
              <Form.Control type="password" placeholder="Нууц үг" required />
            </Form.Group>

            <Button type="submit" className="w-100 btn-gradient">
              Нэвтрэх
            </Button>
          </Form>
        ) : (
          <Form className="auth-form">
            <h4 className="text-center mb-4 text-primary fw-bold">Бүртгүүлэх</h4>

            <Form.Group className="mb-3 position-relative">
              <FaUser className="input-icon" />
              <Form.Control type="text" placeholder="Бүтэн нэр" required />
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <FaEnvelope className="input-icon" />
              <Form.Control type="email" placeholder="Имэйл хаяг" required />
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <FaLock className="input-icon" />
              <Form.Control type="password" placeholder="Нууц үг" required />
            </Form.Group>

            <Button type="submit" className="w-100 btn-gradient">
              Бүртгүүлэх
            </Button>
          </Form>
        )}
      </Card>
    </Container>
  );
}