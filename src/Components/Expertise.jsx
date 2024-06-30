import React from 'react';
import phone from '../assets/phone_mobile.svg';
import tag from '../assets/tag 1.svg';
import test from '../assets/testAndDebugging.svg';
import endTag from '../assets/endTag.svg';

const Expertise = () => {
  const imageStyle = {
    height: '50px',
    objectFit: 'contain'
  };

  const h3Style = {
    width: '100%'
  };

  return (
    <div className="container py-5">
      <p className="text-start fw-bold">My skills</p>
      <h2 className="text-start mb-4">My Expertise</h2>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 bg-light border-0 p-3 d-flex flex-column align-items-start">
            <div className="d-flex align-items-start w-100 mb-3">
              <img src={phone} alt="Responsive Design" className="me-2" style={imageStyle} />
              <h3 className="card-title" style={h3Style}>Responsive Design</h3>
            </div>
            <div className="card-body p-0">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 bg-light border-0 p-3 d-flex flex-column align-items-start">
            <div className="d-flex align-items-start w-100 mb-3">
              <img src={tag} alt="Front-End Frameworks" className="me-2" style={imageStyle} />
              <h3 className="card-title" style={h3Style}>Front-End Frameworks</h3>
            </div>
            <div className="card-body p-0">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 bg-light border-0 p-3 d-flex flex-column align-items-start">
            <div className="d-flex align-items-start w-100 mb-3">
              <img src={test} alt="Testing and Debugging" className="me-2" style={imageStyle} />
              <h3 className="card-title" style={h3Style}>Testing and Debugging</h3>
            </div>
            <div className="card-body p-0">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 bg-light border-0 p-3 d-flex flex-column align-items-start">
            <div className="d-flex align-items-start w-100 mb-3">
              <img src={endTag} alt="Cloud Services" className="me-2" style={imageStyle} />
              <h3 className="card-title" style={h3Style}>Cloud Services</h3>
            </div>
            <div className="card-body p-0">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
