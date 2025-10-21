import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// You will need to install this package: npm install react-icons
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section  className="py-5 py-md-5">
      <Container className="text-center">
        <h2 className="mb-4">Get In Touch</h2>
        <p className="lead mb-5">
          I'm actively seeking new opportunities. Feel free to connect directly on LinkedIn, explore my code, or send me an email.
        </p>
        <Row className="justify-content-center">

          {/* LinkedIn Button */}
          <Col md={3} sm={6} className="mb-3">
            <Button
              variant="primary"
              size="lg"
              href="https://linkedin.com/in/gowthamkvdi" // From resume [cite: 2]
              target="_blank"
              className="w-100"
            >
              <FaLinkedinIn className="me-1 pb-1 fs-4" /> LinkedIn
            </Button>
          </Col>

          {/* GitHub Button */}
          <Col md={3} sm={6} className="mb-3">
            <Button
              variant="dark"
              size="lg"
              href="https://github.com/gowthamkvdl" // From resume [cite: 2]
              target="_blank"
              className="w-100"
            >
              <FaGithub className="me-1 pb-1 fs-4" /> GitHub
            </Button>
          </Col>

          {/* Email Button */}
          <Col md={3} sm={6} className="mb-3">
            <Button
              variant="outline-primary"
              size="lg"
              href="mailto:gowthamkvdl@gmail.com" // From resume [cite: 2]
              className="w-100"
            >
              <FaEnvelope className="me-1 pb-1 fs-4" /> Email Me
            </Button>
          </Col>
        </Row >
      </Container >
    </section >
  );
}

export default Contact;