import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button, NavDropdown, Image, Offcanvas } from 'react-bootstrap';

export default function NavigationBar(): JSX.Element {
  const { asPath } = useRouter();
  const [navbarTop, setNavbarTop] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <Navbar expand="lg" bg="white" className="py-0">
      <Container>
        <Navbar.Brand href="/" className="ps-0 ms-0 py-2 px-4 mx-3" >
          <Image src="images/logo.png" alt="logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="top"
          className="overflowX-auto"
        >
          <Offcanvas.Header closeButton>
            <Image src="images/logo.png" alt="logo" className='logo-nav' />
          </Offcanvas.Header>
          <Offcanvas.Body bsPrefix='navbar-nav ms-auto'>
            <Nav className="f-f-domine">
              <Link href="/" className="nav-link active">
                Wellcome
                <p></p>
              </Link>
              <Link href="/residences" className="nav-link">
                RESIDENCES
                {/* <p>ที่พักอาศัย</p> */}
              </Link>
              <Link href="/roomtype" className="nav-link">
                ROOMTYPE
                {/* <p>ประเภทห้อง</p> */}
              </Link>
              <Link href="/floorplan" className="nav-link">
                FLOOR PLANS
                {/* <p>แผนผังชั้น</p> */}
              </Link>
              <Link href="/amenities" className="nav-link">
                AMENITIES
                {/* <p>สิ่งอำนวยความสะดวก</p> */}
              </Link>
              {/* <Link href="/engage" className="nav-link">
              ENGAGE
            </Link> */}
              <Link href="/inquire" className="nav-link">
                INQUIRE
                {/* <p>สอบถาม</p> */}
              </Link>
              {/* <Link href="/gallery" className="nav-link">
                GALLERY
              </Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  );
};
