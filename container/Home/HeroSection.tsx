import React, { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { BsClock, BsFacebook, BsGeoAlt, BsInstagram, BsLine } from 'react-icons/bs';
import { intro, openingHours, setting } from '@/test';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const homeIntro = intro.filter(item => item.pagelist === 'home');
  const today = new Date().toLocaleDateString(); // get today's date in the format of 'yyyy-mm-dd'
  const currentDay = openingHours.find((item) => item.day === today || item.sevenDay === new Date().toLocaleDateString('en-US', { weekday: 'long' }));
  const addressShow = setting[0];

  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          {homeIntro?.map((homeIntro) => (
            <Col key={homeIntro.pagelist} className="mt-lg-auto mb-lg-5 text-center">
              <h3 className='f-c-gold f-s-philosopher' data-aos="fade-down" data-aos-easing="ease">{homeIntro?.title}</h3>
              <h1 className="f-c-gold mb-lg-5 mb-md-3" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="300">{homeIntro?.srcipOne}</h1>
              <h1 className="f-c-gold mb-lg-5 mb-md-3" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="600">{homeIntro?.srcipTwo}</h1>
              <Link className="gold smoothscroll " href="/about" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="600">
                {homeIntro?.textButton}
              </Link>
            </Col>
          ))}
          <Col lg={12} className="mt-auto d-flex flex-column flex-lg-row text-center"  data-aos="fade-down" data-aos-easing="ease">
            <div className="date-wrap">
              <h5 className="text-white">
                <i className="custom-icon me-2"><BsClock /></i>
                {currentDay?.opening} -   {currentDay?.closed}
              </h5>
            </div>
            <div className="location-wrap mx-auto py-3 py-lg-0" >
              <h5 className="text-white">
                <i className="custom-icon me-2"> <BsGeoAlt /></i>
                {addressShow?.addressOne + " " + addressShow?.addressTwo + " " + addressShow?.addressThree + " " + addressShow?.city + " " + addressShow?.postalCode}
              </h5>
            </div>

            <div className="social-share" >
              <ul className="social-icon d-flex align-items-center justify-content-center">
                <span className="text-white me-3">Share:</span>

                <li className="social-icon-item">
                  <Link href={addressShow?.facebookLink} className="social-icon-link">
                    <BsFacebook />
                  </Link>
                </li>

                <li className="social-icon-item">
                  <Link href={addressShow?.intragarmLink} className="social-icon-link ">
                    <BsInstagram />
                  </Link>
                </li>

                <li className="social-icon-item">
                  <Link href={addressShow?.lineLinK} className="social-icon-link ">
                    <BsLine />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="video-wrap">
        <Carousel className="custom-video" controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/gallery/18.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/gallery/8.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/gallery/16.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
