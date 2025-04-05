import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") setEmail("");
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      onValidated({ EMAIL: email });
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter
              <br />& Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx d-flex">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="form-control me-2"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
