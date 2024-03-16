import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../../styles/Article.css';
import Search from "../../assets/article/search.png";
import Calendar from "../../assets/article/calendar.png";
import OnlineHealthcare from "../../assets/article/online-healthcare.png";
import QualityDoctor from "../../assets/article/Quality-doctor.png";


const articleData = [
  {
    image:Search,
    background:'#D9EAF1',
    width:'48px',
    height:'41px',
    title:'Find best doctor’s',
    text:'Find your doctor easily with a minimum of effort. We\'ve kept everything organised for you.'
  },
  {
    image:Calendar,
    background:'#F3EBD8',
    width:'49px',
    height:'48px',
    title:'Get Appointment',
    text:'Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.'
  },
  {
    image:OnlineHealthcare,
    background:'#CDE8FB',
    width:'54px',
    height:'50px',
    title:'Happy Consultations',
    text:'Do consultations and  take the service based on your appointment. Get back to good health'
  },
];


function Article() {
  return (
    <>
      <section className="wrapper">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">3 Easy Steps and Get Your Solution</h1>
            </Col>
          </Row>
        </Container>
        <div className="article_wrapper">
          <Container>
            <Row className="justify-content-center">
              {
                articleData.map((card, index) =>(
                  <Col key={index} lg={4} className="mb-4 text-center article_col_box">
                    <div className="article_div_box text-center" style={{ background: card.background }}>
                      <img src={card.image} alt="" className="img-fluid" style={{ width: card.width, height: card.height }} />
                    </div>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </div>
        <div className="article_down">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="article_down_img">
                  <img src={QualityDoctor} alt="" className="img-fluid" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="article_down_text">
                  <h2>Best quality service with our experience doctors</h2>
                  <p>
                    With our top doctors, we are able to provide best medical services above average We have highly experienced doctors, so don't worry They are also very talented in their fields
                  </p>
                  <ul>
                    <li>Search your specialist & Online consultations anywhere</li>
                    <li>Consultation our top specialists</li>
                    <li>Doctors are available 24/7</li>
                  </ul>
                  <Button
                    variant="primary"
                    className="article_bottom mt-3"
                    type="submit"
                    style={{ backgroundColor: "#40A3F8", 
                      color: "FFFFFF", 
                      fontSize:"0.9rem",      
                      display: "flex", 
                      alignItems: "center",
                      justifyContent: "flex-end" }}
                    >
                    Explore specialists
                    <span style={{ marginLeft: "5px",color:"#fff" }}>
                      <i className="bi bi-arrow-right"></i>                    
                    </span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Article;
