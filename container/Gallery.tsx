import React, { FC, Component } from "react";
import { Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider, { CustomArrowProps } from "react-slick";
const SampleNextArrow: FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

const SamplePrevArrow: FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
};
const GalleryPage: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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

    const images = Array(20).fill(null).map((_, index) => `/images/gallery${index + 1}.jpg`);
    return (
        <div className="gallery-show">
            <Container>
                <Slider {...settings} className="mx-4">
                    {images.map((imgSrc, index) => (
                        <div key={index} className="p-2">
                            <img src={imgSrc} alt={`Image-${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
}

export default GalleryPage;
