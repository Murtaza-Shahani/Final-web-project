import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import B1 from "../assets/Images/bg01.png";
import B2 from "../assets/Images/bg02.png";
import B3 from "../assets/Images/bg03.png";
import U from "../assets/Images/upload.png"

function SecondP2() {
  const backgroundImage = {
    backgroundImage: `url(${B1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "40vh",
  };

  const backgroundImage2 = {
    backgroundImage: `url(${B2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "40vh",
  };
  const backgroundImage3 = {
    backgroundImage: `url(${B3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "40vh",
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="bg_image" md={6} sm={12}>
            <Row>
              <Col className="bg_image" md={6} sm={12}>
                <div style={backgroundImage}>
                  <h1 className="bg_text">Flexible Leases</h1>
                </div>
              </Col>

              <Col className="bg_image" md={6} sm={12}>
                <div style={backgroundImage2}>
                  <h1 className="bg_text">7-Day Happiness Guaranteed</h1>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="bg_image" md={6} sm={12}>
                <div style={backgroundImage3}>
                  <h1 className="bg_text">Monthly House Cleaning</h1>
                </div>
              </Col>
              <Col className="bg_image" md={6} sm={12}>
                <div style={backgroundImage2}>
                  <h1 className="bg_text">Choose Your Own Roommate</h1>
                </div>
              </Col>
            </Row>
          </Col>

          <Col  md={6} sm={12} className="heading">
            <h1>Flexibility and options to suit your lifestyle.</h1>
            <p >
               You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </p>

            <Button
              className="button red-button ms-auto"
              variant="primary"
              style={{
                backgroundColor: "rgba(244, 81, 30, 1)",
                border: "none",
              }}
            >
              Search Rooms
            </Button>
          </Col>
        </Row>
      </Container>


      <h1 style={{ textAlign: "center", padding: "60px" }}>
        
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h1>
      <div className="radius">
        <h1 style={{ textAlign: "center", padding: "20px", color:'rgba(244, 81, 30, 1)' }}>
          Add a new property </h1>
          
          <form>
        <div className="form-row">
          <label className="label">Name:</label>
          <input className="input-field" type="text" name="name" placeholder="Enter Name" />
          
          <label className="label">Address:</label>
          <input className="input-field" type="text" name="address" placeholder="Enter Address" />
          
          <label className="label">Unit Number:</label>
          <input className="input-field" type="text" name="unitNumber" placeholder="Enter Unit Number" />
        </div>

        <div className="form-row">
          <label className="label">City:</label>
          <input className="input-field" type="text" name="city" placeholder="Enter City" />
          
          <label className="label">State:</label>
          <input className="input-field" type="text" name="state" placeholder="Enter State" />
          
          <label className="label">Room Type:</label>
          <select className="input-field" name="roomType">
            <option value="single">Single</option>
            <option value="double">Double</option>
            {/* Add more room types as needed */}
          </select>
        </div>

        <div className="form-row">
          <label className="label">Price:</label>
          <input className="input-field" type="text" name="city" placeholder="Enter City" />
          
          <label className="label">State:</label>
          <input className="input-field" type="text" name="state" placeholder="Enter State" />
          
          <label className="label">Room Type:</label>
          <select className="input-field" name="roomType">
            <option value="single">Single</option>
            <option value="double">Double</option>
            {/* Add more room types as needed */}
          </select>
        </div>

        <div className="form-row">
          <label className="label">Description:</label>
          <textarea className="input-field" name="description" placeholder="Enter Description"></textarea>
        </div>
      </form>
      
      <img src={U} alt="Photo" className="upload" />
      <Button
  className="button red-button"
  variant="primary"
  style={{
    backgroundColor: "rgba(244, 81, 30, 1)",
    border: "none",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    marginTop: "30px"
  
  }}
>
  Add new Property
</Button>


      </div>      
    </>
  );
}

export default SecondP2;
