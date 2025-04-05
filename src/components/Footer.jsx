import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: "/images/nav-icon1.svg", alt: "LinkedIn" },
    { href: "#", icon: "/images/nav-icon2.svg", alt: "Facebook" },
    { href: "#", icon: "/images/nav-icon3.svg", alt: "Instagram" },
  ];

  return (
    <footer className="footer py-5 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <MailchimpForm />
          </Col>

          <Col
            xs={12}
            md={3}
            className="text-center text-md-start mb-3 mb-md-0">
            <img
              src="/images/logo.svg"
              alt="Site Logo"
              style={{ maxWidth: "150px" }}
            />
          </Col>

          <Col xs={12} md={3} className="text-center text-md-end">
            <div className="social-icon mb-2">
              {socialLinks.map(({ href, icon, alt }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="mx-1"
                  aria-label={alt}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={icon} alt={alt} style={{ width: "24px" }} />
                </a>
              ))}
            </div>
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
