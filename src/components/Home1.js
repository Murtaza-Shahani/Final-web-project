import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home2 from "../assets/Images/home2.png";
import Ss2 from "../assets/Images/Ss2.png";

function Home1() {
  return (
    <>
     
      <Container fluid className="Hero2">
        <Row>
          <Col md={6} sm={12} className="home11">
            <h1>Create your own Web3 Masterpiece</h1>
            <p>
              Most entrepreneurs want to create their own web3 sites,
              unfortunately, they dont know much about creating one. Web3Makr
              makes it easier for newbies to create a blockchain-based
              collectibles solution without the hassle of leaving their favorite
              creation tools and by simple drag and drop functionality.
            </p>
          </Col>
          <Col md={6} sm={12}>
            {/* Content for the first column */}
            <img src={Ss2} alt="Home2" className="home2-image" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home1;
