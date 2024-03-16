import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../styles/Doctors.css';

import Doctor1 from '../../assets/doctors/doctor-1.png';
import Doctor2 from '../../assets/doctors/doctor-2.png';
import Doctor3 from '../../assets/doctors/doctor-3.png';
import Doctor4 from '../../assets/doctors/doctor-4.png';

import Cards from "../../components/Layouts/Cards";



const doctorData = [
  {
    id:'0001',
    image:Doctor1,
    width:'241px',
    height:'300px',
    title:'Dr Amanda Linda',
    text:'Dentist Specilist'
  },
  {
    id:'0002',
    image:Doctor2,
    width:'241px',
    height:'300px',
    paddingTop:'15px',
    title:'Dr. Alisa Rahman',
    text:'Carddiologist Specilist'
  },
  {
    id:'0003',
    image:Doctor3,
    width:'241px',
    height:'302px',
    paddingTop:'13px',
    title:'Dr. Anthony Fauci',
    text:'Neurology Specilist'
  },
  {
    id:'0004',
    image:Doctor4,
    width:'241px',
    height:'300px',
    title:'Dr. Khalid Abbed',
    text:'Cancer Specilist'
  },
]


function Doctors() {
  return (
    <>
      <section className="section_doctors text-center">
        <Container>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <h2>Meet Our Certified Online Doctors</h2>
              <div className="line"></div>
              <div className="circle"></div>
              <p>
                Our online doctors have an average of 15 years experience 
                <br />
                and a 98% satisfaction rating, they really set us apart!
              </p>
            </Col>
          </Row>
          <Row>
            {
              doctorData.map((card, index) =>(
                <Cards
                  key={index}
                  image={card.image}
                  title={card.title}
                  text={card.text}
                  width={card.width}
                  height={card.height}
                  paddingTop={card.paddingTop}
                />
              ))
            }
          </Row>
          <Row>
            <Col>
              <Link to="/">
                <Button
                  variant="primary"
                  className="article_bottom mt-4"
                  type="submit"
                  style={{ backgroundColor: "#40A3F8", 
                    color: "#FFFFFF", 
                    fontSize:"0.9rem",
                    padding:"10px",
                    width:'195px',
                    height:'47px',      
                    display: "flex", 
                    alignItems: "center",
                    justifyContent: "center" }}
                  >
                  Explore All Doctors
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Doctors;
