import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ff1 from "../assets/Images/footerl.png";
import Navebar from "./Navebar";

function Footer() {
  return (
    <>
    <Container>
      <Row>
        <Col md={12} sm={12}>
          <h1>
            wy
          </h1>
        <img src={ff1} alt="Map" className='map-image' />
        </Col>
      </Row>
    </Container>
<Navebar/>
    </>
  );
}

export default Footer;
