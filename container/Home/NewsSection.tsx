import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';

const NewsSection = () => {
  const newsData = [
    {
      img: './assets/images/other/6.jpg',
      tag: 'Featured',
      title: 'Healthy Lifestyle and happy living tips',
      link: 'news-detail.html',
    },
    {
      img: './assets/images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg',
      tag: 'Featured',
      title: 'How to make a healthy meal',
      link: 'news-detail.html',
    },
    {
      img: './assets/images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg',
      tag: 'Promotions',
      title: 'Is Coconut good for you?',
      link: 'news-detail.html',
      date: '8 April 2022',
    },
    {
      img: './assets/images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg',
      tag: 'News',
      title: 'Salmon Steak Noodle',
      link: 'news-detail.html',
    },
    {
      img: './assets/images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg',
      tag: 'Meeting',
      title: 'Making a healthy salad',
      link: 'news-detail.html',
      date: '30 April 2022',
    },
  ];

  return (
    <section className="news section-padding">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>
          </Col>
          {newsData.map((item, index) => (
            <Col lg={index < 2 ? 6 : 4} md={6} xs={12} key={index}>
              <div className={`news-thumb ${index < 2 ? 'mb-4' : index === 3 ? 'mb-lg-4 mb-2' : 'mb-lg-0 mb-lg-4 mb-0'}`}>
                <a href={item.link}>
                  <Image src={item.img} fluid className="news-image" alt="" />
                </a>
                <div className={`news-text-info ${index < 2 ? 'news-text-info-large' : ''}`}>
                  <Badge className={`category-tag ${item.tag === 'Featured' ? 'bg-danger' : 'bg-info'} me-3`}>
                    {item.tag}
                  </Badge>
                  {item.date && <strong>{item.date}</strong>}
                  <h5 className="news-title mt-2">
                    <a href={item.link} className="news-title-link">
                      {item.title}
                    </a>
                  </h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsSection;
