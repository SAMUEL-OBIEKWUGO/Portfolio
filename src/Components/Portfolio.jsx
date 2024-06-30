import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import socialButton from "../assets/Social button.svg";
import card_1 from "../assets/card1.svg";
import card_2 from "../assets/card2.svg";
import card_3 from "../assets/card3.svg";
import visit from "../assets/visit.svg";

const Portfolio = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col md={6}>
          <div className="recent">
            <p>Recent Projects</p>
            <h2>My Portfolio</h2>
          </div>
        </Col>
        <Col md={2}>
          <img src={socialButton} alt="Social Button" className="img-fluid" />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <div className="card">
            <img src={card_1} alt="Card 1" className="card-img-top" />
            <div className="card-body">
              <h3>Ahuse</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                perferendis corrupti animi!
              </p>
              <Button variant="primary" className="d-flex align-items-center gap-3">
                <p>Visit Website</p>
                <img src={visit} alt="Visit Icon" className="mb-0" />
              </Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="card">
            <img src={card_2} alt="Card 2" className="card-img-top" />
            <div className="card-body">
              <h3>App Dashboard</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <Button variant="primary" className="d-flex align-items-center gap-3">
                <p>Visit Website</p>
                <img src={visit} alt="Visit Icon" className="mb-0" />
              </Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="card">
            <img src={card_3} alt="Card 3" className="card-img-top" />
            <div className="card-body">
              <h3>Easy Rent</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <Button variant="primary" className="d-flex align-items-center gap-3">
                <p>Visit Website</p>
                <img src={visit} alt="Visit Icon" className="mb-0" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
