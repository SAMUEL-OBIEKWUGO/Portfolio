import React from "react";
import about_me from "../assets/About_Me.svg";
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex align-items-center">
        <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start">
          <img src={about_me} alt="About Me" className="img-fluid" style={{ maxWidth: '350px' }} />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className="mt-5 mt-md-0">
            <p className="mb-1">About me</p>
            <h1 className="mb-4">About me</h1>
            <div className="w-100 w-md-75">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue. Nibh metus a
                semper purus mauris duis. Lorem eu neque, tristique quis duis.
                Nibh scelerisque ac adipiscing velit non nulla in amet
                pellentesque.
              </p>
              <p>
                Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                consectetur eget commodo vitae. Amet pellentesque sit pulvinar
                lorem mi a, euismod risus r.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
