import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Feedback/feedback.css";

const Feedback = () => {
    const feedbacks = [
      {
        name: 'Sophia L.',
        company: 'BlueWave Consulting',
        feedback: 'Superb and attentive team. They brought our vision to life with incredible creativity.',
      },
      {
        name: 'Emily R.',
        company: 'GreenLeaf Marketing',
        feedback: 'Absolutely thrilled with the creative solutions provided. They perfectly captured our brand essence.',
      },
      {
        name: 'Michael T.',
        company: 'Horizon Media',
        feedback: 'Outstanding service and innovative designs. Exceeded our expectations every step of the way.',
      },
    ];
  
    return (
      <Container className="feedback-section">
        <h2 className="text-center text-light">Feedbacks</h2>
        <Row>
          {feedbacks.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="feedback-card">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                  <Card.Text>{item.feedback}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Feedback;
