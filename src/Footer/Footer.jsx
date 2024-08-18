import React from 'react';
import '../Footer/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-brand">
          <img className='imag mt-5'
                src="/assets/logo.png"
              
              />
          </div>
          <div className="col-md-2 footer-links">
            <h5>Explore</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-2 footer-links">
            <h5>Social</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-links">
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+9402123124">+94 02123124</a></li>
              <li><a href="tel:0112980012">0112 980012</a></li>
              <li><a href="mailto:contact@brandzpark.sl">contact@brandzpark.sl</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Brandzpark</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
