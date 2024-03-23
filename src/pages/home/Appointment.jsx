import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/Appointment.css';
import FemaleDoctor from '../../assets/appointment/female-doctor.png';



function Appointment() {
  return (
    <>
      <section className="section_wrapper_appointment">
        <div className="appointment_content">
          <Container>
            <Row>
              <Col ms={12} md={12} lg={6} className="my-auto order-md-1">
                <h2>
                    It’s time change your 
                    <br />
                      life today
                </h2>
                <Link to="/">
                  <Button
                    variant="primary"
                    className="article_bottom mt-4"
                    type="submit"
                    style={{ backgroundColor: "#FFFFFF",
                      fontFamily:"\"Roboto\", sans-serif",
                      color: "#40A3F8", 
                      fontSize:"0.9rem",
                      fontWeight:"500",
                      padding:"10px",
                      width:'195px',
                      height:'47px',
                      border:'none',      
                      display: "flex", 
                      alignItems: "center",
                      justifyContent: "center" }}
                    >
                    Book an Appoinment 
                  </Button>
                </Link>
              </Col>
              <Col ms={12} md={12} lg={6} className="my-auto text-center order-md-2">
                <div className="appointment_img">
                  <img src={FemaleDoctor} alt="FemaleDoctor" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Appointment;
