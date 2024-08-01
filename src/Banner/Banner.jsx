import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/nav.css";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <div>
      <NavBar />
      <div
        className="banner-background vh-100 d-flex justify-content-center align-items-center text-white "
        style={{ backgroundImage: "url(/assets/banner1.jpeg)", backgroundSize: "cover" ,backgroundPosition: "center " }}
      >
        <Container className="p-4 banner-container" >
          <Row className="align-items-center">
            <Col md={6} className="text-left">
              <div className="cont" style={{ marginLeft: "250px", marginTop: "20px" }}>
                <h1 className="display-4 text-left" style={{ fontWeight: "400", fontSize: "6.3rem",lineHeight: "0.9" }}>
                  Let’s
                  <br /> 
                  <span style={{ color: "#E6320F" }}>Spark </span>
                  
                  Your Brand
                </h1>

                <Button variant="warning" className="mt-5">
                  BOOK A CALL
                </Button>
                <p className="lead">
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
