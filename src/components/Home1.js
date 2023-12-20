import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home2 from '../assets/Images/home2.png'
import logo1 from '../assets/Images/home2l1.png'
import logo2 from '../assets/Images/home2l2.png'
import logo3 from '../assets/Images/home2l3.png'
import logo4 from '../assets/Images/home2l4.png'
import logo5 from '../assets/Images/home2l5.png'
import logo6 from '../assets/Images/home2l6.png'

function Home1() {
  return (
    <>
    <h1 className='home2_h'>
    Minimum living cost takes care of everything
    </h1>
    <Container fluid>
      <Row>
        <Col md={6} sm={12}>
          {/* Content for the first column */}
          <img src={Home2} alt="Home2" className='home2-image' />
          
        </Col>
        <Col md={6} sm={12}>
          {/* Content for the second column */}
          
          <Row>
            {/* First Row */}
            <Col md={4} sm={12}>
              {/* Content for the first column in the first row */}
              <img src={logo1} alt="Home2" className='home_logo' />
              <h1 className='h2_title'>  Pay as Little as possible!  </h1>
              
            </Col>
            <Col md={4} sm={12}>
              {/* Content for the second column in the first row */}
              <img src={logo2} alt="Home2" className='home_logo' />
              <h1 className='h2_title' >  Enjoy wisdom of community!  </h1>
            </Col>
            <Col md={4} sm={12}>
              {/* Content for the third column in the first row */}
              <img src={logo3} alt="Home2" className='home_logo' />
              <h1 className='h2_title'>  Let's somebody else take care of Landlord!  </h1>
            </Col>
          </Row>
          <Row>
            {/* Second Row */}
            <Col md={4} sm={12}>
              {/* Content for the first column in the second row */}
              <img src={logo4} alt="Home2" className='home_logo' />
              <h1 className='h2_title'>  Enjoy peaceful  Environment!  </h1>
            </Col>
            <Col md={4} sm={12}>
              {/* Content for the second column in the second row */}
              <img src={logo5} alt="Home2" className='home_logo' />
              <h1 className='h2_title'>  Stay Safe! Save Money!  </h1>
            </Col>
            <Col md={4} sm={12}>
              {/* Content for the third column in the second row */}
              <img src={logo6} alt="Home2" className='home_logo' />
              <h1 className='h2_title'>  Pay for what you use !  </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default Home1
