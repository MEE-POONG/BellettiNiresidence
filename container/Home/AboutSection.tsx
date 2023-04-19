import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import { intro } from '@/test';
import { BsBook } from 'react-icons/bs';
import Link from 'next/link';

const AboutSection = () => {
  const aboutIntro = intro.filter(item => item.pagelist === 'about');
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="about-section section-padding" id="section_2">
      <Container>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">

              <h1 className="f-s-philosopher mb-4" data-aos="fade-right">{aboutIntro[0].title}</h1>

              <p data-aos="fade-right">
                {aboutIntro[0].srcipOne}
              </p>

              <h6 className=" mt-4" data-aos="fade-right">{aboutIntro[1]?.title}</h6>

              <p data-aos="fade-right">
                {aboutIntro[1]?.srcipOne}
              </p>

              <h6 className=" mt-4" data-aos="fade-right">{aboutIntro[2]?.title}</h6>

              <p data-aos="fade-right">{aboutIntro[2]?.srcipOne}</p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-text-wrap" data-aos="fade-left">
              <img src={"images/gallery/18.jpg"} className="about-image img-fluid" />

              <div className="about-text-info d-flex">
                <div className="d-flex">
                  <i className="about-text-icon"><BsBook /></i>
                </div>

                <div className="ms-4">
                  <Link href="about" ><h3>Get to know Click</h3></Link>

                  <p className="mb-0">Stevia and the brand leader</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
