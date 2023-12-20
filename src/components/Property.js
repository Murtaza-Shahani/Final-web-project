import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Property=()=>{
    return(
    
    <Container fluid className='property'>
      <Row>
        <Col md={6} sm={12}>
          
          <h1 className='p_tag'>
          List of Properties
          </h1>
          
        </Col>
        <Col md={6} sm={12}>
        <Button
  className='button red-button ms-auto'
  variant="primary"
  style={{ backgroundColor: 'rgba(244, 81, 30, 1)', border: 'none' }}
>
  View All Property
</Button>



        </Col>
      </Row>
    </Container>
    );
}

export default Property;