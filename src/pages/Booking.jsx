import { Container, Col } from "react-bootstrap";
import DoctorList from "../components/DoctorList";
import BookingSearch from "../components/BookingSearch";
import SearchBar from "../components/SearchBar";

export default function Booking() {
  
  return (
    <>
      <Container className="my-4">
        <Col md={10}  className="d-flex justify-content-center align-items-center"
        style={{ height: '150px', position: 'relative', bottom: '30px', left: '50px' }}>
         
         <SearchBar  />
        </Col>
        <Col style={{ marginTop: '-40px'}}>
         <hr style={{maxWidth : '1230px', position: 'relative', left : '40px'}} />
         <DoctorList />
        </Col>
       
      </Container>
    </>
  );
}
