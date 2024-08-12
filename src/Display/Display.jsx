import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Display/Display.css"; // Custom CSS for positioning and styling
import icons from '../imgs/icons.png';

const Display = () => {
    return (
        <div className="container-fluid image-overlay-container">
          <div className="row justify-content-center">
            <div className="col-12">
            <img src={icons} alt="Decorative Icons" className="img-fluid overlay-image" />
            </div>
          </div>
        </div>
      );
    };
export default Display;
