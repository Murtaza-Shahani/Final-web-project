import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from '../assets/Images/logo 1.png'
import Button from 'react-bootstrap/Button';
import ff1 from "../assets/Images/footerl.png";

const gradientBackground = {
    background: 'rgba(17, 9, 21, 1)' // Replace with your desired color stops
};
const Navebar = () => {
    return (
        <>
        <Navbar data-bs-theme="dark" style={gradientBackground}>
          <Container>
          <img src={ff1} alt="logo" />

            <Nav className="ms-auto">
              <Nav.Link href="#home">Web3Maker</Nav.Link>
              <Nav.Link href="#home">White paper</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#features">Tool</Nav.Link>
              <Nav.Link href="#pricing">Contact us</Nav.Link>
            </Nav>
            <Button variant="primary" href="#your-button-link">
          START FOR FREE
        </Button>
          </Container>
        </Navbar>
   </>
    );
}

export default Navebar;
