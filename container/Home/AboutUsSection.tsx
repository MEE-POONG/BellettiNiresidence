import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface AboutUsProps {}

const AboutUsSection: React.FC<AboutUsProps> = () => {
  return (
    <Container fluid className="container-xxl py-5">
      <Container>
        <Row className="g-5">
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <Row className="g-3 img-twice position-relative h-100">
              <Col xs={6}>
                <img className="img-fluid bg-light p-3" src="images/about-1.jpg" alt="" />
              </Col>
              <Col xs={6} className="align-self-end">
                <img className="img-fluid bg-light p-3" src="images/about-2.jpg" alt="" />
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <p className="text-primary text-uppercase mb-2">About Us</p>
              <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Row className="g-2 mb-4">
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Quality Products
                </Col>
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Custom Products
                </Col>
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Online Order
                </Col>
                <Col sm={6}>
                  <i className="fa fa-check text-primary me-3"></i>Home Delivery
                </Col>
              </Row>
              <Button className="btn-primary py-3 px-5" href="">
                Read More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUsSection;
