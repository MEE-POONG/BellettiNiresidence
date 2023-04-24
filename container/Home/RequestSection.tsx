import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface RequestProps { }

const RequestSection: React.FC<RequestProps> = () => {
  return (
    <Container fluid className="container-xxl py-5">
      <Container>
        <Row className="g-5">
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <Row className="g-3 img-twice position-relative h-100">
              <Col xs={6}>
                <img className="img-fluid bg-light p-3" src="images/requset-1.jpg" alt="" />
              </Col>
              <Col xs={6} className="align-self-end">
                <img className="img-fluid bg-light p-3" src="images/requse-2.jpg" alt="" />
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <p className="text-primary text-uppercase mb-2">Request a Call Back?</p>
              <h3 className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</h3>
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
              <Button className="btn-primary py-3 px-5" href="/inquire">
                Read More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default RequestSection;
