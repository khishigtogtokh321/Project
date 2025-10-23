import { Container, Col } from "react-bootstrap";

import EmnelgiinMedeelel from "../components/EmnelegMedeelel";

export default function Booking() {
  
  return (
    <>
    <EmnelgiinMedeelel />
      <Container className="my-4">
      
        <Col md={10}  className="d-none justify-content-center align-items-center"
        style={{ height: '150px', position: 'relative', bottom: '20px', left: '50px' }}>
        </Col>
      
       
      </Container>
    </>
  );
}
