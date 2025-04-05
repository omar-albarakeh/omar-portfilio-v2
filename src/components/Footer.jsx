import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/omar.barakeh.967/",
      icon: "/images/nav-icon1.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/omar.barakeh.967/",
      icon: "/images/nav-icon2.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/omarbarakeh2/",
      icon: "/images/nav-icon3.svg",
      alt: "Instagram",
    },
  ];

  return (
    <footer className="footer py-5 bg-dark text-light">
      <Container>
        <Row className="align-items-center gy-4">
          <Col xs={12} md={6}>
            <MailchimpForm />
          </Col>

          <Col xs={12} md={3} className="text-center text-md-start">
            <a href="/" aria-label="Homepage">
              <img
                src="/images/logo.png"
                alt="Site Logo"
                width="150"
                className="logo"
              />
            </a>
          </Col>

          <Col xs={12} md={3} className="text-center text-md-end">
            <div className="social-icon mb-3">
              {socialLinks.map((link, index) => (
                <a
                  key={`social-${index}`}
                  href={link.href}
                  className="mx-1"
                  aria-label={link.alt}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={link.icon}
                    alt={link.alt}
                    style={{ width: "24px" }}
                    className="social-icon-img"
                  />
                </a>
              ))}
            </div>
            <div>
              <p class="copyright">© 2025 All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
