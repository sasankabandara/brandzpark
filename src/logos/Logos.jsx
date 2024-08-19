import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from '../imgs/blink.png';
import logo2 from '../imgs/roft.png';
import logo3 from '../imgs/mini.png';
import logo4 from '../imgs/turner.png';
import logo5 from '../imgs/newage.png';
import './Logos.css';

const Logos = () => {
  return (
    <div className="logos-container mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={4} sm={4} md={2} className="logo-col">
            <img src={logo1} alt="Logo 1" className="logo-img" />
          </Col>
          <Col xs={4} sm={4} md={2} className="logo-col">
            <img src={logo2} alt="Logo 2" className="logo-img" />
          </Col>
          <Col xs={4} sm={4} md={2} className="logo-col">
            <img src={logo3} alt="Logo 3" className="logo-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="logo-col">
            <img src={logo4} alt="Logo 4" className="logo-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="logo-col">
            <img src={logo5} alt="Logo 5" className="logo-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Logos;
