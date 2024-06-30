import React from 'react';
import touch from '../assets/Button.svg';
import john from '../assets/john.svg';

const Hero = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-12 col-md-6 align-items-start text-md-left">
            <p>Hey, I am John</p>
            <h2>I develop dynamic and user-centered Web Applications</h2>
            <p>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
            <button className="btn btn-primary">
              <img src={touch} alt="Touch Button" height={40} />
            </button>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={john} alt="John's Profile" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
