import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function MyNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrolly > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListner("scroll",onScroll);
  }, []);


  const UpdateActiveLink =(value)=>{
    setActiveLink(value);
  }
  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : " "}>
      <Container fluid>
        <img
          src="/images/logo.png"
          alt="logo"
          width="40"
          height="40"
          className="logo"
        />

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="active">
              Home
            </Nav.Link>

            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#"
                className={
                  activeLink === "Home" ? "active navbar-link" : "navbar-link"
                }
                onClick={UpdateActiveLink('home')}>
                Home{" "}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                className={
                  activeLink === "Skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={UpdateActiveLink('skills')}>
                Skills
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#"
                className={
                  activeLink === "Projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={UpdateActiveLink(Projects)}>
                Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="">
                <img src="" alt="" />
              </a>
              <a href="">
                <img src="" alt="" />
              </a>
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </span>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
