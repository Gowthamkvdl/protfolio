import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="d-flex align-items-center vh-100 text-center py-5">
      
      <Container>
        
        <h1 className="display-5">Hi, I'm Gowtham</h1>
        
        <h2 className="display-4 fw-bolder text-dark mb-3">
            Full-stack Developer
        </h2>

        <p className="lead fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          Focused on creating real-world impact through technology
        </p>

        <Button 
          variant="primary" 
          href="/resume.pdf" 
          className="mt-2 px-5 py-3 fs-5 shadow-lg" 
        >
          Download Resume
        </Button>
      </Container>
    </section>
  );
}

export default Hero;