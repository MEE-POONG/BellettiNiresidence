import Link from "next/link";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { BsTwitter, BsApple, BsInstagram, BsYoutube, BsPinterest } from 'react-icons/bs';
const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black border-top border-dark">
        <div className="site-footer-top">
          <Container>
            <Row>
              <Col lg={6} xs={12}>
                <h2 className="text-dark f-s-philosopher mb-lg-0">T Active Stevia</h2>
              </Col>

              <Col lg={6} xs={12} className="d-flex justify-content-lg-end align-items-center">
                <ul className="social-icon d-flex justify-content-lg-end">
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <BsTwitter />
                    </a>
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <BsApple />
                    </a>
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <BsInstagram />
                    </a>
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <BsYoutube />
                    </a>
                  </li>

                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <BsPinterest />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>

        </div>
        <Container>
          <Row>
            <Col lg={6} className="mb-4 pb-2">
              <h5 className="site-footer-title mb-3">Links</h5>
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Home</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">About</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Artists</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Schedule</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Pricing</a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 className="site-footer-title mb-3">Have a question?</h5>
              <p className="text-white d-flex mb-1">
                <a href="tel: 090-080-0760" className="site-footer-link">090-080-0760</a>
              </p>
              <p className="text-white d-flex">
                <a href="mailto:hello@company.com" className="site-footer-link">hello@company.com</a>
              </p>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0 mb-md-0">
              <h5 className="site-footer-title mb-3">Location</h5>
              <p className="text-white d-flex mt-3 mb-2">
                46/4 Ratchanikun, Nai Mueang, Nakhon Ratchasima 30000
              </p>
              <a className="link-fx-1 color-contrast-higher mt-3" href="#">
                <span>Our Maps</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </Col>
          </Row>
        </Container>
        <div className="site-footer-bottom">
          <Container>
            <Row>
              <Col lg={3} xs={12} className="mt-5">
                <p className="copyright-text">
                  Copyright © 2036 ME PROMPT TECHNOLOGY COMPANY LIMITED
                </p>
                <p className="copy-text">
                  Distributed by:{' '}
                  <Link href="https://themewagon.com">ThemeMePromt</Link>
                </p>
              </Col>
              <Col lg={8} xs={12} className="mt-lg-5">
                <ul className="site-footer-links">
                  <li className="site-footer-link-item">
                    <Link href="#" className="site-footer-link">
                      Terms &amp; Conditions
                    </Link>
                  </li>

                  <li className="site-footer-link-item">
                    <Link href="#" className="site-footer-link">
                      Privacy Policy
                    </Link>
                  </li>

                  <li className="site-footer-link-item">
                    <Link href="#" className="site-footer-link">
                      Your Feedback
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;