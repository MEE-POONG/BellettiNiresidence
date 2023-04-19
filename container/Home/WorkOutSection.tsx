import React, { FC, useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { WorkOut } from '../../data/test';
type WorkOutItem = {
  id: string;
  exercise: string;
  img: string;
  Posture: string;
  burn: string;
  do: string;
  youtubeLink: string;
};
const WorkOutSection: FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const firstThreeWorkouts = WorkOut.slice(0, 3);
  return (
    <section className="workout-section section-padding" id="section_3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="f-s-philosopher mb-4" data-aos="fade-up">Work Out</h1>
          </Col>
          <Col lg={5} xs={12}>
            <div className="artists-thumb" data-aos="fade-up-right">
              <div className="artists-image-wrap">
                <img src={firstThreeWorkouts[0]?.img} className="artists-image img-fluid" />
              </div>
              <div className="artists-hover">
                <p>
                  <strong>exercise:</strong>
                  {firstThreeWorkouts[0]?.exercise}
                </p>
                <p>
                  <strong>Posture:</strong>
                  {firstThreeWorkouts[0]?.Posture}
                </p>

                <p>
                  <strong>Burn:</strong>
                  {firstThreeWorkouts[0]?.burn}

                </p>

                <p>
                  <strong>Do:</strong>
                  {firstThreeWorkouts[0]?.do}
                </p>
                <hr />
                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href={firstThreeWorkouts[0]?.youtubeLink} className="text-center mx-1 px-4">Read</a>
                  <a href={firstThreeWorkouts[0]?.youtubeLink} className="text-center mx-1 px-4">watch</a>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5} xs={12}>
            <div className="artists-thumb" data-aos="fade-down-left">
              <div className="artists-image-wrap">
                <img src="images/gallery/IMG_2292.jpg" className="artists-image img-fluid" />
              </div>

              <div className="artists-hover">
                <p>
                  <strong>exercise:</strong>
                  {firstThreeWorkouts[1]?.exercise}
                </p>
                <p>
                  <strong>Posture:</strong>
                  {firstThreeWorkouts[1]?.Posture}
                </p>

                <p>
                  <strong>Burn:</strong>
                  {firstThreeWorkouts[1]?.burn}

                </p>

                <p>
                  <strong>Do:</strong>
                  {firstThreeWorkouts[1]?.do}
                </p>

                <hr />

                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href={firstThreeWorkouts[1]?.youtubeLink} className="text-center mx-1 px-4">Read</a>
                  <a href={firstThreeWorkouts[1]?.youtubeLink} className="text-center mx-1 px-4">watch</a>
                </p>

              </div>
            </div>

            <div className="artists-thumb" data-aos="fade-up-left">
              <img src="images/gallery/8.jpg" className="artists-image img-fluid" />

              <div className="artists-hover">
                <p>
                  <strong>exercise:</strong>
                  {firstThreeWorkouts[2]?.exercise}
                </p>
                <p>
                  <strong>Posture:</strong>
                  {firstThreeWorkouts[2]?.Posture}
                </p>

                <p>
                  <strong>Burn:</strong>
                  {firstThreeWorkouts[2]?.burn}

                </p>

                <p>
                  <strong>Do:</strong>
                  {firstThreeWorkouts[2]?.do}
                </p>
                <hr />
                <p className="mb-0">
                  <strong>Youtube Channel:</strong>
                  <a href={firstThreeWorkouts[2]?.youtubeLink} className="text-center mx-1 px-4">Read</a>
                  <a href={firstThreeWorkouts[2]?.youtubeLink} className="text-center mx-1 px-4">watch</a>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12} className='text-end'>
            <Link className="link-fx-1 color-contrast-higher mt-4 f-c-gold " href="blog">
              <h3 className='f-c-gold'>
                <span>See More</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkOutSection;