import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../styles/Service.css';
import Diagnostics from "../../assets/service/diagnostics.png";
import Organs from "../../assets/service/organs.png";
import Medicine from "../../assets/service/medicine.png";


const serviceData = [
  {
    id:1,
    image:Diagnostics,
    background:'var(--service-first-background)',
    width:'108px',
    height:'72px',
    title:'Cardiology',
    text:'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.',
    showProgressBar: false
  },
  {
    id:2,
    image:Organs,
    background:'var(--white)',
    width:'77px',
    height:'77px',
    title:'Pulmonology',
    text:'Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system.',
    showProgressBar: true
  },
  {
    id:3,
    image:Medicine,
    background:'var(--service-second-background)',
    width:'74px',
    height:'78px',
    title:'Medicine',
    text:'Our medicine doctor are skilled at  diagnosing treating diseases of the  latest medicine system.',
    showProgressBar: false
  },
  {
    id:4,
    image:Diagnostics,
    background:'var(--service-first-background)',
    width:'108px',
    height:'72px',
    title:'Cardiology',
    text:'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.',
    showProgressBar: false
  },
  {
    id:5,
    image:Organs,
    background:'var(--white)',
    width:'77px',
    height:'77px',
    title:'Pulmonology',
    text:'Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system.',
    showProgressBar: true
  },
  {
    id:6,
    image:Medicine,
    background:'var(--service-second-background)',
    width:'74px',
    height:'78px',
    title:'Medicine',
    text:'Our medicine doctor are skilled at  diagnosing treating diseases of the  latest medicine system.',
    showProgressBar: false
  },
];


function Service() {
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
  const visibleImages = Math.min(serviceData.length, windowWidth >= 992 ? 3 : (windowWidth >= 768 ? 2 : 1));

  // Переход к следующему слайду
const nextSlide = () => {
  setDirection('next'); // Устанавливаем направление перемещения
  setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
};

// Переход к предыдущему слайду
const prevSlide = () => {
  setDirection('prev'); // Устанавливаем направление перемещения
  setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceData.length) % serviceData.length);
};

// Сброс индекса к текущему видимому диапазону при достижении края карусели
useEffect(() => {
  if (direction === 'next' && currentIndex === serviceData.length - visibleImages) {
    setCurrentIndex(0);
  } else if (direction === 'prev' && currentIndex === 0) {
    setCurrentIndex(serviceData.length - visibleImages);
  }
}, [currentIndex, direction, visibleImages]);


  return (
    <section className="section_wrapper_service text-center">
      <div className="service_content">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h2>Our Service</h2>
              <p>
                Our doctors have high qualified skills and are guaranteed <br />
                to help you recover from your disease.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="carousel-container">
          <Container>
            <Row>
              <Col lg={12} md={12} ms={12} className="my-auto">
              <div className="carousel" style={{ display: 'flex', width: '100%', }}>
                  {serviceData.map((service, index) => (
                    <div key={index} className={`service-slide ${service.showProgressBar ? 'with-progress-bar' : ''}`} style={{ flex: `0 0 ${100 / visibleImages}%`, display: index >= currentIndex && index < currentIndex + visibleImages ? 'block' : 'none' }}>
                      <div className="slide_content_service unselectable" style={{ background: service.background }}>
                        <div className="service_image unselectable mb-3">
                          <img src={service.image} alt="" className="service_photo img-fluid" style={{ width: service.width, height: service.height }} />
                        </div>
                        <div className="service_details unselectable text-center">
                          <h5>{service.title}</h5>
                          <p>{service.text}</p>
                        </div>
                        {/* <div className="custom-bar"></div> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="carousel-controls">
                  <div className="circle left" onClick={prevSlide}></div>
                  <div className="circle right" onClick={nextSlide}></div>
                </div>              
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
  
export default Service;

