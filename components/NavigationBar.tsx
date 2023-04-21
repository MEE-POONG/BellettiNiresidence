import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button, NavDropdown, Image } from 'react-bootstrap';

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
    <Navbar expand="lg" bg="white" className="py-lg-0 px-4 px-lg-5">
      <Container>
        <Navbar.Brand href="/" className="ps-0 ms-0 py-2 px-4 mx-3">
          <Image src="images/logo.png" alt="logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Collapse id="navbarCollapse" className="justify-content-between py-4 py-lg-0">
          <Nav className="ms-auto py-0 text-center f-f-domine">
            <Nav.Link href="/" className="active">
              THE BUILDING
            </Nav.Link>
            <Nav.Link href="/residences">
              RESIDENCES
            </Nav.Link>
            <Nav.Link href="/roomtype">
              ROOMTYPE
            </Nav.Link>
            <Nav.Link href="/floorplan">
              FLOOR PLANS
            </Nav.Link>
            <Nav.Link href="/amenities">
              AMENITIES
            </Nav.Link>
            <Nav.Link href="/engage">
              ENGAGE
            </Nav.Link>
            <Nav.Link href="/inquire">
              INQUIRE
            </Nav.Link>
            <Nav.Link href="/gallery">
              GALLERY
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
