import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectCoverflow, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import SwiperCore from 'swiper';

// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/Service.css';
import Diagnostics from "../../assets/service/diagnostics.png";
import Organs from "../../assets/service/organs.png";
import Medicine from "../../assets/service/medicine.png";

// SwiperCore.use([Pagination]);

// const Service = () => {
//   const [slidesPerView, setSlidesPerView] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth >= 992) {
//         setSlidesPerView(3); // Для больших экранов отображаем 3 слайда
//       } else if (screenWidth >= 768) {
//         setSlidesPerView(2); // Для средних экранов отображаем 2 слайда
//       } else {
//         setSlidesPerView(1); // Для маленьких экранов отображаем 1 слайд
//       }
//     };

//   handleResize(); // Вызываем функцию сразу при загрузке компонента

//   window.addEventListener("resize", handleResize); // Добавляем слушатель события изменения размеров окна

//   return () => {
//     window.removeEventListener("resize", handleResize); // Удаляем слушатель при размонтировании компонента
//   };
// }, []);

const serviceData = [
  {
    id:1,
    image:Diagnostics,
    background:'var(--service-first-background)',
    width:'108px',
    height:'72px',
    title:'Cardiology',
    text:'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.'
  },
  {
    id:2,
    image:Organs,
    background:'var(--white)',
    width:'77px',
    height:'77px',
    title:'Pulmonology',
    text:'Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system.'
  },
  {
    id:3,
    image:Medicine,
    background:'var(--service-second-background)',
    width:'74px',
    height:'78px',
    title:'Medicine',
    text:'Our medicine doctor are skilled at  diagnosing treating diseases of the  latest medicine system.'
  },
  {
    id:4,
    image:Diagnostics,
    background:'var(--service-first-background)',
    width:'108px',
    height:'72px',
    title:'Cardiology',
    text:'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.'
  },
  {
    id:5,
    image:Organs,
    background:'var(--white)',
    width:'77px',
    height:'77px',
    title:'Pulmonology',
    text:'Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system.'
  },
  {
    id:6,
    image:Medicine,
    background:'var(--service-second-background)',
    width:'74px',
    height:'78px',
    title:'Medicine',
    text:'Our medicine doctor are skilled at  diagnosing treating diseases of the  latest medicine system.'
  },
];


function Service() {
  // useEffect(() => {
    // После того как компонент загружен, найдем элемент пагинации и удалим у него стиль position
  //   const pagination = document.querySelector('.swiper-pagination');
  //   if (pagination) {
  //     pagination.style.position = 'unset';
  //   }
  // }, []);

  return (
    <>
      <section className="section_wrapper text-center">
        <div className="service_content mt-5">
          <Container>
            <Row>
              <Col>
                <h2>Our Service</h2>
                <p>
                  Our doctors have high qualified skills and are guaranteed <br /> 
                  to help you recover from your disease.
                </p>
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
                  effect="coverflow"
                  effect4="flip"
                  className="swiper-container"
                  spaceBetween={10}
                  centeredSlides={true}
                  slidesPerView={3}
                  slidesPerGroup={2}
                  // direction="horizontal"
                  // navigation={{ clickable: true, }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                            768: { slidesPerView: 1 },
                            992: { slidesPerView: 2 }
                          }}
                  // scrollbar={{ draggable: true }}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                      serviceData.map( (user) => (
                        <Col>
                          <SwiperSlide key={user.id} className="slide">
                            <div className="slide_content_sevice" style={{ background: user.background }}>
                              <div className="user_image">
                                <img src={user.image} alt="" className="user_photo img-fluid" style={{ width: user.maxWidth, height: user.maxHeight }} />
                              </div>
                              <h5>{user.title}</h5>
                              <p>{user.text}</p>
                            </div>
                            {(user.id === 2 || user.id === 5) && (
                              <div className="progressbar"></div>
                            )}
                          </SwiperSlide>
                        </Col>
                      ))
                    }
                  </Swiper>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
