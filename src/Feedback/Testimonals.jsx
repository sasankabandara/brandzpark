import React, { useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "../Feedback/TestimonialCard";
import emily from "../imgs/emily.png";
import mic from "../imgs/mic.png";
import sop from "../imgs/sop.png";
import quotes from "../imgs/99.png"; // Your quotes image
import "../Feedback/TestimonialCard.css"; // Import your custom CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel CSS

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
    {
      id: 4,
      image: mic,
      name: "Michael T",
      company: "Horizon Media",
      text: "Outstanding service and innovative designs. Exceeded our expectations every step of the way.",
    },
    {
      id: 5,
      image: mic,
      name: "Michael T",
      company: "Horizon Media",
      text: "Outstanding service and innovative designs. Exceeded our expectations every step of the way.",
    },
    {
      id: 6,
      image: mic,
      name: "Michael T",
      company: "Horizon Media",
      text: "Outstanding service and innovative designs. Exceeded our expectations every step of the way.",
    },
  ]);

  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const mobileSettingsLTR = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rtl: false, // Left to right
  };

  const mobileSettingsRTL = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rtl: true, // Right to left
  };

  return (
    <div className="testimonials-section mt-5">
      <h2 className="testimonials-title">Feedbacks</h2>
      
      {/* Desktop Slider */}
      <div className="desktop-carousel">
        <Slider {...desktopSettings}>
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
        </Slider>
      </div>

      {/* Mobile Sliders */}
      <div className="mobile-carousel">
        <Slider {...mobileSettingsLTR}>
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              company={testimonial.company}
              text={testimonial.text}
              quotes={quotes}
            />
          ))}
        </Slider>

        <Slider {...mobileSettingsRTL}>
          {testimonials.slice(3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              company={testimonial.company}
              text={testimonial.text}
              quotes={quotes}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
