import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  const handleDirectionsClick = () => {
    router.push('https://goo.gl/maps/wZVGLA7q64uC1s886');
  };

  return (
    <footer className="site-footer section-padding">
      <Container>
        <Row>
          <Col xs={12}>
            <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
          </Col>

          <Col lg={4} md={7} xs={12} className="tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Location</h6>

            <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

            <Button variant="dark" className="mt-2" onClick={handleDirectionsClick}>
              Directions
            </Button>
          </Col>

          <Col lg={4} md={5} xs={12} className="tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>

            <p className="mb-2">Monday - Friday</p>

            <p>10:00 AM - 08:00 PM</p>

            <p>
              Tel:{' '}
              <a href="tel:010-02-0340" className="tel-link">
                010-02-0340
              </a>
            </p>
          </Col>

          <Col lg={4} md={6} xs={12} className="tooplate-mt30">
            <h6 className="text-white mb-lg-4 mb-3">Social</h6>

            <ul className="social-icon">
              {/* Replace the '#' with your desired social media links */}
              <li>
                <a href="#" className="social-icon-link bi-facebook"></a>
              </li>

              <li>
                <a href="#" className="social-icon-link bi-instagram"></a>
              </li>

              <li>
                <a
                  href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live"
                  target="_blank"
                  className="social-icon-link bi-twitter"
                ></a>
              </li>

              <li>
                <a href="#" className="social-icon-link bi-youtube"></a>
              </li>
            </ul>

            <p className="copyright-text tooplate-mt60">
              Copyright © 2022 Crispy Kitchen Co., Ltd.
              <br />
              Design:{' '}
              <a
                rel="nofollow"
                href="https://www.tooplate.com/"
                target="_blank"
              >
                Tooplate
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
