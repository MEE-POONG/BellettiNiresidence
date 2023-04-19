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
    <Navbar expand="lg" className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0 float-start">Property</a>

            <ul
              className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li><a href="index.html">Home</a></li>
              <li className="has-children">
                <a href="properties.html">Properties</a>
                <ul className="dropdown">
                  <li><a href="#">Buy Property</a></li>
                  <li><a href="#">Sell Property</a></li>
                  <li className="has-children">
                    <a href="#">Dropdown</a>
                    <ul className="dropdown">
                      <li><a href="#">Sub Menu One</a></li>
                      <li><a href="#">Sub Menu Two</a></li>
                      <li><a href="#">Sub Menu Three</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="services.html">Services</a></li>
              <li className="active"><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>

            <a
              href="#"
              className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
      {/* <Container>
        <Navbar.Brand>
          <Link href="/" >
            <Image src="/images/svg-logo.svg" alt="" width={100} height={100} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Link href="/" className='nav-link' >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/residences" className='nav-link' >
                Residences
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/room_type" className='nav-link' >
                Room Type
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/floor_plans" className='nav-link' >
                Floor Plans
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/amenities" className='nav-link' >
                Amenities
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/engage" className='nav-link' >
                Engage
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/inquire" className='nav-link' >
                Inquire
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/gallery" className='nav-link' >
                Gallery
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container> */}
    </Navbar>

  );
};
