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
        <Container className="logos-container">
      <Row>
        <Col xs={6} md={4} lg={2} className="logo-col">
          <img src={logo1} alt="Logo1" className="logo-img" />
        </Col>
        <Col xs={6} md={4} lg={2} className="logo-col">
          <img src={logo2} alt="Logo2" className="logo-img" />
        </Col>
        <Col xs={6} md={4} lg={2} className="logo-col">
          <img src={logo3} alt="Logo3" className="logo-img" />
        </Col>
        <Col xs={6} md={4} lg={2} className="logo-col">
          <img src={logo4} alt="Logo 4" className="logo-img" />
        </Col>
        <Col xs={6} md={4} lg={2} className="logo-col">
          <img src={logo5} alt="Logo 5" className="logo-img" />
        </Col>
      </Row>
    </Container>
    );
  };

export default Logos;
