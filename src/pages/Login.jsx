import { Container, Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <Container className="py-5" style={{maxWidth:"400px"}}>
      <h3>Нэвтрэх</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Имэйл</Form.Label>
          <Form.Control type="email" placeholder="name@example.com"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Нууц үг</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Button variant="primary" className="w-100">Нэвтрэх</Button>
      </Form>
    </Container>
  );
}
