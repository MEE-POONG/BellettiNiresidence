import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

interface FooterProps { }

const Footer: React.FC = () => {

  return (
    <footer>
      <Container fluid className="position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5">
        <Row className="g-5 py-5">
          <Col lg={6} className="pe-lg-5 text-white">
            <Link href="/" className="navbar-brand">
              <Image src="images/logo.png" alt="logo" height={150} className='logo' />
            </Link>
            <p>บริหารโคราการ บริษัท ไพลิน แลนด์ แอนด์ ดีเวลลอปเมนท์ จำกัด</p>
            <p><FaMapMarkerAlt className="me-2" />46/4 ถนนราชนิกูล ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา 30310</p>
            <p><FaPhoneAlt className="me-2" />+012 345 67890</p>
            <p><FaEnvelope className="me-2" />info@example.com</p>
            <div className="d-flex justify-content-start mt-4">
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaTwitter /></Button>
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaFacebookF /></Button>
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaLinkedinIn /></Button>
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaInstagram /></Button>
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
