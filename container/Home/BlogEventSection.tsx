import React, { FC, useEffect } from 'react';
import AOS from 'aos';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';
import { event, blog } from '@/test';
import Link from 'next/link';
import Slider from 'react-slick';

type BlogItem = {
  id: string;
  title: string;
  subTitle: string;
  srcipOne: string;
  subDetail: string;
  detailOne: string;
  detailTwo: string;
  listOne: string;
  img: string;
  source?: string;
};
type EventItem = {
  id: string;
  title: string;
  srcipOne: string;
  img: string;
  link?: string;
  start: string;
  end: string;
};
const BlogEventSection: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const elementRef = React.useRef<HTMLDivElement>(null);
  var settingsBlog = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    rtl: true,
    nextArrow: <div className='d-none' />,
    prevArrow: <div className='d-none' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  var settingsEvent = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <div className='d-none' />,
    prevArrow: <div className='d-none' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  const blogItems = blog.map((item: BlogItem) => (
    <div key={item.id} className="a-box" data-aos="fade-right">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3 className='truncate-one-lines'>{item.title}</h3>
        <div className="mt-3">
          <p className="truncate-full-lines" >{item.srcipOne}</p>
        </div>
        <hr />
        <div>
          <Link className="link-fx-1 color-contrast-higher f-c-gold mb-3" href={"blog/" + item.id}>
            <h3 className='f-c-gold m-0'>
              <span>Read</span>
              <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  ));
  const eventItems = event.map((item: EventItem) => (
    <div key={item.id} className="a-box" data-aos="fade-left">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3 className='truncate-one-lines'>{item.title}</h3>
        <div className='truncate-full-lines'>
          <Row>
            <Col className="truncate-two-lines" xs={12}>
              <p>{item.srcipOne}</p>
            </Col>
            <Col xs={5}>
              <p><strong className="m-0">start :</strong></p>
            </Col>
            <Col xs={7}>
              <p>{moment(item.start).format('HH:mm DD MMM YY')}</p>
            </Col>
            <Col xs={5}>
              <p><strong className="m-0">end :</strong></p>
            </Col>
            <Col xs={7}>
              <p>{moment(item.end).format('HH:mm DD MMM YY')}</p>
            </Col>
          </Row>
        </div>
        <hr />
        <div>
          <Link className="link-fx-1 color-contrast-higher f-c-gold mb-3" href={"event/" + item.id}>
            <h3 className='f-c-gold m-0'>
              <span>Read</span>
              <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="blogevent-section section-padding" id="section_3">
      <Container>
        <Row>
          <Col xs={12} md={6} className='blog-page'>
            <h1 className="f-s-philosopher mb-4 text-center" data-aos="fade-up">Blogs</h1>
            <div className="artists-thumb">
              <Slider {...settingsBlog}>
                {blogItems}
              </Slider>
            </div>
          </Col>
          <Col xs={12} md={6} className='event-page'>
            <h1 className="f-s-philosopher mb-4 text-center" data-aos="fade-up">Events</h1>
            <div className="artists-thumb">
              <Slider {...settingsEvent}>
                {eventItems}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="video-wrap ">
        <div ref={elementRef} style={{ backgroundImage: 'url(./images/gallery/bg1.jpg)' }} className="custom-video" />
      </div>
    </section>
  );
};

export default BlogEventSection;
