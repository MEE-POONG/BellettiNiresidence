import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from 'react-slick';

interface RequestProps { }

const RequestSection: React.FC<RequestProps> = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <div className='d-none' />,
    prevArrow: <div className='d-none' />
  };
  return (
    <div className='request'>
      <Container className="container-xxl py-5">
        <p className="text-backblue text-uppercase mb-2 d-lg-none d-md-none text-center">Request a Call Back?</p>
        <Row className="g-5">
          <Col lg={8} md={6}>
            <div className='g-3 img-twice position-relative h-100'>
              <div className="img-fluid bg-light p-3">
                <Slider {...settings}>
                  <img src="images/hero-4.jpg" alt="" />
                  <img src="images/hero-5.jpg" alt="" />
                  <img src="images/hero-6.jpg" alt="" />
                </Slider>
              </div>
              <div className="img-fluid bg-light p-3">
                <Slider {...settings}>
                  <img src="images/hero-7.jpg" alt="" />
                  <img src="images/hero-8.jpg" alt="" />
                  <img src="images/hero-9.jpg" alt="" />
                </Slider>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="h-100">
              <p className="text-primary text-uppercase mb-2 d-lg-block d-md-block d-none">Request a Call Back?</p>
              <h3 className="mb-4 text-backblue">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</h3>
              <p>
                The residences welcome you home with spacious living areas, attentive design detail, contemporary appointments and views spanning the Cascades to Lake Washington.
              </p>
              <p>
                The residences welcome you home with spacious living areas, attentive design detail, contemporary appointments and views spanning the Cascades to Lake Washington.
              </p>
              <Row className="g-2 mb-4">
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Quality Room
                </Col>
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Custom Room
                </Col>
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Privacy
                </Col>
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Good Service
                </Col>
              </Row>
              <div className='text-center'>
                <Button className="btn-primary py-3 px-5" href="/inquire">
                  Read More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RequestSection;
