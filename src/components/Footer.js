import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/Images/logo 1.png";

function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h1>Images</h1>
            <img src={logo} alt="Photo" className="" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
