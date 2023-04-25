import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface RequestProps { }

const RequestSection: React.FC<RequestProps> = () => {
  return (
    <div className='request'>
      <Container className="container-xxl py-5">
        <p className="text-primary text-uppercase mb-2 d-lg-none d-md-none text-center">Request a Call Back?</p>
        <Row className="g-5">
          <Col lg={8} md={6}>
            <div className='g-3 img-twice position-relative h-100'>
              <img className="img-fluid bg-light p-3" src="images/request-1.jpg" alt="" />
              <img className="img-fluid bg-light p-3" src="images/request-2.jpg" alt="" />
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="h-100">
              <p className="text-primary text-uppercase mb-2 d-lg-block d-md-block d-none">Request a Call Back?</p>
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
