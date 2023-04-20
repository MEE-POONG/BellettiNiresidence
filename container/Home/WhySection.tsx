import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface WhyChooseUsProps {}

const WhySection: React.FC<WhyChooseUsProps> = () => {
  return (
    <Container fluid className="container-xxl py-5">
      <Container>
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="text-primary text-uppercase mb-2">Why Choose Us!</p>
          <h1 className="display-6 mb-5">The Leading Photo Studio In The Country</h1>
        </div>
        <Row className="g-3">
          <Col lg={4} md={6} className="pt-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="fact-item bg-light text-center h-100 p-5">
              <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">
                35
              </h1>
              <h4 className="mb-3">Award Winning</h4>
              <span>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </span>
            </div>
          </Col>
          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="fact-item bg-light text-center h-100 p-5">
              <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">
                45
              </h1>
              <h4 className="mb-3">Years Experience</h4>
              <span>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </span>
            </div>
          </Col>
          <Col lg={4} md={6} className="pt-lg-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="fact-item bg-light text-center h-100 p-5">
              <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">
                12345
              </h1>
              <h4 className="mb-3">Happy Clients</h4>
              <span>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhySection;
