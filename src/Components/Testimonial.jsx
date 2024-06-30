import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import star from "../assets/Stars.svg";
import Dianne from "../assets/dianne.svg";
import Kristin from "../assets/kristin.svg";
import Kathryn from "../assets/kathryn.svg";

const Testimonial = () => {
  const imageStyle = {
    width: '80px',
    height: 'auto',
    objectFit: 'contain',
  };

  return (
    <section className="bg-light mt-5">
      <Container>
        <Row className="align-items-center py-5">
          <Col md={6}>
            <p>Clients Feedback</p>
            <h2>Customer testimonials</h2>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col md={4} sm={6} xs={12}>
            <div className="card h-100">
              <img src={star} alt="Card 1" className='card-img-top' style={imageStyle} />
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                <div className="d-flex align-items-center mt-3">
                  <img src={Dianne} alt="Dianne Russell" className="me-3" />
                  <div>
                    <h5 className="mb-0">Dianne Russell</h5>
                    <p className="text-muted mb-0">Starbucks</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="card h-100">
              <img src={star} alt="Card 2" className='card-img-top' style={imageStyle} />
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                <div className="d-flex align-items-center mt-3">
                  <img src={Kristin} alt="Kristin Watson" className="me-3" />
                  <div>
                    <h5 className="mb-0">Kristin Watson</h5>
                    <p className="text-muted mb-0">Louis Vuitton</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="card h-100">
              <img src={star} alt="Card 3" className='card-img-top' style={imageStyle} />
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                <div className="d-flex align-items-center mt-3">
                  <img src={Kathryn} alt="Kathryn Murphy" className="me-3" />
                  <div>
                    <h5 className="mb-0">Kathryn Murphy</h5>
                    <p className="text-muted mb-0">McDonald's</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
