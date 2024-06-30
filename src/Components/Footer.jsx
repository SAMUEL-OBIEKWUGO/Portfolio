import React from 'react';
import logo from "../assets/portfolio_logo.svg";
import Facebook from "../assets/Facebook (1).svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Twitter from "../assets/Twitter (2).svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-light py-4">
        <main className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="d-flex flex-column flex-lg-row justify-content-center gap-2 gap-lg-4">
                <p className="mb-0">Home</p>
                <p className="mb-0">Portfolio</p>
                <p className="mb-0">About me</p>
                <p className="mb-0">Contact</p>
                <p className="mb-0">Testimonials</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center text-lg-end">
              <img src={Facebook} alt="Facebook" className="mx-2 img-fluid" />
              <img src={Instagram} alt="Instagram" className="mx-2 img-fluid" />
              <img src={LinkedIn} alt="LinkedIn" className="mx-2 img-fluid" />
              <img src={Twitter} alt="Twitter" className="mx-2 img-fluid" />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div className="text-center text-lg-start mb-3 mb-lg-0">
                <p>Made with 💖 by Airdokan</p>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-center gap-2 gap-lg-4 text-center text-lg-end">
                <p className="mb-0">Privacy Policy</p>
                <p className="mb-0">Terms of Service</p>
                <p className="mb-0">Cookies Settings</p>
              </div>
            </div>
            <div className="col-12 text-center mt-3">
              <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
          </div>
        </main>
      </footer>
    </>
  );
}

export default Footer;
