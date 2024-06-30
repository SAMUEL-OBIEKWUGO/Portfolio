import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import logo from "../assets/portfolio_logo.svg";

const Navbars = () => {
  const buttonStyle = {
    border: '2px solid purple',
    color: 'purple',
    backgroundColor: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    position: 'relative',
    left: '5rem'
  };
  return (
    <Navbar  bg="white" expand="lg" className="bg-white">
      <Navbar.Brand href="#">
        <img src={logo} alt="Logo" height="40" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="mx-2">Home</Nav.Link>
          <Nav.Link href="#" className="mx-2">Portfolio</Nav.Link>
          <Nav.Link href="#" className="mx-2">About me</Nav.Link>
          <Nav.Link href="#" className="mx-2">Testimonials</Nav.Link>
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link href="#" className="p-2">
            <button  style={buttonStyle}>Contact Me</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
