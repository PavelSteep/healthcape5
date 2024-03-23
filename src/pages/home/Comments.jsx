import React, { useState, useEffect } from 'react';
import '../../styles/Comments.css';

import { Container, Row, Col } from "react-bootstrap";
import StarRating from '../../components/Layouts/StartRating';

import Quote from '../../assets/comments/quote.png';
import Woman from '../../assets/comments/woman.png';
import Man from '../../assets/comments/man.png';
import DoctorW from '../../assets/comments/doctor_w.png';

const commentsData = [
  {
    id: 1,
    image: DoctorW,
    name: 'Alan Zara dilan',
    rating: 4.5,
    country: 'New York, America, USA',
    text: 'Telehealth is fueled by digital technologies and DocTime telemedicine app has brought a great revolution in medical services specially an overpopulated country where virtual chamber can create at anywhere throughout country.',
  },
  {
    id: 2,
    image: Man,
    name: 'Alex Maxwell',
    rating: 4.5,
    country: 'San Francisco, USA',
    text: 'I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time.',
  },
  {
    id: 3,
    image: Woman,
    name: 'Dr. Tasnim zara',
    rating: 4.5,
    country: 'Los Angeles, USA',
    text: 'HealthCare is enlightens my superpower each and every time...! I find DocTime a brand-able telemedicine platform with virtual waiting room, video consultation, e-prescription, beautifully planned user interface. Thank you.',
  },
  {
    id: 4,
    image: DoctorW,
    name: 'Alan Zara dilan',
    rating: 4.5,
    country: 'New York, America, USA',
    text: 'Telehealth is fueled by digital technologies and DocTime telemedicine app has brought a great revolution in medical services specially an overpopulated country where virtual chamber can create at anywhere throughout country.',
  },
  {
    id: 5,
    image: Man,
    name: 'Alex Maxwell',
    rating: 4.5,
    country: 'San Francisco, USA',
    text: 'I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time.',
  },
  {
    id: 6,
    image: Woman,
    name: 'Dr. Tasnim zara',
    rating: 4.5,
    country: 'Los Angeles, USA',
    text: 'HealthCare is enlightens my superpower each and every time...! I find DocTime a brand-able telemedicine platform with virtual waiting room, video consultation, e-prescription, beautifully planned user interface. Thank you.',
  },
];


function Comments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [direction, setDirection] = useState(null); // Состояние для отслеживания направления перемещения карусели

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Количество изображений, которые будут отображаться на экране в зависимости от ширины окна
  const visibleImages = Math.min(commentsData.length, windowWidth >= 992 ? 3 : (windowWidth >= 768 ? 2 : 1));

 // Переход к следующему слайду
const nextSlide = () => {
  setDirection('next'); // Устанавливаем направление перемещения
  setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
};

// Переход к предыдущему слайду
const prevSlide = () => {
  setDirection('prev'); // Устанавливаем направление перемещения
  setCurrentIndex((prevIndex) => (prevIndex - 1 + commentsData.length) % commentsData.length);
};

  // Сброс индекса к текущему видимому диапазону при достижении края карусели
  useEffect(() => {
    if (direction === 'next' && currentIndex === commentsData.length - visibleImages) {
      setCurrentIndex(0);
    } else if (direction === 'prev' && currentIndex === 0) {
      setCurrentIndex(commentsData.length - visibleImages);
    }
  }, [currentIndex, direction, visibleImages]);


  return (
    <section className="section_wrapper_comments text-center">
      <div className="comments_content">
        <Container>
          <Row>
            <Col>
              <h2>Look our Clients have to say about us</h2>
            </Col>
          </Row>
        </Container>
        <div className="carousel-container">
          <Container>
            <Row>
              <Col ms={12} md={12} lg={12} className="my-auto">
                <div className="arrow left unselectable" onClick={prevSlide} style={{ textAlign: 'center' }} >{'<'}</div>
                  <div className="carousel" style={{ display: 'flex', width: '100%', }}>
                    {commentsData.map((comment, index) => (
                      <div key={index} style={{ flex: `0 0 ${100 / visibleImages}%`, display: index >= currentIndex && index < currentIndex + visibleImages ? 'block' : 'none' }}>
                        <div className="slide_content_comment">
                          <div className="quote_icon">
                            <img src={Quote} alt="Quote Icon" className="quote_icon_img" />
                          </div>
                          <div className="comment_image unselectable">
                            <img src={comment.image} alt={`Slide ${index}`} className="comment_photo unselectable img-fluid" />
                          </div>
                          <div className="comment_details unselectable text-start">
                            <h3>{comment.name}</h3>
                            <StarRating rating={comment.rating} />
                            <h5>{comment.country}</h5>
                            <p>{comment.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                <div className="arrow right unselectable" onClick={nextSlide}>{'>'}</div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Comments;
