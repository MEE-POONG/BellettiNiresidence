import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import { intro, productList } from '../../data/test';
import Link from 'next/link';

interface SteviaProps {
  id: string;
  translateX: number;
  translateY: number;
}

const SteviaSection: React.FC<SteviaProps> = ({ id, translateX, translateY }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const elementRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  }, [translateX, translateY]);
  const productIntro = intro.filter(item => item.pagelist === 'stevia');
  const productsWithPromotion = productList;

  var settingsSlide = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <section className="stevia-section section-padding" id="section_5" >

      <Container className='what-stevia'>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="text-center f-s-philosopher m-0 f-c-gold" data-aos="flip-up" data-aos-delay="300">{productIntro[0]?.title}</h1>
            <h3 className='text-center'>{productIntro[0]?.srcipOne}</h3>
            <h3 className='text-center'>{productIntro[0]?.srcipTwo}</h3>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={4}>
            <div className="d-flex">
              <div className='text-center w-100' data-aos="zoom-in">
                <img src="/images/icon/sugar.png" alt='suger-icon' />
                <h3 className='f-c-gold'>
                  <small>SUGAR</small> 0%
                </h3>
              </div>
            </div>
            <p className='mx-4 text-center f-c-gold' data-aos="zoom-in">
              Great choice for diabetics or people who are watching their blood sugar levels.
            </p>
          </Col>
          <Col lg={4} md={4}>
            <div className="d-flex">
              <div className='text-center w-100' data-aos="zoom-in">
                <img src="/images/icon/kcal2.png" alt='suger-icon' />
                <h3 className='f-c-gold'>
                  <small>CALORIE</small> 0%
                </h3>
              </div>
            </div>
            <p className='mx-4 text-center f-c-gold' data-aos="zoom-in">
              A good choice for those who want to reduce their calorie intake.
            </p>
          </Col>
          <Col lg={4} md={4}>
            <div className="d-flex">
              <div className='text-center w-100' data-aos="zoom-in">
                <img src="/images/icon/lowsalt.png" alt='suger-icon' />
                <h3 className='f-c-gold'>
                  <small>SODIUM</small> 0%
                </h3>
              </div>
            </div>
            <p className='mx-4 text-center f-c-gold' data-aos="zoom-in">
              A good option for those on a low carb or ketogenic diet.
            </p>
          </Col>

        </Row>
        <Row>
          <Col lg={4}>
            <p className='f-c-gold' data-aos="zoom-in">&emsp;&emsp;
              Stevia is a natural sweetener.
              The leaves of the plant contain sweet compounds called steviol glycosides.times sweeter than normal sugar
            </p>
          </Col>
          <Col lg={4}>
            <p className='f-c-gold' data-aos="zoom-in">&emsp;&emsp;
              Our products are sweet, delicious, not bitter, not overpowering, and smell good.
            </p>
          </Col>
          <Col lg={4}>
            <p className='f-c-gold' data-aos="zoom-in">&emsp;&emsp;
              Stevia extract can withstand heat up to 220 degrees and can be used in baking and cooking instead of sugar.
            </p>
          </Col>
          <Col lg={12}>
            <Link className="link-fx-1 color-contrast-higher mt-4 f-c-gold" href="about" data-aos="fade-up" data-aos-delay="300">
              <h3 className='f-c-gold'>
                <span>Read Stevia</span>
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
      <div className="video-wrap ">
        <div id={id} ref={elementRef} style={{ backgroundImage: 'url(./images/gallery/bg1.jpg)' }} className="custom-video" />
      </div>
    </section>
  );
}

export default SteviaSection;
