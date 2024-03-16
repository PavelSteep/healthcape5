import React from "react";
import {Link} from 'react-router-dom';
import {Col, Card} from 'react-bootstrap';
import "../../styles/Cards.css";

import Fb from '../../assets/doctors/Fb.png';
import Tw from '../../assets/doctors/Tw.png';
import Ld from '../../assets/doctors/Ld.png';

function Cards({image, title, text, width, height, paddingTop }) {
  return (
    <>
      <Col lg={4} xl={3} className="mb-4">
        <Card>
          <div className="cards_image">
            <Card.Img 
              className="card_image" 
              variant="top" src={image} 
              style={{ width: width, height: height, paddingTop: paddingTop }} 
            />
          </div>
          <Card.Body className="card_content">
            <Card.Title className="card_title">{title}</Card.Title>
            <Card.Text className="card_text">{text}</Card.Text>
            <div className="add_to_cart">
              <Link to="/">
                <Card.Img variant="top" src={Fb} />
                <Card.Img variant="top" src={Tw} />
                <Card.Img variant="top" src={Ld} />
              </Link>
          </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Cards;


