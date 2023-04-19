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
      </Container>
    </Navbar>

  );
};
