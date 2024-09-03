import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Banner/banner.css";

const Banner = () => {
  return (
    <div>
      <NavBar />
      <div
        className="banner-background vh-100 d-flex justify-content-center align-items-center text-white"
        style={{ backgroundImage: "url(/assets/banner1.jpeg)" }}
      >
        <Container className="p-4 banner-container">
          <Row className="align-items-center">
            <Col md={6} className="text-left">
              <div className="cont">
                <h1 className="display-4 text-left banner-title single-line-mobile">
                  Let's
                  <br />
                  <span style={{ color: "#E6320F" }}>Spark</span>
                  Your
                </h1>
                <h1 className="display-4 text-left banner-title"> Brand</h1>
                <Button
                  className="custom-button"
                  style={{ marginTop: "100px" }}
                >
                  BOOK A CALL
                </Button>
                <p
                  className="lead mt-3 banner-description"
                  style={{ fontSize: "15px" }}
                >
                  To empower brands with creativity and strategy, enabling them
                  to reach their full potential and thrive in the competitive
                  landscape.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
