import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

interface FooterProps { }

const Footer: React.FC = () => {

  return (
    <footer>
      <Container fluid className="position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Row className="g-5 py-5">
          <Col lg={6} className="pe-lg-5">
            <a href="index.html" className="navbar-brand">
              <h1 className="display-5 text-primary">Photozone</h1>
            </a>
            <p>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
            {/* <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />123 Street, New York, USA</p> */}
            {/* <p><FontAwesomeIcon icon={faPhoneAlt} className="me-2" />+012 345 67890</p> */}
            {/* <p><FontAwesomeIcon icon={faEnvelope} className="me-2" />info@example.com</p> */}
            <div className="d-flex justify-content-start mt-4">
              {/* <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FontAwesomeIcon icon={faTwitter} /></Button> */}
              {/* <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FontAwesomeIcon icon={faFacebookF} /></Button> */}
              {/* <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></Button> */}
              {/* <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FontAwesomeIcon icon={faInstagram} /></Button> */}
            </div>
          </Col>
          <Col lg={6} className="ps-lg-5">
            <Row className="g-5">
              <Col sm={6}>
                <h4 className="text-light mb-4">Quick Links</h4>
                <Button variant="link" className="text-reset p-0">About Us</Button><br />
                <Button variant="link" className="text-reset p-0">Contact Us</Button><br />
                <Button variant="link" className="text-reset p-0">Our Services</Button><br />
                <Button variant="link" className="text-reset p-0">Terms & Condition</Button><br />
                <Button variant="link" className="text-reset p-0">Support</Button>
              </Col>
              <Col sm={6}>
                <h4 className="text-light mb-4">Popular Links</h4>
                <Button variant="link" className="text-reset p-0">About Us</Button><br />
                <Button variant="link" className="text-reset p-0">Contact Us</Button><br />
                <Button variant="link" className="text-reset p-0">Our Services</Button><br />
                <Button variant="link" className="text-reset p-0">Terms & Condition</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
