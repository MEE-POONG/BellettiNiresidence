import React, { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { BsClock, BsFacebook, BsGeoAlt, BsInstagram, BsLine } from 'react-icons/bs';
import { intro, openingHours, setting } from '@/test';

const HeroSection: React.FC = () => {
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
    <section className="hero" id="section_1">
      <div className="section-overlay"></div>
      <Container>
        <Row>
          <Col lg={5} xs={12} className="m-auto">
            <div className="heroText">
              <h1 className="text-white mb-lg-5 mb-3">Bellettini Residence</h1>
            </div>
          </Col>
          <Col lg={7} xs={12}>
            <Carousel fade>
              <Carousel.Item>
                <div className="carousel-image-wrap">
                  <img
                    src="./assets/images/condo_slide/710_0003-1024x683.jpg"
                    className="img-fluid carousel-image"
                    alt=""
                  />
                </div>

                <Carousel.Caption>
                  <h4 className="hero-text">Type A</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-image-wrap">
                  <img
                    src="./assets/images/condo_slide/710_0025-1024x683.jpg"
                    className="img-fluid carousel-image"
                    alt=""
                  />
                </div>

                <Carousel.Caption>
                  <div className="d-flex align-items-center">
                    <h4 className="hero-text">Type B</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-image-wrap">
                  <img
                    src="./assets/images/condo_slide/710_0027-1024x704.jpg"
                    className="img-fluid carousel-image"
                    alt=""
                  />
                </div>

                <Carousel.Caption>
                  <div className="d-flex align-items-center">
                    <h4 className="hero-text">Type C</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <div className="video-wrap">
        <video autoPlay loop muted className="custom-video" poster="">
          <source
            src="./assets/video/production_ID_3769033.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
