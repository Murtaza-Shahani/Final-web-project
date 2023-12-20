import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Ss3 from "../assets/Images/Ss3.png";

function Section2() {
  return (
    <>
      
      <Container fluid className="Hero2">
        <Row>
          <Col md={6} sm={12}>
            {/* Content for the first column */}
            <img src={Ss3} alt="Home2" className="Ss3-image" />
          </Col>
          
          <Col md={6} sm={12}className="sec22">
            <h1>
              Can be changed to customizable ready made web3 dapps templates.
            </h1>
            <h3>
             <span> 01</span>  NFT(ERC721).
              <span> 02</span> DEFI
               <span> 03</span> Smart Contracts 
               <span>04</span> GameFi
               <span>05</span> Metaverse
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Section2;
