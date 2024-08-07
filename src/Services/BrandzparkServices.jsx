import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BrandzparkServices.css';
import brandStrategy from '../imgs/brand-strategy.png';
import creativeDesign from '../imgs/creativeDesign.png';
import videoAnimation from '../imgs/video-animation.png'; 
import digitalSolutions from '../imgs/digital-solutions.png';

const BrandzparkServices = () => {
  return (
    <div className="brandzpark-container text-light my-5">
      <div className="brandzpark-header text-center mb-4">
        <div className="brandzpark-logo mb-2">
          <img
            src="/assets/star.png"
            height="100"
            alt="star"
            className="me-2"
          />
        </div>
        <h2>About Brandzpark</h2>
        <p>Our Services</p>
        <p>Brandzpark Pvt Ltd is dedicated to uplifting brands through strategic planning, creative design, and innovative digital solutions. With years of expertise in building startups, managing businesses and providing services to various brands, We are committed to helping our clients achieve their branding goals and stand out in the market.</p>
      </div>
      <div className="brandzpark-row row gx-0"> {/* Add gx-0 to remove gutter space */}
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="brandzpark-card card bg-dark text-light h-100">
            <img src={brandStrategy} className="card-img-top" alt="Brand strategy & Branding" />
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title">Brand strategy & Branding</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="brandzpark-card card bg-dark text-light h-100">
            <img src={creativeDesign} className="card-img-top" alt="Creative Design" />
            <div className="card-img-overlay d-flex align-items-end">
              <div>
                <h5 className="card-title">Creative Design</h5>
                <ul className="list-unstyled">
                  <li>Social Media Design</li>
                  <li>3D Design</li>
                  <li>Graphic Design</li>
                  <li>Print Design</li>
                  <li>Packaging Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="brandzpark-card card bg-dark text-light h-100">
            <img src={videoAnimation} className="card-img-top" alt="Video and Animation" />
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title">Video and Animation</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="brandzpark-card card bg-dark text-light h-100">
            <img src={digitalSolutions} className="card-img-top" alt="Digital Solutions" />
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title">Digital Solutions</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandzparkServices;
