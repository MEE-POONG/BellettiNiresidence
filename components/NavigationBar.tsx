import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
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
    <Navbar expand="lg" className="shadow-lg">
      <Container>
        <Navbar.Brand>
          <Link href="/" >
            <Image src="/images/svg-logo.svg" alt="" width={100} height={100} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Link href="/" className='nav-item' >
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link href="/residences" className='nav-item' >
              <Nav.Link>Residences</Nav.Link>
            </Link>

            <Link href="/room_type" className='nav-item' >
              <Nav.Link>Room Type</Nav.Link>
            </Link>

            <Link href="/floor_plans" className='nav-item' >
              <Nav.Link>Floor Plans</Nav.Link>
            </Link>

            <Link href="/amenities" className='nav-item' >
              <Nav.Link>Amenities</Nav.Link>
            </Link>

            <Link href="/engage" className='nav-item' >
              <Nav.Link>Engage</Nav.Link>
            </Link>

            <Link href="/inquire" className='nav-item' >
              <Nav.Link>Inquire</Nav.Link>
            </Link>

            <Link href="/gallery" className='nav-item' >
              <Nav.Link>Gallery</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
