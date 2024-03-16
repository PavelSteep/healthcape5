import React from "react";
// import Svg from "react-svg";
import { Container, Row, Col, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import WomanDoctor from '../../assets/about/woman-doctor.png';
import Ellipse from '../../assets/about/ellipse.png';
import Phone from '../../assets/about/phone.png';
import Video from '../../assets/about/video.png';
import Chat from '../../assets/about/chat.png';
import PatientReview from '../../assets/about/patient-review.png';
import Patients from '../../assets/about/patients.png';
import '../../styles/About.css';
// import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col ms={12} md={12} lg={6}>
              <div className="about_text text-left">
                <h1>Find And Search Your</h1>
                <h2>Suitable Doctor’s</h2>
                <p>
                  Join us and take care of yourself and your family with health services that <br />
                  will make you feel confident and safe in your daily life
                </p>
                <Link to="/" className="order_btn">
                  <div className="wrapper_btn">
                    <ButtonGroup>
                      <Button className="first">Find your doctor</Button>
                    </ButtonGroup>
                    <div className="map">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <DropdownButton className="dropdown_map" title="New York, USA" id="bg-nested-dropdown" as={Button} caretSize="lg" >
                      <Dropdown.Item eventKey="1"><i className="bi bi-geo-alt"></i></Dropdown.Item>
                      <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                    <Button className="search_info" variant="info"><i class="bi bi-search"></i></Button>
                  </div>
                </Link>
              </div>
            </Col>
            <Col ms={12} lg={6}>
              <div className="about_block">
                <div className="ellipse_all">
                  <img className="womanDoctor" src={WomanDoctor} alt="WomanDoctor" />
                  <img className="ellipse" src={Ellipse} alt="Ellipse" />
                  <img className="phone" src={Phone} alt="Phone" />
                  <img className="video" src={Video} alt="Video" />
                  <img className="chat" src={Chat} alt="Chat" />
                  <img className="patientReview" src={PatientReview} alt="PatientReview" />
                  <img className="patients" src={Patients} alt="Patients" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
