import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Utube from "../assets/Images/utube.png"
import U from "../assets/Images/R.png"

function Review() {
  return (
    <>
      <Container fluid className="review">
        <Row>
          <Col md={6} sm={12}>
            <p className="review_text">
              I recently had the pleasure of staying in the best house with the
              most fantastic rooms, and I can't stop raving about it! From the
              moment I walked in, I was greeted by a sense of warmth and
              luxuryThe attention to detail in every room was impeccable, with
              stylish decor and cozy furnishings that made me feel right at home
            </p>
            <img src={U} alt="Photo" className=" review_text" />

            
          </Col>
          <Col md={6} sm={12}>
          <img src={Utube} alt="Photo" className="u_image"/>


          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Review;
