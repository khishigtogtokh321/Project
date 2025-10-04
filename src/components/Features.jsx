import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCity,
  FaUserTie,
  FaLock
} from "react-icons/fa";
import { BsCalendar2Check } from 'react-icons/bs';
import { MdOutlineAppSettingsAlt } from 'react-icons/md';
import { MdOutlineNotificationsActive } from 'react-icons/md';

const Features = () => {
  return (
    <section className="py-4 features-section" style={{maxHeight: '1300px'}}>
      <h2 className="fw-bold text-align-center " style={{color: '#B697FF', textAlign: 'center', marginBottom: '90px'}}  >Манай <span>боломжууд</span></h2>
      <Container >
        
        {/* 1 */}
        <Row className="features-left align-items-center mb-5 ">
          <Col  md={{ span: 4, offset: 3 }}>
            <h4 className="fw-bold" >Хаанаас ч цаг авах</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <BsCalendar2Check className="feature-icon" />
          </Col>
        </Row>

        {/* 2 */}
        <Row className="features-right align-items-center mb-5 justify-content-center flex-row-reverse">
          <Col  md={4}>
            <h4 className="fw-bold"  >Давтамжтай захиалга</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <FaCity className="feature-icon" />
          </Col>
        </Row>

        {/* 3 */}
        <Row className="features-left align-items-center  mb-5">
          <Col  md={{ span: 4, offset: 3 }}>
            <h4 className="fw-bold"  >Хэрэглэгчийн апп</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <MdOutlineAppSettingsAlt className="feature-icon" />
          </Col>
        </Row>

        {/* 4 */}
        <Row className="features-right align-items-center justify-content-center mb-5 flex-row-reverse">
          <Col md={4}>
            <h4 className="fw-bold"  >Сануулга</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <MdOutlineNotificationsActive className="feature-icon" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
