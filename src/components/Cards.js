import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import C1 from '../assets/Images/c1.png'
import C2 from '../assets/Images/c2.png'
import C3 from '../assets/Images/c3.png'
import C4 from '../assets/Images/c4.png'
import C5 from '../assets/Images/c5.png'
import C6 from '../assets/Images/c6.png'

function Cards() {
  return (
    <>
    <Container fluid className='property'>
      <Row className='cards'>
        <Col className='cards' md={4} sm={12}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={C1} />
            <Card.Body>
              <Card.Title>2578 Folsom street, san francisco, CA, 94110</Card.Title>
              <p> Private Room</p>
        <Card.Text className='card_text'>
             $1200/Month
        </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className='cards' md={4} sm={12}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={C2} />
            <Card.Body>
              <Card.Title>2578 Folsom street, san francisco, CA, 94110</Card.Title>
              <p> Private Room</p>
        <Card.Text className='card_text'>
             $1200/Month
        </Card.Text  >
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className='cards' md={4} sm={12}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={C3} />
            <Card.Body>
              <Card.Title>2578 Folsom street, san francisco, CA, 94110</Card.Title>
              <p> Private Room</p>
        <Card.Text className='card_text'>
             $1200/Month
        </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>

<Container fluid className='property'>
<Row className='cards'>
  <Col className='cards' md={4} sm={12}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={C4} />
      <Card.Body>
        <Card.Title>2578 Folsom street, san francisco, CA, 94110</Card.Title>
        <p> Private Room</p>
        <Card.Text className='card_text'>
             $1200/Month
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col className='cards' md={4} sm={12}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={C5} />
      <Card.Body>
        <Card.Title>2578 Folsom street, san francisco, CA, 94110</Card.Title>
        <p> Private Room</p>
        <Card.Text className='card_text'>
             $1200/Month
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col className='cards' md={4} sm={12}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={C6} />
      <Card.Body>
        <Card.Title>2578 Folsom street, san francisco, CA, 94110</Card.Title>
        <p> Private Room</p>
        <Card.Text className='card_text'>
             $1200/Month
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  </Col>

</Row>
</Container>
</>



  );
}

export default Cards;
