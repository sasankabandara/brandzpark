import React from "react";
import { Card } from "react-bootstrap";
import "./TestimonialCard.css";

const TestimonialCard = ({ image, name, company, text, quotes }) => {
  return (
    <Card className="testimonial-card">
      <Card.Img src={quotes} className="quotes-img" alt="Quotes" />
      <Card.Body>
        <div className="card-header">
          <img src={image} alt={name} className="profile-img" />
          <div className="card-info">
            <h5 className="name">{name}</h5>
            <p className="company">{company}</p>
          </div>
        </div>
        <p className="feedback">{text}</p>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
