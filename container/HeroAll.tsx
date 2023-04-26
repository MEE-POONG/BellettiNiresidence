import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Carousel, Button, Image, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import Link from 'next/link';

const HeroAll: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Container fluid className="hero-header bg-light py-5 mb-5">
      <Container className="">
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-4 mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <Breadcrumb className="mb-0">
                <Link href="/" className='breadcrumb-item'>Home</Link>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
              </Breadcrumb>
            </nav>
          </Col>
          <Col lg={6} className="">
            <Row className="g-3">
              <Col xs={6} className="text-end">
                <Image className="img-fluid bg-white p-3 w-100" src="images/hero-1.jpg" alt="" />
              </Col>
              <Col xs={6}>
                <Image className="img-fluid bg-white p-3 w-100" src="images/hero-2.jpg" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroAll;
