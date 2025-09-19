import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="d-flex align-items-center vh-100 text-center">
      <Container>
        <h1 className="display-4 fw-bold">Hi, I'm G 👋</h1>
        <p className="lead">MERN Stack Developer | Future Entrepreneur</p>
        <Button variant="primary" href="/resume.pdf" className="mt-3">
          Download Resume
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
