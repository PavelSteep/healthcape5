import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/FooterStyle.css';
import Youtube from '../../assets/footer/Youtube.png';
import Instagram from '../../assets/footer/Instagram.png';
import Twitter from '../../assets/footer/Twitter.png';
import CombinedShape from '../../assets/footer/Combined Shape.png';


function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={5} lg={5}>
              <div className="one_text text-left">
                <h2>HEALTCARE.</h2>
                <p className="mb-3">Metairie, 3689  Bassel Street, LA, Louisiana</p>
                <p>
                  <Link to="tel:2257885489" className="calling">
                    Contact us: 225-788-5489
                  </Link>
                </p>
                <ul className="socials">
                  <li>
                    <Link to="/">
                    <div className="footer_img">
                      <img src={Youtube} alt="FemaleDoctor" className="img-fluid" />
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <div className="footer_img">
                      <img src={Instagram} alt="FemaleDoctor" className="img-fluid" />
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <div className="footer_img">
                      <img src={Twitter} alt="FemaleDoctor" className="img-fluid" />
                    </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <div className="footer_img">
                      <img src={CombinedShape} alt="FemaleDoctor" className="img-fluid" />
                    </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} lg={2}>
              <div className="two_text text-left">
                  <h5>Category</h5>
                  <p>Home</p>
                  <p>About</p>
                  <p>Services</p>
                  <p>Reviews</p>
                  <p>Article</p>
              </div>
            </Col>
            <Col md={2} lg={2}>
              <div className="three_text text-left">
                <h5>About</h5>
                <p>Partners</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Community</p>
              </div>            
            </Col>
            <Col md={2} lg={3}>
              <div className="four_text text-left">
                <h5>Subscribe newsletter</h5>
                <p>
                  Sign up for tips, new destinations, and
                  <br />
                   exclusive promos.
                </p>
                <Form>
                  <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Button
                  variant="primary"
                  className="article_bottom mt-4"
                  type="submit"
                  style={{ backgroundColor: "#40A3F8", 
                    color: "#FFFFFF", 
                    fontSize:"0.9rem",
                    padding:"10px",
                    width:'292px',
                    maxWidth:'292px',
                    height:'40px',      
                    display: "flex", 
                    alignItems: "center",
                    justifyContent: "center" }}
                  >
                    Subcribe
                  </Button>
                </Form>
              </div>            
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="footer_down">
              <div className="footer_left">
                <span>
                  © 2023 Healthcare - All rights reserved.
                </span>
              </div>
                <div className="footer_right">
                  <ul>
                    <li>
                      <Link to="/">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Security
                      </Link>                  
                    </li>
                    <li>
                      <Link to="/">
                        Terms
                      </Link>                  
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>   
    </>
  );
}

export default Footer;
