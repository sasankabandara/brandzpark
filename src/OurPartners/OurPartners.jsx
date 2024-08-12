import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sundry from "../imgs/sundry.png";
import ginny from "../imgs/ginny.png";
import publlicnotary from "../imgs/publicnotary.png";
import wink from "../imgs/wink.png";
import kandid from "../imgs/kandid.png";
import neeis from "../imgs/neeis.png";
import g from "../imgs/g.png";
import penton from "../imgs/benton.png";
import gang from "../imgs/gang.png";
import roco from "../imgs/roco.png";
import "./OurPartners.css";

const OurPartners = () => {
  return (
    <div className="partners-container">
      <Container>
        <h2 className="partners-title">
          Our Partners<span className="asterisk">*</span>
        </h2>
        <Row className="justify-content-center">
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={sundry} alt="Sundry Logo" className="partner-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={ginny} alt="Ginny Logo" className="partner-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img
              src={publlicnotary}
              alt="Public Notary Logo"
              className="partner-img"
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={wink} alt="Wink Logo" className="partner-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={kandid} alt="Kandid Logo" className="partner-img" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={neeis} alt="Neeis Logo" className="partner-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={g} alt="G Logo" className="partner-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={penton} alt="Penton Logo" className="partner-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={gang} alt="Gang Logo" className="partner-img" />
          </Col>
          <Col xs={6} sm={4} md={2} className="partner-col">
            <img src={roco} alt="Roco Logo" className="partner-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurPartners;
