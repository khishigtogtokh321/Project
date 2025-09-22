import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Register Data:", formData);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} lg={5}>
          <Card className="shadow-lg p-4 rounded-4">
            <h3 className="text-center mb-2">Бүртгүүлэх</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-1">
                <Form.Label>Овог</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Овгоо оруулна уу"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Нэр</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Нэрээ оруулна уу"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email оруулна уу"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Утас</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Утасны дугаараа оруулна уу"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Хүйс</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Эр"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Эм"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Нууц үг</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Нууц үг оруулна уу"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Нууц үг баталгаажуулах</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Дахин нууц үг оруулна уу"
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between mt-4">
                <Button variant="secondary" type="button" >
                  <a href="/uilcluulegciin-medeelel" style={{textDecoration: 'none', color: '#fff'}}> Буцах</a>
                </Button>
                <Button variant="primary" type="submit">
                  Бүртгүүлэх
                </Button>
              </div>

              <p className="text-center mt-3">
                Бүртгэлтэй юу? <Link to={"/login"}>Нэвтрэх</Link> 
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
