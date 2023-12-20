import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/Images/background.png';
import Map from '../assets/Images/map.png';
import Hero from '../assets/Images/Hero.png'

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    overflowX: 'hidden',
    
  };

  return (
    <Container fluid>
      <Row>
      <Col md={12} sm={12}>
          {/* Content for the second column */}
          <img src={Hero} alt="Map" className='heroimg' />

      </Col>
      </Row>
    </Container>
  );
};

export default Home;
