import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ReactSlickExampleProps = {
    images: string[];
};

const ReactSlickExample: React.FC<ReactSlickExampleProps> = () => {
    const images = [
        'https://via.placeholder.com/300x200?text=Slide1',
        'https://via.placeholder.com/300x200?text=Slide2',
        'https://via.placeholder.com/300x200?text=Slide3',
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index}`} />
            ))}
        </Slider>
    );
};

export default ReactSlickExample;
