import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Carousel, Button, Image, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import Link from 'next/link';
const LocationAll: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <Container fluid className="mt-5 py-5 mb-5 text-center">
            <Image className="img-fluid bg-white p-3 w-50" src="images/map.png" alt="" />
        </Container>
    );
};

export default LocationAll;
