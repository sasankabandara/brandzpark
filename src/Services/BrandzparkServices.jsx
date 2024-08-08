import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BrandzparkServices.css';
import brandStrategyLarge from '../imgs/brand-strategy.png';
import brandStrategySmall from '../imgs/brand-strategy-small.png';
import creativeDesignLarge from '../imgs/creativeDesign1.png';
import creativeDesignSmall from '../imgs/creativeDesign-small1.png';
import videoAnimationLarge from '../imgs/video-animation.png';
import videoAnimationSmall from '../imgs/video-animation-small.png';
import digitalSolutionsLarge from '../imgs/digital-solutions.png';
import digitalSolutionsSmall from '../imgs/digital-solutions-small.png';
import arrow from '../imgs/arrow.png'; // Import the arrow image

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
        <p>Brandzpark Pvt Ltd is dedicated to uplifting brands through strategic planning, creative design, and innovative<br/> digital solutions. With years of expertise in building startups, managing businesses and providing services to various<br/> brands, We are committed to helping our clients achieve their branding goals and stand out in the market.</p>
      </div>
      <div className="brandzpark-row row gx-0"> {/* Add gx-0 to remove gutter space */}
        <div className="col-md-3 col-12 mb-3"> {/* Add col-12 for full width on small screens */}
          <div className="brandzpark-card card bg-dark text-light h-100">
            <picture>
              <source media="(max-width: 767.98px)" srcSet={brandStrategySmall} />
              <source media="(min-width: 768px)" srcSet={brandStrategyLarge} />
              <img src={brandStrategyLarge} className="card-img-top" alt="Brand strategy & Branding" />
            </picture>
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title">Brand strategy <br/>& Branding</h5>
              <img src={arrow} alt="arrow" className="arrow" /> {/* Add arrow image */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-3"> {/* Add col-12 for full width on small screens */}
          <div className="brandzpark-card card bg-dark text-light h-100">
            <picture>
              <source media="(max-width: 767.98px)" srcSet={creativeDesignSmall} />
              <source media="(min-width: 768px)" srcSet={creativeDesignLarge} />
              <img src={creativeDesignLarge} className="card-img-top" alt="Creative Design" />
            </picture>
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title">Creative<br/> Design</h5>
              <img src={arrow} alt="arrow" className="arrow" /> {/* Add arrow image */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-3"> {/* Add col-12 for full width on small screens */}
          <div className="brandzpark-card card bg-dark text-light h-100">
            <picture>
              <source media="(max-width: 767.98px)" srcSet={videoAnimationSmall} />
              <source media="(min-width: 768px)" srcSet={videoAnimationLarge} />
              <img src={videoAnimationLarge} className="card-img-top" alt="Video and Animation" />
            </picture>
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title">Video<br/> and Animation</h5>
              <img src={arrow} alt="arrow" className="arrow" /> {/* Add arrow image */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-3"> {/* Add col-12 for full width on small screens */}
          <div className="brandzpark-card card bg-dark text-light h-100">
            <picture>
              <source media="(max-width: 767.98px)" srcSet={digitalSolutionsSmall} />
              <source media="(min-width: 768px)" srcSet={digitalSolutionsLarge} />
              <img src={digitalSolutionsLarge} className="card-img-top" alt="Digital Solutions" />
            </picture>
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title">Digital<br/> Solutions</h5>
              <img src={arrow} alt="arrow" className="arrow" /> {/* Add arrow image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandzparkServices;
