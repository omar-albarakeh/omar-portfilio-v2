import React from "react";
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
  return (
    <Navbar bg="light" expand="lg">
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

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Home</NavDropdown.Item>
              <NavDropdown.Item href="#">Skills</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Projects</NavDropdown.Item>
            </NavDropdown>

          </Nav>
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
