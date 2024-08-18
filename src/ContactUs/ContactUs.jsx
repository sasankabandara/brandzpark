import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../ContactUs/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <Container>
        <Row>
          {/* Contact Form Section */}
          <Col md={4} className="contact-form-section">
            <h2 className="contact-title">
              Contact Us<span className="asterisk">*</span>
            </h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label className="sr-only">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className="sr-only">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label className="sr-only">Tell us all about it</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Tell us all about it"
                  className="contact-input"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="contact-button">
                Book a Call
              </Button>
              <p className="say-hi">Say hi to the team</p>
            </Form>
          </Col>
          <Col  md={1}> </Col>

          {/* Our Story Section */}
          <Col md={5} className="contact-details contact-details-section mt-5">
          
            <h3 className="story-title">Our Story</h3>
            <p className="story-text">
              Brandzpark is a dynamic advertising and graphic design agency founded in 2019. 
              With a dedicated team of 15 talented employees, we specialize in creating 
              innovative and visually captivating campaigns that elevate brands and engage audiences.
              Our expertise spans logo design, branding, digital marketing, and more, ensuring your 
              brand stands out and leaves a lasting impression. Let us spark your brand with creativity and passion.
            </p>
            <Row>
              <Col xs={6}>
                <h4 className="details-title mt-5">Opening hours</h4>
                <p className="details-text">Monday - Friday<br />9am - 5pm<br />Weekend Closed</p>
              </Col>
              <Col xs={6}>
                <h4 className="details-title mt-5">Address</h4>
                <p className="details-text">
                  298, 04. Main Road, Sub Road,<br />
                  Building Name, Anuradapura.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
