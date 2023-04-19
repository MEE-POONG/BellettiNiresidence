import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="hero">
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
                  <img src="./assets/images/condo_slide/710_0003-1024x683.jpg" className="img-fluid carousel-image" alt="" />
                </div>
                <Carousel.Caption>
                  <h4 className="hero-text">Type A</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-image-wrap">
                  <img src="./assets/images/condo_slide/710_0025-1024x683.jpg" className="img-fluid carousel-image" alt="" />
                </div>
                <Carousel.Caption>
                  <div className="d-flex align-items-center">
                    <h4 className="hero-text">Type B</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-image-wrap">
                  <img src="./assets/images/condo_slide/710_0027-1024x704.jpg" className="img-fluid carousel-image" alt="" />
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
          <source src="./assets/video/production_ID_3769033.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default HeroSection;
