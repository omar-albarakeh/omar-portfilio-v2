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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
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
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}>
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("skills")}>
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("projects")}>
              Projects
            </Nav.Link>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => updateActiveLink("home")}>
                Home
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => updateActiveLink("skills")}>
                Skills
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => updateActiveLink("projects")}>
                Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src="/images/nav-icon1.svg" alt="icon1" />
              </a>
              <a href="#">
                <img src="/images/nav-icon2.svg" alt="icon2" />
              </a>
              <a href="#">
                <img src="/images/nav-icon3.svg" alt="icon3" />
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
