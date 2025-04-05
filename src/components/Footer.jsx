import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com",
      icon: "/images/nav-icon1.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://facebook.com",
      icon: "/images/nav-icon2.svg",
      alt: "Facebook",
    },
    {
      href: "https://instagram.com",
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
                src="/images/logo.svg"
                alt="Site Logo"
                style={{ maxWidth: "150px" }}
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
            <p className="mb-0 small text-muted">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .social-icon-img {
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .social-icon-img:hover {
          transform: scale(1.1);
          filter: brightness(1.2);
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
