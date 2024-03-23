import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../../styles/Mobile.css';

import storeApple from '../../assets/mobile/appstore.png';
import storeGoogle from '../../assets/mobile/googleplay.png';
import mobileImg from '../../assets/mobile/mobile.png';


function Mobile() {
  return (
    <>
      <section className="section_mobile">
        <Container>
          <Row>
            <Col lg={6} md={12} ms={12} className="my-auto">
              <div className="d-flex justify-content-center align-items-center">
                <img src={mobileImg} alt="e-shop" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} md={12} ms={12} className="mb-5 my-auto mobile_content">
              <h2>Mobile apps are available
                  <br />
                  Get HealthCare for free!
              </h2>
              <p>
                Get on-demand access to a doctor on your phone with the
                <br />
                free HealthCare mobile app. Download and register on our
                <br />
                app for free and feel safe for all your family              
              </p>
              <div className="shop-elems d-flex">
                <Link to="/">
                  <img src={storeApple} alt="apple" className="store img-fluid" />
                </Link>
                <Link to="/">
                  <img src={storeGoogle} alt="apple" className="store img-fluid" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Mobile;
