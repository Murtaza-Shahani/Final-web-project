import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/Images/background.png';
import Map from '../assets/Images/map.png';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    overflowX: 'hidden',
  };

  return (
    <Container fluid style={backgroundStyle}>
      <Row>
        <Col md={6} sm={12}>
          {/* Content for the first column */}
          <h1 className='home_text'>
          The most affortable <br /> place  to stay in the <br />  san franciso bay area
          </h1>
          
        </Col>
        <Col md={6} sm={12}>
          {/* Content for the second column */}
          <img src={Map} alt="Map" className='map-image' />

        </Col>
      </Row>
    </Container>
  );
};

export default Home;
