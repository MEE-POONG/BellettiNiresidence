import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Carousel, Button, Image } from 'react-bootstrap';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Container fluid className="hero-header bg-light py-5 mb-5">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <p className="text-primary text-uppercase mb-2 animated slideInDown">Welcome To Photozone</p>
            <h1 className="display-4 mb-3 animated slideInDown">Wedding And Portrait Studio Based in New York</h1>
            <p className="animated slideInDown">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="d-flex align-items-center pt-4 animated slideInDown">
              <Button href="" className="btn-primary py-3 px-4 me-5">
                Explore More
              </Button>
              {/* You may need to modify this button to work with React-Bootstrap's Modal component */}
              <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                <span></span>
              </button>
              <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
            </div>
          </Col>
          <Col lg={6} className="animated fadeIn">
            <Row className="g-3">
              <Col xs={6} className="text-end">
                <Image className="img-fluid bg-white p-3 w-100 mb-3" src="images/hero-1.jpg" alt="" />
                <img className="img-fluid bg-white p-3 w-50" src="images/hero-3.jpg" alt="" />
              </Col>
              <Col xs={6}>
                <img className="img-fluid bg-white p-3 w-50 mb-3" src="images/hero-4.jpg" alt="" />
                <img className="img-fluid bg-white p-3 w-100" src="images/hero-2.jpg" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroSection;
