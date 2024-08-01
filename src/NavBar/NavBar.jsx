import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/nav.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-transparent fixed-top">
      <Container className="mt-4">
        <Row className="w-100 align-items-center">
          <Col xs={2} lg={3} className="d-flex justify-content-start align-items-center">
            <img
              src="/assets/star.png"
              height="30"
              alt="star"
              className="me-2"
            />
          </Col>
          <Col xs={8} lg={6} className="d-flex justify-content-center align-items-center">
            <Navbar.Brand href="#home" className="d-flex align-items-center mx-auto">
              <img
                src="/assets/logo.png"
                height="30"
                alt="brandzpark logo"
              />
            </Navbar.Brand>
          </Col>
          <Col xs={2} lg={3} className="d-flex justify-content-end align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto flex-column flex-lg-row align-items-lg-center">
                <Nav.Link href="#about" className="text-white me-5">About</Nav.Link>
                <Nav.Link href="#work" className="text-white me-4">Work</Nav.Link>
                <Nav.Link href="#contact" className="text-white me-5">Contact</Nav.Link>
                <img
                  src="/assets/rou.png"
                  height="20"
                  className="mt-1 me-3 d-none d-lg-inline-block"
                  alt="Contact"
                />
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
