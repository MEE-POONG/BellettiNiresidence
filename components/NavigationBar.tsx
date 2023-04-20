import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';

export default function NavigationBar(): JSX.Element {
  const { asPath } = useRouter();
  const [navbarTop, setNavbarTop] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const bodyScroll = document.body.scrollTop;
    const elementScroll = document.documentElement.scrollTop;
    if (bodyScroll > 20 || elementScroll > 20) {
      setNavbarTop(true);
    } else {
      setNavbarTop(false);
    }
  };
  return (
    <Navbar
      expand="lg"
      bg="white"
      className="py-lg-0 px-4 px-lg-5"
    >
      <Container>
        <Navbar.Brand href="index.html" className="d-block d-lg-none">
          <h1 className="text-primary">Photozone</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse" className="justify-content-between py-4 py-lg-0">
          <Nav className="ms-auto py-0">
            <Nav.Link href="index.html" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="about.html">About</Nav.Link>
            <Nav.Link href="service.html">Services</Nav.Link>
          </Nav>
          <Navbar.Brand href="index.html" className="bg-primary py-2 px-4 mx-3 d-none d-lg-block">
            <h1 className="text-white">Photozone</h1>
          </Navbar.Brand>
          <Nav className="me-auto py-0">
            <Nav.Link href="project.html">Projects</Nav.Link>
            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item href="feature.html">Features</NavDropdown.Item>
              <NavDropdown.Item href="team.html">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="testimonial.html">Testimonial</NavDropdown.Item>
              <NavDropdown.Item href="404.html">404 Page</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact.html">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
