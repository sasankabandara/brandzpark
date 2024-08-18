import React, { useState } from "react";
import TestimonialCard from "../Feedback/TestimonialCard";
import emily from "../imgs/emily.png";
import mic from "../imgs/mic.png";
import sop from "../imgs/sop.png";
import quotes from "../imgs/99.png"; // Your quotes image
import "../Feedback/TestimonialCard.css"; // Import CSS for styling

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      image: emily,
      name: "Emily R.",
      company: "GreenLeaf Marketing",
      text: "Absolutely thrilled with the creative solutions provided. They perfectly captured our brand's essence.",
    },
    {
      id: 2,
      image: mic,
      name: "Michael T",
      company: "Horizon Media",
      text: "Outstanding service and innovative designs. Exceeded our expectations every step of the way.",
    },

    {
        id: 3,
        image: sop,
        name: "Sophia L.",
        company: "BlueWave Consulting",
        text: "Professional and attentive team. They brought our vision to life with incredible precision.",
      },
    // Add more testimonials as needed
  ]);

  return (
    <div className="testimonials-section mt-5">
      <h2 className="testimonials-title">Feedbacks</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            image={testimonial.image}
            name={testimonial.name}
            company={testimonial.company}
            text={testimonial.text}
            quotes={quotes}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
