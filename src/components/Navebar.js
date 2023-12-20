import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from '../assets/Images/logo 1.png'

const gradientBackground = {
    background: 'linear-gradient(to bottom,	#6A5ACD,#9370DB)' // Replace with your desired color stops
};
const Navebar = () => {
    return (
        <>
        <Navbar data-bs-theme="dark" style={gradientBackground}>
          <Container>
          <img src={Image} alt="logo" />
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">landlord</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
   </>
    );
}

export default Navebar;
