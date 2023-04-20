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
      collapseOnSelect
      expand="lg"
      bg="white"
      fixed="top"
      className="navbar-light shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <Container>
        <Navbar.Brand href="index.html" className="d-block d-lg-none">
          <h1 className="text-primary fw-bold m-0">ProMan</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse" className="justify-content-between py-4 py-lg-0">
          <Nav className="ms-auto py-0">
            <Nav.Link href="#home" className="nav-item nav-link active">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#skill" className="nav-item nav-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#service" className="nav-item nav-link">
              Services
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="index.html" className="bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
            <h1 className="text-primary fw-bold m-0">ProMan</h1>
          </Navbar.Brand>
          <Nav className="me-auto py-0">
            <Nav.Link href="#project" className="nav-item nav-link">
              Projects
            </Nav.Link>
            <Nav.Link href="#team" className="nav-item nav-link">
              Team
            </Nav.Link>
            <Nav.Link href="#testimonial" className="nav-item nav-link">
              Testimonial
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-item nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
