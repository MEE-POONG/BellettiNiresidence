import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { intro, productList } from '@/test';
import AOS from 'aos';

const PricingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const productIntro = intro.filter(item => item.pagelist === 'product');
  const productsWithPromotion = productList;

  var settingsSlide = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <section className="pricing-section section-padding section-bg" id="section_5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="text-center f-s-philosopher m-0 f-c-gold" data-aos="fade-up">{productIntro[0]?.title}</h1>
            <h3 className='text-center f-c-gold' data-aos="fade-up">{productIntro[0]?.srcipOne}</h3>
            <h3 className='text-center f-c-gold mb-5' data-aos="fade-up">{productIntro[0]?.srcipTwo}</h3>
          </Col>
        </Row>
        <Slider {...settingsSlide}>
          {productsWithPromotion?.map((productShow, index) => (
            <div key={productShow?.id} data-aos="fade-up" data-aos-delay={300 * (index + 1)} className='p-1'>
              <div className="pricing-thumb mx-auto">
                <h3 className='text-center'>
                  {productShow?.name}
                </h3>
                <a className="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                  <span>Buy Ticket</span>
                  <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="16" cy="16" r="15.5"></circle>
                      <line x1="10" y1="18" x2="16" y2="12"></line>
                      <line x1="16" y1="12" x2="22" y2="18"></line>
                    </g>
                  </svg>
                </a>
                <img src={productShow?.img} alt={productShow?.name} className='w-100 object-fit-contain' />
                <div className="d-flex">
                  <p className={productShow?.price > 0 ? "pricing-tag ms-auto" : "d-none"}>
                    <span>{productShow?.price}.-</span>
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default PricingSection;
