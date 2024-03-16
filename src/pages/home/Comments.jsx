import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectCoverflow, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../styles/Comments.css';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Quote from '../../assets/comments/quote.png';
import Woman from '../../assets/comments/woman.png';
import Man from '../../assets/comments/man.png';
import DoctorW from '../../assets/comments/doctor_w.png';
import StarRating from '../../components/Layouts/StartRating';


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

  // const handlePrev = () => {
  //   const swiper = document.querySelector('.swiper-container').swiper;
  //   swiper.slidePrev();
  // };

  // const handleNext = () => {
  //   const swiper = document.querySelector('.swiper-container').swiper;
  //   swiper.slideNext();
  // };


  return (
    <>
      <section className="section_wrapper_comments text-center">
        <div className="comments_content mt-5">
            <Container>
              <Row>
                <Col>
                  <h2>Look our Clients have to say about us</h2>
                </Col>
              </Row>
            </Container>
            <div className="service_wrapper_slider">
              <Container>
                <Row>
                  <div>
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectCoverflow, EffectFlip]}
                      effect1="fade"
                      effect2="cube"
                      effect3="coverflow"
                      effect4="flip"
                      className="swiper-container"
                      spaceBetween={10}
                      centeredSlides={true}
                      slidesPerView={3}
                      slidesPerGroup={2}
                      // direction="horizontal"
                      navigation={{ 
                        clickable: true,
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next' 
                        }}
                      // pagination={{ clickable: true }}
                      breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        320: { slidesPerView: 1 }
                          }}
                    >
                         {
                          commentsData.map( (comment) => (
                            <Col>
                              <SwiperSlide key={comment.id} className="slide">
                                <div className="slide_content_comment">
                                  <div className="quote_icon">
                                    <img src={Quote} alt="Quote Icon" className="quote_icon_img" />
                                  </div>
                                  <div className="comment_image">
                                    <img src={comment.image} alt="" className="comment_photo img-fluid" />
                                  </div>
                                  <div className="comment_details text-start">
                                    <h3>{comment.name}</h3>
                                    <StarRating rating={comment.rating} />
                                    <h5>{comment.country}</h5>
                                    <p>{comment.text}</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Col>
                          ))
                        }
                        <div
                            className="swiper-button-prev"
                            style={{ fontSize: '10px' }}
                        />
                        <div
                            className="swiper-button-next"
                            style={{ fontSize: '10px' }}
                        />
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                        {/* <div className="custom-prev" onClick={handlePrev}>
                          <BsChevronLeft />
                        </div>
                        <div className="custom-next" onClick={handleNext}>
                          <BsChevronRight />
                        </div> */}
                  </div>
                </Row>
              </Container>
            </div>
        </div>
      </section>
    </>
  );
}


export default Comments;

