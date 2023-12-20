import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import HeroLogo from "../assets/Images/HeroLogo.png";


function Future() {
  return (
    <>
    <h1>
        The Future of Web3 NoCode  

    </h1>
    <h3>
        Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.

    </h3>
    <Container fluid className='herosec'>
        <Row>
           <Col md={6} sm={12} className='herotext'>
            <h1>
                MultiChain
                
                <a href="https://web3makr-landingpage.vercel.app/#" target="_blank">Click me!</a>
                
            </h1>

            <h1>
                Dashboard
            </h1>

            <h1>
                Tool
            </h1>
           </Col>
           <Col md={6} sm={12} lg={6}>
           <img src={HeroLogo} alt="Home2" className="logo_img" />
           </Col>
        </Row>
    </Container>
    </>
  )
}

export default Future
