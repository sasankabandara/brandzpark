import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecentWorks.css';

// Import images
import badge from '../imgs/badge.png';
import quillPen from '../imgs/quill-pen.png';
import nexusCreation1 from '../imgs/nexus-creation1.png';
import plumBoost from '../imgs/plum-boost.png';
import nexusCreation2 from '../imgs/nexus-creation2.png';
import invoice from '../imgs/invoice.png';

const RecentWorks = () => {
  const works = [
    { id: 1, imgSrc: badge, title: 'Badge' },
    { id: 2, imgSrc: quillPen, title: 'Quill Pen' },
    { id: 3, imgSrc: nexusCreation1, title: 'Nexus Creations' },
    { id: 4, imgSrc: plumBoost, title: 'Plum Boost' },
    { id: 5, imgSrc: nexusCreation2, title: 'Nexus Creations' },
    { id: 6, imgSrc: invoice, title: 'Invoice' }
  ];

  return (
    <div className="page-container">
      <div className="recent-works-container text-light my-5">
        <div className="text-left mb-4">
          <h2>Recent Works<span className="asterisk">*</span></h2>
        </div>
        <div className="recent-works-row row gx-0">
          {works.map((work) => (
            <div className="col-md-6 col-sm-12 mb-4" key={work.id}>
              <div className="recent-works-card-wrapper">
                <div className="recent-works-card card bg-dark text-light h-100">
                  <img src={work.imgSrc} className="card-img-top" alt={work.title} />
                  <div className="card-body">
                    <h5 className="card-title">{work.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
