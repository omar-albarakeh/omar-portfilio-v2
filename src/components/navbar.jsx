import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function MyNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/images/logo.png"
            alt="logo"
            width="60"
            height="60"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            {["home", "skills", "projects"].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={`navbar-link ${activeLink === link ? "active" : ""}`}
                onClick={() => updateActiveLink(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}

            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item
                href="#home"
                onClick={() => updateActiveLink("home")}>
                Home
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#skills"
                onClick={() => updateActiveLink("skills")}>
                Skills
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#projects"
                onClick={() => updateActiveLink("projects")}>
                Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="navbar-text">
            <div className="social-icon">
              {["nav-icon1", "nav-icon2", "nav-icon3"].map((icon, i) => (
                <a href="#" key={i}>
                  <img src={`/images/${icon}.svg`} alt={`icon${i + 1}`} />
                </a>
              ))}
            </div>
            <button className="vvd" onClick={() => console.log("Connect")}>
              <span>LetsConnect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
